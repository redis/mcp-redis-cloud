/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DatabaseAlertSpec } from './DatabaseAlertSpec.js';
import type { DatabaseCertificateSpec } from './DatabaseCertificateSpec.js';
import type { ReplicaOfSpec } from './ReplicaOfSpec.js';
/**
 * Essentials database update request
 */
export type FixedDatabaseUpdateRequest = {
    readonly subscriptionId?: number;
    readonly databaseId?: number;
    /**
     * Optional. Database name (Database name must be up to 40 characters long, include only letters, digits, or hyphen ('-'), start with a letter, and end with a letter or digit)
     */
    name?: string;
    /**
     * Deprecated - Optional. Total memory including replication and other overhead. Supported only for 'Pay-As-You-Go' subscriptions
     * @deprecated
     */
    memoryLimitInGb?: number;
    /**
     * Optional. The maximum amount of data in the dataset for this specific database is in GB. You can not set both datasetSizeInGb and totalMemoryInGb. if ‘replication’ is true, the database’s total memory will be twice as large as the datasetSizeInGb.if ‘replication’ is false, the database’s total memory of the database will be the datasetSizeInGb value.
     */
    datasetSizeInGb?: number;
    /**
     * Optional. Support Redis open-source (OSS) Cluster API. Supported only for 'Pay-As-You-Go' subscriptions
     */
    supportOSSClusterApi?: boolean;
    /**
     * Optional. RESP version must be compatible with Redis version.
     */
    respVersion?: FixedDatabaseUpdateRequest.respVersion;
    /**
     * Optional. Should use external endpoint for open-source (OSS) Cluster API. Can only be enabled if OSS Cluster API support is enabled. Supported only for 'Pay-As-You-Go' subscriptions
     */
    useExternalEndpointForOSSClusterApi?: boolean;
    /**
     * Optional. Distributes database data to different cloud instances. Default: 'false'. Supported only for 'Pay-As-You-Go' subscriptions
     */
    enableDatabaseClustering?: boolean;
    /**
     * Optional. Specifies the number of master shards. Supported only for 'Pay-As-You-Go' subscriptions
     */
    numberOfShards?: number;
    /**
     * Optional. Rate of database data persistence (in persistent storage)
     */
    dataPersistence?: FixedDatabaseUpdateRequest.dataPersistence;
    /**
     * Optional. Data items eviction method
     */
    dataEvictionPolicy?: FixedDatabaseUpdateRequest.dataEvictionPolicy;
    /**
     * Optional. Databases replication
     */
    replication?: boolean;
    /**
     * Optional. If specified, automatic backups will be every 24 hours or database will be able to perform immediate backups to this path. If empty string is received, backup path will be removed. Optional.
     */
    periodicBackupPath?: string;
    /**
     * Optional. List of source IP addresses or subnet masks. If specified, Redis clients will be able to connect to this database only from within the specified source IP addresses ranges. example value: '['192.168.10.0/32', '192.168.12.0/24']'
     */
    sourceIps?: Array<string>;
    /**
     * Deprecated - Optional. This database will be a replica of the specified Redis databases provided as one or more URI (sample format: 'redis://user:password@host:port)'. If the URI provided is Redis Cloud instance, only host and port should be provided (using the format: ['redis://endpoint1:6379', 'redis://endpoint2:6380'] ).
     * @deprecated
     */
    replicaOf?: Array<string>;
    replica?: ReplicaOfSpec;
    /**
     * Optional. Shard regex rules. Relevant only for a sharded database. Supported only for 'Pay-As-You-Go' subscriptions
     */
    regexRules?: Array<string>;
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
     * Optional. When 'true', requires TLS authentication for all connections (mTLS with valid clientSslCertificate, regular TLS when the clientSslCertificate is not provided).
     */
    enableTls?: boolean;
    /**
     * Optional. Password to access the database. If omitted, a random 32 character long alphanumeric password will be automatically generated
     */
    password?: string;
    /**
     * Optional. When 'true', enables connecting to the database with the 'default' user. Default: 'true'
     */
    enableDefaultUser?: boolean;
    /**
     * Optional. Redis database alerts
     */
    alerts?: Array<DatabaseAlertSpec>;
    readonly commandType?: string;
};
export namespace FixedDatabaseUpdateRequest {
    /**
     * Optional. RESP version must be compatible with Redis version.
     */
    export enum respVersion {
        RESP2 = 'resp2',
        RESP3 = 'resp3',
    }
    /**
     * Optional. Rate of database data persistence (in persistent storage)
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
     * Optional. Data items eviction method
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
}

