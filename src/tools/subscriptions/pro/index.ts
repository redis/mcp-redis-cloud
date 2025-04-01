import { Tool } from "@modelcontextprotocol/sdk/types.js";
import { ToolHandlers } from "../../../utils/types.js";
import { z } from "zod";
import {
  SubscriptionCreateRequest,
  SubscriptionsProService,
} from "../../../clients/generated/index.js";
import { emptySchema, commonSchemas } from "../../../utils/common/schemas.js";
import {
  createToolResponse,
  executeApiCall,
  validateToolInput,
  extractArguments,
} from "../../../utils/common/utils.js";

// Schema definitions
const databaseModuleSchema = z.union([
  z.object({
    name: z.string(),
    capabilityName: z.string().optional(),
    description: z.string().optional(),
    parameters: z.array(z.unknown()).optional(),
  }),
  z.object({
    name: z.string(),
    capabilityName: z.string().optional(),
    description: z.string().optional(),
    parameters: z
      .array(
        z.object({
          name: z.string(),
          description: z.string(),
          type: z.string(),
          defaultValue: z.number(),
          required: z.boolean(),
        }),
      )
      .optional(),
  }),
]);

const localThroughputSchema = z.object({
  region: z.string(),
  writeOperationsPerSecond: z.number().int().optional(),
  readOperationsPerSecond: z.number().int().optional(),
});

const subscriptionIdSchema = commonSchemas.subscriptionId;

const createSubscriptionSchema = z.object({
  name: z.string().optional(),
  dryRun: z.boolean().optional(),
  deploymentType: z.enum(["single-region", "active-active"]).optional(),
  paymentMethod: commonSchemas.paymentMethod,
  paymentMethodId: z.number().int().optional(),
  memoryStorage: z.enum(["ram", "ram-and-flash"]).optional(),
  cloudProviders: z.array(
    z.object({
      provider: z.enum(["AWS", "GCP"]).optional(),
      cloudAccountId: z.number().int().optional(),
      regions: z.array(
        z.object({
          region: z.string(),
          multipleAvailabilityZones: z.boolean().optional(),
          preferredAvailabilityZones: z.array(z.string()).optional(),
          networking: z
            .object({
              deploymentCIDR: z.string(),
              vpcId: z.string().optional(),
            })
            .optional(),
        }),
      ),
    }),
  ),
  databases: z.array(
    z.object({
      name: commonSchemas.name,
      protocol: z.enum(["redis", "memcached"]),
      datasetSizeInGb: z.number().min(0.1).optional(),
      supportOSSClusterApi: z.boolean().optional(),
      dataPersistence: z
        .enum([
          "none",
          "aof-every-1-second",
          "aof-every-write",
          "snapshot-every-1-hour",
          "snapshot-every-6-hours",
          "snapshot-every-12-hours",
        ])
        .optional(),
      replication: z.boolean().optional(),
      throughputMeasurement: z
        .object({
          by: z.enum(["operations-per-second", "number-of-shards"]),
          value: z.number().int(),
        })
        .optional(),
      localThroughputMeasurement: z.array(localThroughputSchema).optional(),
      modules: z.array(databaseModuleSchema).optional(),
      quantity: z.number().int().optional(),
      averageItemSizeInBytes: z.number().int().optional(),
      respVersion: z.enum(["resp2", "resp3"]).optional(),
      shardingType: z
        .enum([
          "default-regex-rules",
          "custom-regex-rules",
          "redis-oss-hashing",
        ])
        .optional(),
      queryPerformanceFactor: z.string().optional(),
    }),
  ),
  redisVersion: z.string().optional(),
});

