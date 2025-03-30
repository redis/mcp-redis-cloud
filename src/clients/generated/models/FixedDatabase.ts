/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type FixedDatabase = {
    databaseId?: number;
    name?: string;
    protocol?: FixedDatabase.protocol;
    provider?: string;
    region?: string;
    redisVersion?: string;
    /**
     * @deprecated
     */
    redisVersionCompliance?: string;
    respVersion?: FixedDatabase.respVersion;
    status?: string;
    planMemoryLimit?: number;
    planDatasetSize?: number;
    memoryLimitMeasurementUnit?: string;
    memoryLimitInGb?: number;
    datasetSizeInGb?: number;
    memoryUsedInMb?: number;
    networkMonthlyUsageInByte?: number;
    memoryStorage?: FixedDatabase.memoryStorage;
    redisFlex?: boolean;
    supportOSSClusterApi?: boolean;
    useExternalEndpointForOSSClusterApi?: boolean;
    dataPersistence?: FixedDatabase.dataPersistence;
    replication?: boolean;
    dataEvictionPolicy?: FixedDatabase.dataEvictionPolicy;
    activatedOn?: string;
    lastModified?: string;
    publicEndpoint?: string;
    privateEndpoint?: string;
    links?: Array<Record<string, Record<string, any>>>;
};
export namespace FixedDatabase {
    export enum protocol {
        REDIS = 'redis',
        MEMCACHED = 'memcached',
        STACK = 'stack',
    }
    export enum respVersion {
        RESP2 = 'resp2',
        RESP3 = 'resp3',
    }
    export enum memoryStorage {
        RAM = 'ram',
        RAM_AND_FLASH = 'ram-and-flash',
    }
    export enum dataPersistence {
        NONE = 'none',
        AOF_EVERY_1_SECOND = 'aof-every-1-second',
        AOF_EVERY_WRITE = 'aof-every-write',
        SNAPSHOT_EVERY_1_HOUR = 'snapshot-every-1-hour',
        SNAPSHOT_EVERY_6_HOURS = 'snapshot-every-6-hours',
        SNAPSHOT_EVERY_12_HOURS = 'snapshot-every-12-hours',
    }
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

