import { Tool } from "@modelcontextprotocol/sdk/types.js";
import { ToolHandlers } from "../../../utils/types.js";
import { z } from "zod";
import {
  DatabaseCreateRequest,
  DatabasesProService,
} from "../../../clients/generated/index.js";
import { commonSchemas } from "../../../utils/common/schemas.js";
import {
  createToolResponse,
  executeApiCall,
  validateToolInput,
  extractArguments,
} from "../../../utils/common/utils.js";

// Schema definitions
const getProDatabasesSchema = z.object({
  subscriptionId: commonSchemas.subscriptionId,
  offset: z.number().optional(),
  limit: z.number().optional(),
});

const databaseCreateRequestSchema = z.object({
  subscriptionId: commonSchemas.subscriptionId,
  dryRun: z.boolean().optional(),
  name: z.string(),
  protocol: z.union([z.literal("redis"), z.literal("memcached")]).optional(),
  port: z.number().optional(),
  datasetSizeInGb: z.number().optional(),
  respVersion: z.union([z.literal("resp2"), z.literal("resp3")]).optional(),
  supportOSSClusterApi: z.boolean().optional(),
  useExternalEndpointForOSSClusterApi: z.boolean().optional(),
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
  replica: z
    .object({
      syncSources: z.array(
        z.object({
          endpoint: z.string(),
          encryption: z.boolean().optional(),
          serverCert: z.string().optional(),
        }),
      ),
    })
    .optional(),
  throughputMeasurement: z
    .object({
      by: z.union([
        z.literal("operations-per-second"),
        z.literal("number-of-shards"),
      ]),
      value: z.number(),
    })
    .optional(),
  localThroughputMeasurement: z
    .array(
      z.object({
        region: z.string().optional(),
        writeOperationsPerSecond: z.number().optional(),
        readOperationsPerSecond: z.number().optional(),
      }),
    )
    .optional(),
  averageItemSizeInBytes: z.number().optional(),
  remoteBackup: z
    .object({
      active: z.boolean().optional(),
      interval: z.string().optional(),
      backupInterval: z
        .union([
          z.literal("EVERY_24_HOURS"),
          z.literal("EVERY_12_HOURS"),
          z.literal("EVERY_6_HOURS"),
          z.literal("EVERY_4_HOURS"),
          z.literal("EVERY_2_HOURS"),
          z.literal("EVERY_1_HOURS"),
        ])
        .optional(),
      timeUTC: z.string().optional(),
      databaseBackupTimeUTC: z
        .union([
          z.literal("HOUR_ONE"),
          z.literal("HOUR_TWO"),
          z.literal("HOUR_THREE"),
          z.literal("HOUR_FOUR"),
          z.literal("HOUR_FIVE"),
          z.literal("HOUR_SIX"),
          z.literal("HOUR_SEVEN"),
          z.literal("HOUR_EIGHT"),
          z.literal("HOUR_NINE"),
          z.literal("HOUR_TEN"),
          z.literal("HOUR_ELEVEN"),
          z.literal("HOUR_TWELVE"),
        ])
        .optional(),
      storageType: z.string().optional(),
      backupStorageType: z
        .union([
          z.literal("http"),
          z.literal("redis"),
          z.literal("ftp"),
          z.literal("aws-s3"),
          z.literal("azure-blob-storage"),
          z.literal("google-blob-storage"),
        ])
        .optional(),
      storagePath: z.string().optional(),
    })
    .optional(),
  sourceIp: z.array(z.string()).optional(),
  clientTlsCertificates: z
    .array(
      z.object({
        publicCertificatePEMString: z.string(),
      }),
    )
    .optional(),
  enableTls: z.boolean().optional(),
  password: z.string().optional(),
  saslUsername: z.string().optional(),
  saslPassword: z.string().optional(),
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
  shardingType: z
    .union([
      z.literal("default-regex-rules"),
      z.literal("custom-regex-rules"),
      z.literal("redis-oss-hashing"),
    ])
    .optional(),
  commandType: z.string().optional(),
  queryPerformanceFactor: z.string().optional(),
});