// Tool definitions
const CREATE_PRO_SUBSCRIPTION_TOOL: Tool = {
  name: "create-pro-subscription",
  description:
    "Create a new pro subscription. Returns a TASK ID that can be used to track the status of the subscription creation. " +
    "Prerequisites: 1) Verify payment method by checking get-current-payment-methods. " +
    "2) For database modules, validate against get-database-modules list. " +
    "3) Validate regions using get-pro-plans-regions. " +
    "The payload must match the input schema.",
  inputSchema: {
    type: "object",
    properties: {
      name: {
        type: "string",
        description: "Optional. Subscription name",
        example: "My new subscription",
      },
      dryRun: {
        type: "boolean",
        description:
          "Optional. When 'false': Creates a deployment plan and deploys it (creating any resources required by the plan). When 'true': creates a read-only deployment plan without any resource creation. Default: 'false'",
        default: false,
      },
      deploymentType: {
        type: "string",
        description:
          "Optional. When 'single-region' or null: Creates a single region subscription. When 'active-active': creates an active-active (multi-region) subscription",
        enum: ["single-region", "active-active"],
      },
      paymentMethod: {
        type: "string",
        description:
          "Required. The payment method for the requested subscription. If 'credit-card' is specified, 'paymentMethodId' must be defined. Default: 'credit-card. Validate this before submitting the subscription.",
        enum: ["credit-card", "marketplace"],
        default: "credit-card",
      },
      paymentMethodId: {
        type: "integer",
        description:
          "Required if paymentMethod is credit-card. A valid payment method that was pre-defined in the current account. This value is Optional if 'paymentMethod' is 'marketplace', but Required for all other account types. Validate this before submitting the subscription.",
        format: "int32",
      },
      memoryStorage: {
        type: "string",
        description:
          "Optional. Memory storage preference: either 'ram' or a combination of 'ram-and-flash'. Default: 'ram'",
        enum: ["ram", "ram-and-flash"],
        default: "ram",
      },
      cloudProviders: {
        type: "array",
        description:
          "Required. Cloud hosting & networking details.  Make sure to validate this before submitting the subscription.",
        items: {
          type: "object",
          properties: {
            provider: {
              type: "string",
              description: "Optional. Cloud provider. Default: 'AWS'",
              enum: ["AWS", "GCP"],
              default: "AWS",
            },
            cloudAccountId: {
              type: "integer",
              description:
                "Optional. Cloud account identifier. Default: Redis internal cloud account (using Cloud Account Id = 1 implies using Redis internal cloud account). Note that a GCP subscription can be created only with Redis internal cloud account.",
              format: "int32",
              example: 1,
            },
            regions: {
              type: "array",
              description:
                "Required. Cloud networking details, per region (single region or multiple regions for Active-Active cluster only)",
              items: {
                type: "object",
                properties: {
                  region: {
                    type: "string",
                    description:
                      "Required. Deployment region as defined by cloud provider",
                    example: "us-east-1",
                  },
                  multipleAvailabilityZones: {
                    type: "boolean",
                    description:
                      "Optional. Support deployment on multiple availability zones within the selected region. Default: 'false'",
                    default: false,
                  },
                  preferredAvailabilityZones: {
                    type: "array",
                    description:
                      "Optional. Availability zones deployment preferences. If 'multipleAvailabilityZones' is set to 'true', you must specify three availability zones.",
                    items: {
                      type: "string",
                    },
                  },
                  networking: {
                    type: "object",
                    description:
                      "Optional. Cloud networking details. Default: if using Redis internal cloud account, 192.168.0.0/24",
                    properties: {
                      deploymentCIDR: {
                        type: "string",
                        description:
                          "Optional. Deployment CIDR mask. Default: If using Redis internal cloud account, 192.168.0.0/24",
                        example: "10.0.0.0/24",
                      },
                      vpcId: {
                        type: "string",
                        description:
                          "Optional. Either an existing VPC Id or create a new VPC (if no VPC is specified)",
                        example: "<vpc-identifier>",
                      },
                    },
                    required: ["deploymentCIDR"],
                  },
                },
                required: ["region"],
              },
            },
          },
          required: ["regions"],
        },
      },
      databases: {
        type: "array",
        description:
          "Required. Databases specifications for each planned database. Make sure to validate this before submitting the subscription.",
        items: {
          type: "object",
          properties: {
            name: {
              type: "string",
              description:
                "Required. Database name (must be up to 40 characters long, include only letters, digits, or hyphen ('-'), start with a letter, and end with a letter or digit)",
              example: "Redis-database-example",
            },
            protocol: {
              type: "string",
              description:
                "Optional. Database protocol: either 'redis' or 'memcached'. Default: 'redis'",
              enum: ["redis", "memcached"],
              default: "redis",
            },
            datasetSizeInGb: {
              type: "number",
              description:
                "Optional. The maximum amount of data in the dataset for this specific database is in GB. You can not set both datasetSizeInGb and totalMemoryInGb.",
              format: "double",
              minimum: 0.1,
              example: 1,
            },
            supportOSSClusterApi: {
              type: "boolean",
              description:
                "Optional. Support Redis open-source (OSS) Cluster API. Default: 'false'",
              default: false,
            },
            dataPersistence: {
              type: "string",
              description:
                "Optional. Rate of database data persistence (in persistent storage). Default: 'none'",
              enum: [
                "none",
                "aof-every-1-second",
                "aof-every-write",
                "snapshot-every-1-hour",
                "snapshot-every-6-hours",
                "snapshot-every-12-hours",
              ],
            },
            replication: {
              type: "boolean",
              description: "Optional. Databases replication. Default: 'true'",
              default: true,
            },
            throughputMeasurement: {
              type: "object",
              description:
                "Optional. Throughput measurement method. Default: 25000 ops/sec",
              properties: {
                by: {
                  type: "string",
                  description:
                    "Required. Throughput measurement method. Either 'number-of-shards' or 'operations-per-second'",
                  enum: ["operations-per-second", "number-of-shards"],
                },
                value: {
                  type: "integer",
                  description:
                    "Required. Throughput value (as applies to selected measurement method)",
                  format: "int64",
                  example: 10000,
                },
              },
              required: ["by", "value"],
            },
            localThroughputMeasurement: {
              type: "array",
              description:
                "Optional. Throughput measurement for an active-active subscription",
              items: {
                type: "object",
                properties: {
                  region: {
                    type: "string",
                  },
                  writeOperationsPerSecond: {
                    type: "integer",
                    description: "Default: 1000 ops/sec",
                    format: "int64",
                    example: 1000,
                  },
                  readOperationsPerSecond: {
                    type: "integer",
                    description: "Default: 1000 ops/sec",
                    format: "int64",
                    example: 1000,
                  },
                },
              },
            },
            modules: {
              type: "array",
              description:
                "Optional. Redis modules to be provisioned in the database.  Use get-database-modules to retrieve available modules and configure the desired ones",
              items: {
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    description:
                      "Required. Redis module Id. Get the list of available module identifiers by calling get-database-modules",
                  },
                  parameters: {
                    type: "object",
                    description: "Optional. Redis database module parameters",
                    additionalProperties: true,
                  },
                },
                required: ["name"],
              },
            },
            quantity: {
              type: "integer",
              description:
                "Optional. Number of databases (of this type) that will be created. Default: 1",
              format: "int32",
              example: 1,
            },
            averageItemSizeInBytes: {
              type: "integer",
              description:
                "Optional. Relevant only to ram-and-flash clusters. Estimated average size (measured in bytes) of the items stored in the database. Default: 1000",
              format: "int64",
            },
            respVersion: {
              type: "string",
              description:
                "Optional. RESP version must be compatible with Redis version.",
              enum: ["resp2", "resp3"],
              example: "resp3",
            },
            shardingType: {
              type: "string",
              description: "Optional. Database Hashing policy.",
              enum: [
                "default-regex-rules",
                "custom-regex-rules",
                "redis-oss-hashing",
              ],
            },
            queryPerformanceFactor: {
              type: "string",
              description:
                "Optional. The query performance factor adds extra compute power specifically for search and query.",
              example: "2x",
            },
          },
          required: ["name", "protocol"],
        },
      },
      redisVersion: {
        type: "string",
        description:
          "Optional. If specified, the redisVersion defines the Redis version of the databases in the subscription. If omitted, the Redis version will be the default",
        example: "7.2",
      },
    },
    required: ["cloudProviders", "databases"],
  },
};

