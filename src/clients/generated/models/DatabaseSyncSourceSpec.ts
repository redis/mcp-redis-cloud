/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Optional. This database will be a replica of the specified Redis databases provided as a list of one or more DatabaseSyncSourceSpec objects.
 */
export type DatabaseSyncSourceSpec = {
    /**
     * Required. A Redis URI (sample format: 'redis://user:password@host:port)'. If the URI provided is Redis Cloud instance, only host and port should be provided (using the format: ['redis://endpoint1:6379', 'redis://endpoint2:6380'] ).
     */
    endpoint: string;
    /**
     * Defines if encryption should be used to connect to the sync source. If left null and if the source is a Redis Cloud instance, it will automatically detect if the source uses encryption.
     */
    encryption?: boolean;
    /**
     * TLS/SSL certificate chain of the sync source. If left null and if the source is a Redis Cloud instance, it will automatically detect the certificate to use.
     */
    serverCert?: string;
};

