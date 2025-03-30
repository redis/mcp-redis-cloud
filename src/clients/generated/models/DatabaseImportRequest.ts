/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Database import request
 */
export type DatabaseImportRequest = {
    readonly subscriptionId?: number;
    readonly databaseId?: number;
    /**
     * Required. Type of storage source from which to import the database file (RDB files) or data (Redis connection)
     */
    sourceType: DatabaseImportRequest.sourceType;
    /**
     * Required. One or more URIs to source data files or Redis databases, as appropriate to specified source type (example: ['http://mydomain.com/redis-backup-file1', 'http://mydomain.com/redis-backup-file2'])
     */
    importFromUri: Array<string>;
    readonly commandType?: string;
};
export namespace DatabaseImportRequest {
    /**
     * Required. Type of storage source from which to import the database file (RDB files) or data (Redis connection)
     */
    export enum sourceType {
        HTTP = 'http',
        REDIS = 'redis',
        FTP = 'ftp',
        AWS_S3 = 'aws-s3',
        AZURE_BLOB_STORAGE = 'azure-blob-storage',
        GOOGLE_BLOB_STORAGE = 'google-blob-storage',
    }
}

