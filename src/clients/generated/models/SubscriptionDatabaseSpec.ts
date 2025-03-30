/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DatabaseModuleSpec } from './DatabaseModuleSpec.js';
import type { DatabaseThroughputSpec } from './DatabaseThroughputSpec.js';
import type { LocalThroughput } from './LocalThroughput.js';
/**
 * Required. Databases specifications for each planned database
 */
export type SubscriptionDatabaseSpec = {
    /**
     * Required. Database name (Database name must be up to 40 characters long, include only letters, digits, or hyphen ('-'), start with a letter, and end with a letter or digit)
     */
    name: string;
    /**
     * Optional. Database protocol: either 'redis' or 'memcached'. Default: 'redis'
     */
    protocol: SubscriptionDatabaseSpec.protocol;
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
     * Optional. Support Redis open-source (OSS) Cluster API. Default: 'false'
     */
    supportOSSClusterApi?: boolean;
    /**
     * Optional. Rate of database data persistence (in persistent storage). Default: 'none'
     */
    dataPersistence?: SubscriptionDatabaseSpec.dataPersistence;
    /**
     * Optional. Databases replication. Default: 'true'
     */
    replication?: boolean;
    throughputMeasurement?: DatabaseThroughputSpec;
    /**
     * Optional. Throughput measurement for an active-active subscription
     */
    localThroughputMeasurement?: Array<LocalThroughput>;
    /**
     * Optional. Redis modules to be provisioned in the database
     */
    modules?: Array<DatabaseModuleSpec>;
    /**
     * Optional. Number of databases (of this type) that will be created. Default: 1
     */
    quantity?: number;
    /**
     * Optional. Relevant only to ram-and-flash clusters. Estimated average size (measured in bytes) of the items stored in the database. Default: 1000
     */
    averageItemSizeInBytes?: number;
    /**
     * Optional. RESP version must be compatible with Redis version.
     */
    respVersion?: SubscriptionDatabaseSpec.respVersion;
    /**
     * Optional. Database [Hashing policy](https://redis.io/docs/latest/operate/rc/databases/configuration/clustering/#manage-the-hashing-policy).
     */
    shardingType?: SubscriptionDatabaseSpec.shardingType;
    /**
     * Optional. The query performance factor adds extra compute power specifically for search and query. For databases with search and query, you can increase your search queries per second by the selected factor.
     */
    queryPerformanceFactor?: string;
};
export namespace SubscriptionDatabaseSpec {
    /**
     * Optional. Database protocol: either 'redis' or 'memcached'. Default: 'redis'
     */
    export enum protocol {
        REDIS = 'redis',
        MEMCACHED = 'memcached',
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
     * Optional. RESP version must be compatible with Redis version.
     */
    export enum respVersion {
        RESP2 = 'resp2',
        RESP3 = 'resp3',
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

