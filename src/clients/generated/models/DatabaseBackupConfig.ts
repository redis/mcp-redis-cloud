/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Optional. Database remote backup configuration
 */
export type DatabaseBackupConfig = {
    /**
     * Optional, determine whether backup should be active or not. Default: null
     */
    active?: boolean;
    /**
     * Required when active is true, represent the interval between backups, should be in the following format every-x-hours where x is one of (24,12,6,4,2,1). for example: "every-4-hours"
     */
    interval?: string;
    readonly backupInterval?: DatabaseBackupConfig.backupInterval;
    /**
     * Optional. State the hour which the backup will take place. available only for 12 or 24 hours backup interval. should be specified an hour for example 2 PM as 14:00
     */
    timeUTC?: string;
    readonly databaseBackupTimeUTC?: DatabaseBackupConfig.databaseBackupTimeUTC;
    /**
     * Required when active is true, Type of storage source from which to import the database file (RDB files) or data (Redis connection)
     */
    storageType?: string;
    readonly backupStorageType?: DatabaseBackupConfig.backupStorageType;
    /**
     * Required when active is true, Path for backup
     */
    storagePath?: string;
};
export namespace DatabaseBackupConfig {
    export enum backupInterval {
        EVERY_24_HOURS = 'EVERY_24_HOURS',
        EVERY_12_HOURS = 'EVERY_12_HOURS',
        EVERY_6_HOURS = 'EVERY_6_HOURS',
        EVERY_4_HOURS = 'EVERY_4_HOURS',
        EVERY_2_HOURS = 'EVERY_2_HOURS',
        EVERY_1_HOURS = 'EVERY_1_HOURS',
    }
    export enum databaseBackupTimeUTC {
        HOUR_ONE = 'HOUR_ONE',
        HOUR_TWO = 'HOUR_TWO',
        HOUR_THREE = 'HOUR_THREE',
        HOUR_FOUR = 'HOUR_FOUR',
        HOUR_FIVE = 'HOUR_FIVE',
        HOUR_SIX = 'HOUR_SIX',
        HOUR_SEVEN = 'HOUR_SEVEN',
        HOUR_EIGHT = 'HOUR_EIGHT',
        HOUR_NINE = 'HOUR_NINE',
        HOUR_TEN = 'HOUR_TEN',
        HOUR_ELEVEN = 'HOUR_ELEVEN',
        HOUR_TWELVE = 'HOUR_TWELVE',
    }
    export enum backupStorageType {
        HTTP = 'http',
        REDIS = 'redis',
        FTP = 'ftp',
        AWS_S3 = 'aws-s3',
        AZURE_BLOB_STORAGE = 'azure-blob-storage',
        GOOGLE_BLOB_STORAGE = 'google-blob-storage',
    }
}

