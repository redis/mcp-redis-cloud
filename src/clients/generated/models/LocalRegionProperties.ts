/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DatabaseAlertSpec } from './DatabaseAlertSpec.js';
import type { DatabaseBackupConfig } from './DatabaseBackupConfig.js';
import type { LocalThroughput } from './LocalThroughput.js';
/**
 * Optional. List or regions to update
 */
export type LocalRegionProperties = {
    /**
     * Required. Name of the region to update its properties
     */
    region?: string;
    remoteBackup?: DatabaseBackupConfig;
    localThroughputMeasurement?: LocalThroughput;
    /**
     * Optional. Regional instance of an Active-Active database data persistence rate (in persistent storage)
     */
    dataPersistence?: LocalRegionProperties.dataPersistence;
    /**
     * Optional. If specified, this regional instance of an Active-Active database password will be used to access the database
     */
    password?: string;
    /**
     * Optional. List of regional instance of an Active-Active database source IP addresses or subnet masks. If specified, Redis clients will be able to connect to this database only from within the specified source IP addresses ranges (example: ['192.168.10.0/32', '192.168.12.0/24'] )
     */
    sourceIp?: Array<string>;
    /**
     * Optional. Redis regional instance of an Active-Active database alerts
     */
    alerts?: Array<DatabaseAlertSpec>;
    /**
     * Optional. RESP version must be compatible with Redis version.
     */
    respVersion?: LocalRegionProperties.respVersion;
};
export namespace LocalRegionProperties {
    /**
     * Optional. Regional instance of an Active-Active database data persistence rate (in persistent storage)
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
}

