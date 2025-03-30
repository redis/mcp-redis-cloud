/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Essentials database backup request message
 */
export type FixedDatabaseBackupRequest = {
    readonly subscriptionId?: number;
    readonly databaseId?: number;
    /**
     * Optional. Path for ad-hoc backup.
     */
    adhocBackupPath?: string;
    readonly commandType?: string;
};

