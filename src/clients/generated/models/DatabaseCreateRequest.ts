/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DatabaseAlertSpec } from './DatabaseAlertSpec.js';
import type { DatabaseBackupConfig } from './DatabaseBackupConfig.js';
import type { DatabaseCertificateSpec } from './DatabaseCertificateSpec.js';
import type { DatabaseModuleSpec } from './DatabaseModuleSpec.js';
import type { DatabaseThroughputSpec } from './DatabaseThroughputSpec.js';
import type { LocalThroughput } from './LocalThroughput.js';
import type { ReplicaOfSpec } from './ReplicaOfSpec.js';
/**
 * Database definition
 */
export type DatabaseCreateRequest = {
    readonly subscriptionId?: number;
    /**
     * Optional. When 'false': Creates a deployment plan and deploys it (creating any resources required by the plan). When 'true': creates a read-only deployment plan without any resource creation. Default: 'true'
     */
    dryRun?: boolean;
    /**
     * Required. Database name (Database name must be up to 40 characters long, include only letters, digits, or hyphen ('-'), start with a letter, and end with a letter or digit)
     */
    name: string;
    /**
     * Optional. Database protocol. Default: 'redis'
     */
    protocol?: DatabaseCreateRequest.protocol;
    /**
     * Optional. TCP port on which the database is available (10000-19999). Generated automatically if omitted
     */
    port?: number;
    /**
     * Deprecated - Optional. Total memory including replication and other overhead
     * @deprecated
     */
    memoryLimitInGb?: number;
    /**
     * Optional. The maximum amount of data in the dataset for this specific database is in GB. You can not set both datasetSizeInGb and totalMemoryInGb. if 'replication' is true, the database’s total memory will be twice as large as the datasetSizeInGb.if 'replication' is false, the database’s total memory of the database will be the datasetSizeInGb value.
     */
    datasetSizeInGb?: number;
    /**
     * Optional. RESP version must be compatible with Redis version.
     */
    respVersion?: DatabaseCreateRequest.respVersion;
    /**
     * Optional. Support Redis open-source (OSS) Cluster API. Default: 'false'
     */
    supportOSSClusterApi?: boolean;
    /**
     * Optional. Should use external endpoint for open-source (OSS) Cluster API. Can only be enabled if OSS Cluster API support is enabled'. Default: 'false'
     */
    useExternalEndpointForOSSClusterApi?: boolean;
    /**
     * Optional. Rate of database data persistence (in persistent storage). Default: 'none'
     */
    dataPersistence?: DatabaseCreateRequest.dataPersistence;
    /**
     * Optional. Data items eviction method. Default: 'volatile-lru'
     */
    dataEvictionPolicy?: DatabaseCreateRequest.dataEvictionPolicy;
    /**
     * Optional. Databases replication. Default: 'true'
     */
    replication?: boolean;
    /**
     * Deprecated - Optional. This database will be a replica of the specified Redis databases provided as one or more URI (sample format: 'redis://user:password@host:port)'. If the URI provided is Redis Cloud instance, only host and port should be provided (using the format: ['redis://endpoint1:6379', 'redis://endpoint2:6380']).
     * @deprecated
     */
    replicaOf?: Array<string>;
    replica?: ReplicaOfSpec;
    throughputMeasurement?: DatabaseThroughputSpec;
    /**
     * Optional. Throughput measurement for an active-active subscription
     */
    localThroughputMeasurement?: Array<LocalThroughput>;
    /**
     * Optional. Relevant only to ram-and-flash subscriptions. Estimated average size (measured in bytes) of the items stored in the database, Default: 1000
     */
    averageItemSizeInBytes?: number;
    /**
     * Deprecated - If specified, automatic backups will be every 24 hours or database will be able to perform immediate backups to this path. If empty string is received, backup path will be removed. Optional.
     * @deprecated
     */
    periodicBackupPath?: string;
    remoteBackup?: DatabaseBackupConfig;
    /**
     * Optional. List of source IP addresses or subnet masks. If specified, Redis clients will be able to connect to this database only from within the specified source IP addresses ranges. example value: '['192.168.10.0/32', '192.168.12.0/24']'
     */
    sourceIp?: Array<string>;
    /**
     * Deprecated - Optional. A string containing TLS/SSL certificate (public key) with new line characters replaced by \n. If specified, mTLS authentication (with enableTls not specified or set to true) will be required to authenticate user connections. If empty string is received, SSL certificate will be removed and mTLS will not be required (note that TLS connection may still apply, depending on the value of the enableTls property). Default: 'null'"
     * @deprecated
     */
    clientSslCertificate?: string;
    /**
     * Optional. A list of TLS/SSL certificates (public keys) with new line characters replaced by \n. If specified, mTLS authentication (with enableTls not specified or set to true) will be required to authenticate user connections. If empty list is received, SSL certificates will be removed and mTLS will not be required (note that TLS connection may still apply, depending on the value of the enableTls property). Default: 'null'"
     */
    clientTlsCertificates?: Array<DatabaseCertificateSpec>;
    /**
     * Optional. When 'true', requires TLS authentication for all connections (mTLS with valid clientSslCertificate, regular TLS when the clientSslCertificate is not provided. Default: 'false'
     */
    enableTls?: boolean;
    /**
     * Optional. Password to access the database. If omitted, a random 32 character long alphanumeric password will be automatically generated. Can only be set if Database Protocol is REDIS
     */
    password?: string;
    /**
     * Optional. Memcached (SASL) Username to access the database. If omitted, the username will be set to a 'mc-' prefix followed by a random 5 character long alphanumeric. Can only be set if Database Protocol is MEMCACHED
     */
    saslUsername?: string;
    /**
     * Optional. Memcached (SASL) Password to access the database. If omitted, a random 32 character long alphanumeric password will be automatically generated. Can only be set if Database Protocol is MEMCACHED
     */
    saslPassword?: string;
    /**
     * Optional. Redis database alerts
     */
    alerts?: Array<DatabaseAlertSpec>;
    /**
     * Optional. Redis modules to be provisioned in the database
     */
    modules?: Array<DatabaseModuleSpec>;
    /**
     * Optional. Database [Hashing policy](https://redis.io/docs/latest/operate/rc/databases/configuration/clustering/#manage-the-hashing-policy).
     */
    shardingType?: DatabaseCreateRequest.shardingType;
    readonly commandType?: string;
    /**
     * Optional. The query performance factor adds extra compute power specifically for search and query. For databases with search and query, you can increase your search queries per second by the selected factor.
     */
    queryPerformanceFactor?: string;
};
export namespace DatabaseCreateRequest {
    /**
     * Optional. Database protocol. Default: 'redis'
     */
    export enum protocol {
        REDIS = 'redis',
        MEMCACHED = 'memcached',
    }
    /**
     * Optional. RESP version must be compatible with Redis version.
     */
    export enum respVersion {
        RESP2 = 'resp2',
        RESP3 = 'resp3',
    }
    /**
     * Optional. Rate of database data persistence (in persistent storage). Default: 'none'
     */
    export enum dataPersistence {
        NONE = 'none',
        AOF_EVERY_1_SECOND = 'aof-every-1-second',
        AOF_EVERY_WRITE = 'aof-every-write',
        SNAPSHOT_EVERY_1_HOUR = 'snapshot-every-1-hour',
        SNAPSHOT_EVERY_6_HOURS = 'snapshot-every-6-hours',
        SNAPSHOT_EVERY_12_HOURS = 'snapshot-every-12-hours',
    }
    /**
     * Optional. Data items eviction method. Default: 'volatile-lru'
     */
    export enum dataEvictionPolicy {
        ALLKEYS_LRU = 'allkeys-lru',
        ALLKEYS_LFU = 'allkeys-lfu',
        ALLKEYS_RANDOM = 'allkeys-random',
        VOLATILE_LRU = 'volatile-lru',
        VOLATILE_LFU = 'volatile-lfu',
        VOLATILE_RANDOM = 'volatile-random',
        VOLATILE_TTL = 'volatile-ttl',
        NOEVICTION = 'noeviction',
    }
    /**
     * Optional. Database [Hashing policy](https://redis.io/docs/latest/operate/rc/databases/configuration/clustering/#manage-the-hashing-policy).
     */
    export enum shardingType {
        DEFAULT_REGEX_RULES = 'default-regex-rules',
        CUSTOM_REGEX_RULES = 'custom-regex-rules',
        REDIS_OSS_HASHING = 'redis-oss-hashing',
    }
}

