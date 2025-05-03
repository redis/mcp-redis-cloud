import { Tool } from "@modelcontextprotocol/sdk/types.js";
import { ToolHandlers } from "../../../utils/types.js";
import { z } from "zod";
import {
  FixedDatabaseCreateRequest,
  DatabasesEssentialsService,
} from "../../../clients/generated/index.js";
import { commonSchemas } from "../../../utils/common/schemas.js";
import {
  createToolResponse,
  executeApiCall,
  validateToolInput,
  extractArguments,
} from "../../../utils/common/utils.js";

// Schema definitions
const getEssentialDatabasesSchema = z.object({
  subscriptionId: commonSchemas.subscriptionId,
  offset: z.number().optional(),
  limit: z.number().optional(),
});

const databaseCreateRequestSchema = z.object({
  subscriptionId: commonSchemas.subscriptionId,
  name: z.string(),
  // DO NOT set protocol unless explicitly requested
  protocol: z
    .union([z.literal("redis"), z.literal("memcached"), z.literal("stack")])
    .optional(),
  datasetSizeInGb: z.number().optional(),
  respVersion: z.union([z.literal("resp2"), z.literal("resp3")]).optional(),
  supportOSSClusterApi: z.boolean().optional(),
  useExternalEndpointForOSSClusterApi: z.boolean().optional(),
  enableDatabaseClustering: z.boolean().optional(),
  numberOfShards: z.number().optional(),
  dataPersistence: z
    .union([
      z.literal("none"),
      z.literal("aof-every-1-second"),
      z.literal("aof-every-write"),
      z.literal("snapshot-every-1-hour"),
      z.literal("snapshot-every-6-hours"),
      z.literal("snapshot-every-12-hours"),
    ])
    .optional(),
  dataEvictionPolicy: z
    .union([
      z.literal("allkeys-lru"),
      z.literal("allkeys-lfu"),
      z.literal("allkeys-random"),
      z.literal("volatile-lru"),
      z.literal("volatile-lfu"),
      z.literal("volatile-random"),
      z.literal("volatile-ttl"),
      z.literal("noeviction"),
    ])
    .optional(),
  replication: z.boolean().optional(),
  periodicBackupPath: z.string().optional(),
  sourceIps: z.array(z.string()).optional(),
  clientTlsCertificates: z
    .array(
      z.object({
        publicCertificatePEMString: z.string(),
      }),
    )
    .optional(),
  enableTls: z.boolean().optional(),
  password: z.string().optional(),
  alerts: z
    .array(
      z.object({
        name: z.union([
          z.literal("dataset-size"),
          z.literal("datasets-size"),
          z.literal("throughput-higher-than"),
          z.literal("throughput-lower-than"),
          z.literal("latency"),
          z.literal("syncsource-error"),
          z.literal("syncsource-lag"),
          z.literal("connections-limit"),
        ]),
        value: z.number(),
      }),
    )
    .optional(),
  modules: z
    .array(
      z.object({
        name: z.string(),
        parameters: z.record(z.record(z.any())).optional(),
      }),
    )
    .optional(),
});

// Tool definitions
const GET_ESSENTIAL_DATABASES_TOOL: Tool = {
  name: "get-essential-databases",
  description: "Get the essential databases for the provided subscription Id",
  inputSchema: {
    type: "object",
    properties: {
      subscriptionId: {
        type: "number",
        description: "Subscription ID",
        min: 0,
      },
      offset: {
        type: "number",
        description: "Optional. Number of items to skip",
      },
      limit: {
        type: "number",
        description: "Optional. Maximum number of items to return",
      },
    },
    required: ["subscriptionId"],
  },
};