const GET_PRO_SUBSCRIPTIONS_TOOL: Tool = {
  name: "get-pro-subscriptions",
  description: "Get the pro subscriptions for the current Cloud Redis account",
  inputSchema: emptySchema,
};

const GET_PRO_SUBSCRIPTION_TOOL: Tool = {
  name: "get-pro-subscription",
  description:
    "Get pro subscription by ID. The payload must match the input schema.",
  inputSchema: {
    type: "object",
    properties: {
      subscriptionId: {
        type: "number",
        description: "Subscription ID",
        min: 1,
      },
    },
    required: ["subscriptionId"],
  },
};

export const SUBSCRIPTIONS_PRO_TOOLS = [
  CREATE_PRO_SUBSCRIPTION_TOOL,
  GET_PRO_SUBSCRIPTIONS_TOOL,
  GET_PRO_SUBSCRIPTION_TOOL,
];

export const SUBSCRIPTIONS_PRO_HANDLERS: ToolHandlers = {
  "create-pro-subscription": async (request) => {
    const {
      name,
      dryRun,
      deploymentType,
      paymentMethod,
      paymentMethodId,
      memoryStorage,
      cloudProviders,
      databases,
      redisVersion,
    } = extractArguments<{
      name?: string;
      dryRun?: boolean;
      deploymentType?: SubscriptionCreateRequest["deploymentType"];
      paymentMethod?: SubscriptionCreateRequest["paymentMethod"];
      paymentMethodId?: number;
      memoryStorage?: SubscriptionCreateRequest["memoryStorage"];
      cloudProviders: SubscriptionCreateRequest["cloudProviders"];
      databases: SubscriptionCreateRequest["databases"];
      redisVersion?: string;
    }>(request);

    // Validate input
    validateToolInput(
      createSubscriptionSchema,
      {
        name,
        dryRun,
        deploymentType,
        paymentMethod,
        paymentMethodId,
        memoryStorage,
        cloudProviders,
        databases,
        redisVersion,
      },
      "Create pro subscription",
    );

    // If paymentMethod is credit-card, paymentMethodId is required
    if (paymentMethod === "credit-card" && !paymentMethodId) {
      throw new Error(
        "paymentMethodId is required when paymentMethod is credit-card",
      );
    }

    const result = await executeApiCall(
      () =>
        SubscriptionsProService.createSubscription({
          name,
          dryRun,
          deploymentType,
          paymentMethod,
          paymentMethodId,
          memoryStorage,
          cloudProviders,
          databases,
          redisVersion,
        } as SubscriptionCreateRequest),
      "Create pro subscription",
    );

    return createToolResponse(result);
  },

  "get-pro-subscriptions": async () => {
    const subscriptions = await executeApiCall(
      () => SubscriptionsProService.getAllSubscriptions(),
      "Get pro subscriptions",
    );
    return createToolResponse(subscriptions);
  },
  "get-pro-subscription": async (request) => {
    const { subscriptionId } = extractArguments<{
      subscriptionId: number;
    }>(request);

    // Validate input
    validateToolInput(
      subscriptionIdSchema,
      subscriptionId,
      `Get pro subscription: ${subscriptionId}`,
    );

    const result = await executeApiCall(
      () => SubscriptionsProService.getSubscriptionById(subscriptionId),
      `Get pro subscription: ${subscriptionId}`,
    );

    return createToolResponse(result);
  },
};
