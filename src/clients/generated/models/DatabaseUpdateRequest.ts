/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DatabaseAlertSpec } from './DatabaseAlertSpec.js';
import type { DatabaseBackupConfig } from './DatabaseBackupConfig.js';
import type { DatabaseCertificateSpec } from './DatabaseCertificateSpec.js';
import type { DatabaseThroughputSpec } from './DatabaseThroughputSpec.js';
import type { ReplicaOfSpec } from './ReplicaOfSpec.js';
/**
 * Database update request
 */
export type DatabaseUpdateRequest = {
    readonly subscriptionId?: number;
    readonly databaseId?: number;
    /**
     * Optional. When 'false': Creates a deployment plan and deploys it (creating any resources required by the plan). When 'true': creates a read-only deployment plan without any resource creation. Default: 'false'
     */
    dryRun?: boolean;
    /**
     * Optional. Database name
     */
    name?: string;
    /**
     * Deprecated - Optional. Total memory including replication and other overhead
     * @deprecated
     */
    memoryLimitInGb?: number;
    /**
     * Optional. The maximum amount of data in the dataset for this specific database is in GB. You can not set both datasetSizeInGb and totalMemoryInGb. if ‘replication’ is true, the database’s total memory will be twice as large as the datasetSizeInGb.if ‘replication’ is false, the database’s total memory of the database will be the datasetSizeInGb value.
     */
    datasetSizeInGb?: number;
    /**
     * Optional. RESP version must be compatible with Redis version.
     */
    respVersion?: DatabaseUpdateRequest.respVersion;
    throughputMeasurement?: DatabaseThroughputSpec;
    /**
     * Optional. Rate of database data persistence (in persistent storage)
     */
    dataPersistence?: DatabaseUpdateRequest.dataPersistence;
    /**
     * Optional. Data items eviction method
     */
    dataEvictionPolicy?: DatabaseUpdateRequest.dataEvictionPolicy;
    /**
     * Optional. Databases replication
     */
    replication?: boolean;
    /**
     * Optional. Shard regex rules. Relevant only for a sharded database
     */
    regexRules?: Array<string>;
    /**
     * Deprecated - Optional. This database will be a replica of the specified Redis databases provided as one or more URI (sample format: 'redis://user:password@host:port)'. If the URI provided is Redis Cloud instance, only host and port should be provided (using the format: ['redis://endpoint1:6379', 'redis://endpoint2:6380'] ).
     * @deprecated
     */
    replicaOf?: Array<string>;
    replica?: ReplicaOfSpec;
    /**
     * Optional. Support Redis open-source (OSS) Cluster API
     */
    supportOSSClusterApi?: boolean;
    /**
     * Optional. Should use external endpoint for open-source (OSS) Cluster API. Can only be enabled if OSS Cluster API support is enabled'. Default: 'false'
     */
    useExternalEndpointForOSSClusterApi?: boolean;
    /**
     * Optional. If specified, this password will be used to access the database. Can only be set if Database Protocol is REDIS
     */
    password?: string;
    /**
     * Optional. If specified, this Memcached (SASL) username will be used to access the database. Can only be set if Database Protocol is Memcached
     */
    saslUsername?: string;
    /**
     * Optional. If specified, this Memcached (SASL) password will be used to access the database. Can only be set if Database Protocol is Memcached
     */
    saslPassword?: string;
    /**
     * Optional. List of source IP addresses or subnet masks. If specified, Redis clients will be able to connect to this database only from within the specified source IP addresses ranges (example: ['192.168.10.0/32', '192.168.12.0/24'] )
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
     * Optional. When 'true', requires TLS authentication for all connections (mTLS with valid clientSslCertificate, regular TLS when the clientSslCertificate is not provided). If enableTls is set to false it will also remove the mTLS requirement (by erasing the content of the clientSslCertificate property). Default: 'false'
     */
    enableTls?: boolean;
    /**
     * Optional. When 'true', enables connecting to the database with the 'default' user. Default: 'true'. Can only be set if Database Protocol is REDIS
     */
    enableDefaultUser?: boolean;
    /**
     * Deprecated - If specified, automatic backups will be every 24 hours or database will be able to perform immediate backups to this path. If empty string is received, backup path will be removed. Optional.
     * @deprecated
     */
    periodicBackupPath?: string;
    remoteBackup?: DatabaseBackupConfig;
    /**
     * Optional. Redis database alerts
     */
    alerts?: Array<DatabaseAlertSpec>;
    readonly commandType?: string;
    /**
     * Optional. The query performance factor adds extra compute power specifically for search and query. For databases with search and query, you can increase your search queries per second by the selected factor.
     */
    queryPerformanceFactor?: string;
};
export namespace DatabaseUpdateRequest {
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

