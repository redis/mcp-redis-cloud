/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DatabaseAlertSpec } from './DatabaseAlertSpec.js';
import type { DatabaseCertificateSpec } from './DatabaseCertificateSpec.js';
import type { LocalRegionProperties } from './LocalRegionProperties.js';
/**
 * Active-Active database update local properties request message
 */
export type CrdbUpdatePropertiesRequest = {
    readonly subscriptionId?: number;
    readonly databaseId?: number;
    /**
     * Optional. Database name (Database name must be up to 40 characters long, include only letters, digits, or hyphen ('-'), start with a letter, and end with a letter or digit)
     */
    name?: string;
    /**
     * Optional. When 'false': Creates a deployment plan and deploys it (creating any resources required by the plan). When 'true': creates a read-only deployment plan without any resource creation. Default: 'false'
     */
    dryRun?: boolean;
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
     * Optional. Support Redis open-source (OSS) Cluster API
     */
    supportOSSClusterApi?: boolean;
    /**
     * Optional. Should use external endpoint for open-source (OSS) Cluster API. Can only be enabled if OSS Cluster API support is enabled. Default: 'false'
     */
    useExternalEndpointForOSSClusterApi?: boolean;
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
     * Optional. When 'true', requires TLS authentication for all connections (mTLS with valid clientSslCertificate, regular TLS when the clientSslCertificate is not provided)
     */
    enableTls?: boolean;
    /**
     * Optional. Global rate of database data persistence (in persistent storage) of regions that dont override global settings. Default: 'none'
     */
    globalDataPersistence?: CrdbUpdatePropertiesRequest.globalDataPersistence;
    /**
     * Optional. Password to access the database of regions that dont override global settings.
     */
    globalPassword?: string;
    /**
     * Optional. List of source IP addresses or subnet masks of regions that dont override global settings. If specified, Redis clients will be able to connect to this database only from within the specified source IP addresses ranges (example: ['192.168.10.0/32', '192.168.12.0/24'] )
     */
    globalSourceIp?: Array<string>;
    /**
     * Optional. Redis database alerts of regions that don't override global settings
     */
    globalAlerts?: Array<DatabaseAlertSpec>;
    /**
     * Optional. List or regions to update
     */
    regions?: Array<LocalRegionProperties>;
    /**
     * Optional. Data items eviction method.
     */
    dataEvictionPolicy?: CrdbUpdatePropertiesRequest.dataEvictionPolicy;
    readonly commandType?: string;
};
export namespace CrdbUpdatePropertiesRequest {
    /**
     * Optional. Global rate of database data persistence (in persistent storage) of regions that dont override global settings. Default: 'none'
     */
    export enum globalDataPersistence {
        NONE = 'none',
        AOF_EVERY_1_SECOND = 'aof-every-1-second',
        AOF_EVERY_WRITE = 'aof-every-write',
        SNAPSHOT_EVERY_1_HOUR = 'snapshot-every-1-hour',
        SNAPSHOT_EVERY_6_HOURS = 'snapshot-every-6-hours',
        SNAPSHOT_EVERY_12_HOURS = 'snapshot-every-12-hours',
    }
    /**
     * Optional. Data items eviction method.
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