const CREATE_ESSENTIAL_DATABASE_TOOL: Tool = {
  name: "create-essential-database",
  description:
    "Create a new essential database inside the specified subscription ID. Returns a TASK ID that can be used to track the status of the database creation. " +
    "IMPORTANT GUIDELINES: " +
    "1) DO NOT set the protocol parameter unless explicitly requested. " +
    "2) Modules can only be selected if protocol is 'redis'. " +
    "3) When creating a free database, first call the get-essential-subscriptions tool to check if a free database already exists (each account is limited to one free database). " +
    "4) For database modules, validate against get-database-modules list. " +
    "5) The payload must match the input schema.",
  inputSchema: {
    type: "object",
    properties: {
      subscriptionId: {
        type: "number",
        description: "Subscription ID",
        min: 0,
      },
      name: {
        type: "string",
        description:
          "Required. Name of the database. Database name is limited to 40 characters or less and must include only letters, digits, and hyphens ('-'). It must start with a letter and end with a letter or digit.",
      },
      protocol: {
        type: "string",
        description:
          "Optional. Database protocol. DO NOT SET THIS PARAMETER UNLESS EXPLICITLY REQUESTED. Default: 'redis' for Pay-As-You-Go subscriptions, 'stack' for Redis Flex subscriptions",
        enum: ["redis", "memcached", "stack"],
      },
      datasetSizeInGb: {
        type: "number",
        description:
          "Optional. The maximum amount of data in the dataset for this specific database is in GB. If 'replication' is true, the database's total memory will be twice as large as the datasetSizeInGb. If 'replication' is false, the database's total memory will be the datasetSizeInGb value.",
        minimum: 0.1,
      },
      respVersion: {
        type: "string",
        description:
          "Optional. RESP version must be compatible with Redis version.",
        enum: ["resp2", "resp3"],
      },
      supportOSSClusterApi: {
        type: "boolean",
        description:
          "Optional. Support Redis open-source (OSS) Cluster API. Supported only for 'Pay-As-You-Go' subscriptions. Default: 'false'",
      },
      useExternalEndpointForOSSClusterApi: {
        type: "boolean",
        description:
          "Optional. Should use external endpoint for open-source (OSS) Cluster API. Can only be enabled if OSS Cluster API support is enabled. Supported only for 'Pay-As-You-Go' subscriptions.",
      },
      enableDatabaseClustering: {
        type: "boolean",
        description:
          "Optional. Distributes database data to different cloud instances. Supported only for 'Pay-As-You-Go' subscriptions.",
      },
      numberOfShards: {
        type: "integer",
        description:
          "Optional. Specifies the number of master shards. Supported only for 'Pay-As-You-Go' subscriptions.",
      },
      dataPersistence: {
        type: "string",
        description:
          "Optional. Rate of database data persistence (in persistent storage). The default is according to the subscription plan.",
        enum: [
          "none",
          "aof-every-1-second",
          "aof-every-write",
          "snapshot-every-1-hour",
          "snapshot-every-6-hours",
          "snapshot-every-12-hours",
        ],
      },
      dataEvictionPolicy: {
        type: "string",
        description:
          "Optional. Data items eviction method. Default: 'volatile-lru'",
        enum: [
          "allkeys-lru",
          "allkeys-lfu",
          "allkeys-random",
          "volatile-lru",
          "volatile-lfu",
          "volatile-random",
          "volatile-ttl",
          "noeviction",
        ],
      },
      replication: {
        type: "boolean",
        description:
          "Optional. Databases replication. The default is according to the subscription plan.",
      },
      periodicBackupPath: {
        type: "string",
        description:
          "Optional. If specified, automatic backups will be every 24 hours or database will be able to perform immediate backups to this path. If empty string is received, backup path will be removed.",
      },
      sourceIps: {
        type: "array",
        description:
          "Optional. List of source IP addresses or subnet masks. If specified, Redis clients will be able to connect to this database only from within the specified source IP addresses ranges.",
        items: {
          type: "string",
        },
      },
      enableTls: {
        type: "boolean",
        description:
          "Optional. When 'true', requires TLS authentication for all connections (mTLS with valid clientTlsCertificates, regular TLS when the clientTlsCertificates is not provided. Default: 'false'",
      },
      password: {
        type: "string",
        description:
          "Optional. Password to access the database. If omitted, a random 32 character long alphanumeric password will be automatically generated. Can only be set if Database Protocol is REDIS",
      },
      modules: {
        type: "array",
        description:
          "Optional. Redis modules to be provisioned in the database. Use get-database-modules to retrieve available modules and configure the desired ones. IMPORTANT: Modules can only be used when protocol is 'redis'. Cannot use modules with 'memcached' or 'stack' protocols.",
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
            },
          },
          required: ["name"],
        },
      },
    },
    required: ["subscriptionId", "name"],
  },
};

export const DATABASES_ESSENTIALS_TOOLS = [
  GET_ESSENTIAL_DATABASES_TOOL,
  CREATE_ESSENTIAL_DATABASE_TOOL,
];

export const DATABASES_ESSENTIALS_HANDLERS: ToolHandlers = {
  "get-essential-databases": async (request) => {
    const { subscriptionId, offset, limit } = extractArguments<{
      subscriptionId: number;
      offset?: number;
      limit?: number;
    }>(request);

    // Validate input
    validateToolInput(
      getEssentialDatabasesSchema,
      { subscriptionId, offset, limit },
      `Get essential databases for subscription: ${subscriptionId}`,
    );

    const result = await executeApiCall(
      () =>
        DatabasesEssentialsService.getFixedSubscriptionDatabases(
          subscriptionId,
          offset,
          limit,
        ),
      `Get essential databases for subscription: ${subscriptionId}`,
    );

    return createToolResponse(result);
  },
  "create-essential-database": async (request) => {
    const payloadArguments =
      extractArguments<FixedDatabaseCreateRequest>(request);

    // Validate input
    validateToolInput(
      databaseCreateRequestSchema,
      payloadArguments,
      `Create essential database using subscription: ${payloadArguments.subscriptionId}`,
    );

    // Additional validation: modules can only be selected if protocol is Redis
    if (
      payloadArguments.modules?.length &&
      payloadArguments.protocol &&
      payloadArguments.protocol !== "redis"
    ) {
      throw new Error(
        "Modules can only be selected when protocol is 'redis'. Cannot use modules with 'memcached' or 'stack' protocols."
      );
    }

    const result = await executeApiCall(
      () =>
        DatabasesEssentialsService.createFixedDatabase(
          payloadArguments.subscriptionId as never,
          payloadArguments,
        ),
      `Create essential database using subscription: ${payloadArguments.subscriptionId}`,
    );

    return createToolResponse(result);
  },
};
