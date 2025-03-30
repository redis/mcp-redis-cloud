/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Database backup request message
 */
export type DatabaseBackupRequest = {
    readonly subscriptionId?: number;
    readonly databaseId?: number;
    /**
     * Optional. Name of cloud provider region where the local database is located. When backing up an active-active database, backup is done separately for each local database at a specified region.
     */
    regionName?: string;
    /**
     * Optional. Path for ad-hoc backup.
     */
    adhocBackupPath?: string;
    readonly commandType?: string;
};