// Tool definitions
const GET_PRO_DATABASES_TOOL: Tool = {
  name: "get-pro-databases",
  description: "Get the pro databases for the provided subscription Id",
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

const CREATE_PRO_DATABASE_TOOL: Tool = {
  name: "create-pro-database",
  description:
    "Create a new database inside the specified subscription ID. Returns a TASK ID that can be used to track the status of the database creation" +
    "Prerequisites: 1) For database modules, validate against get-database-modules list. " +
    "2) Validate regions using get-pro-plans-regions. " +
    "The payload must match the input schema.",
  inputSchema: {
    type: "object",
    properties: {
      subscriptionId: {
        type: "number",
        description: "Subscription ID",
        min: 0,
      },
      dryRun: {
        type: "boolean",
        description:
          "Optional. When 'false': Creates a deployment plan and deploys it (creating any resources required by the plan). When 'true': creates a read-only deployment plan without any resource creation. Default: 'true'",
      },
      name: {
        type: "string",
        description:
          "Required. Name of the database. Database name is limited to 40 characters or less and must include only letters, digits, and hyphens ('-'). It must start with a letter and end with a letter or digit.",
      },
      protocol: {
        type: "string",
        description: "Optional. Database protocol. Default: 'redis'",
        enum: ["redis", "memcached"],
      },
      port: {
        type: "integer",
        description:
          "Optional. TCP port on which the database is available (10000-19999). Generated automatically if omitted",
      },
      datasetSizeInGb: {
        type: "number",
        description:
          "Optional. The maximum amount of data in the dataset for this specific database is in GB. You can not set both datasetSizeInGb and totalMemoryInGb. if 'replication' is true, the database's total memory will be twice as large as the datasetSizeInGb.if 'replication' is false, the database's total memory of the database will be the datasetSizeInGb value.",
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
          "Optional. Support Redis open-source (OSS) Cluster API. Default: 'false'",
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
        description: "Optional. Databases replication. Default: 'true'",
      },
      throughputMeasurement: {
        type: "object",
        description: "Optional. Throughput measurement method.",
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
          },
        },
        required: ["by", "value"],
      },
      averageItemSizeInBytes: {
        type: "integer",
        description:
          "Optional. Relevant only to ram-and-flash subscriptions. Estimated average size (measured in bytes) of the items stored in the database, Default: 1000",
      },
      sourceIp: {
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
          "Optional. When 'true', requires TLS authentication for all connections (mTLS with valid clientSslCertificate, regular TLS when the clientSslCertificate is not provided. Default: 'false'",
      },
      password: {
        type: "string",
        description:
          "Optional. Password to access the database. If omitted, a random 32 character long alphanumeric password will be automatically generated. Can only be set if Database Protocol is REDIS",
      },
      saslUsername: {
        type: "string",
        description:
          "Optional. Memcached (SASL) Username to access the database. If omitted, the username will be set to a 'mc-' prefix followed by a random 5 character long alphanumeric. Can only be set if Database Protocol is MEMCACHED",
      },
      saslPassword: {
        type: "string",
        description:
          "Optional. Memcached (SASL) Password to access the database. If omitted, a random 32 character long alphanumeric password will be automatically generated. Can only be set if Database Protocol is MEMCACHED",
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
            },
          },
          required: ["name"],
        },
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
      },
    },
    required: ["subscriptionId", "name"],
  },
};

export const DATABASES_PRO_TOOLS = [
  GET_PRO_DATABASES_TOOL,
  CREATE_PRO_DATABASE_TOOL,
];

export const DATABASES_PRO_HANDLERS: ToolHandlers = {
  "get-pro-databases": async (request) => {
    const { subscriptionId, offset, limit } = extractArguments<{
      subscriptionId: number;
      offset?: number;
      limit?: number;
    }>(request);

    // Validate input
    validateToolInput(
      getProDatabasesSchema,
      { subscriptionId, offset, limit },
      `Get pro databases for: ${subscriptionId} subscription`,
    );

    const result = await executeApiCall(
      () =>
        DatabasesProService.getSubscriptionDatabases(
          subscriptionId,
          offset,
          limit,
        ),
      `Get pro databases for: ${subscriptionId} subscription`,
    );

    return createToolResponse(result);
  },
  "create-pro-database": async (request) => {
    const payloadArguments = extractArguments<DatabaseCreateRequest>(request);

    // Validate input
    validateToolInput(
      databaseCreateRequestSchema,
      {
        ...payloadArguments,
      },
      `Create pro database using subscription #: ${payloadArguments.subscriptionId}`,
    );

    const result = await executeApiCall(
      () =>
        DatabasesProService.createDatabase(
          payloadArguments.subscriptionId as never,
          payloadArguments,
        ),
      `Create pro database using subscription #: ${payloadArguments.subscriptionId}`,
    );

    return createToolResponse(result);
  },
};
