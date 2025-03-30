/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Cloud Account definition
 */
export type CloudAccountCreateRequest = {
    /**
     * Required. Cloud account display name
     */
    name: string;
    /**
     * Optional. Cloud provider. Default: 'AWS'
     */
    provider?: CloudAccountCreateRequest.provider;
    /**
     * Required. Cloud provider access key
     */
    accessKeyId: string;
    /**
     * Required. Cloud provider secret key
     */
    accessSecretKey: string;
    /**
     * Required. Cloud provider management console username
     */
    consoleUsername: string;
    /**
     * Required. Cloud provider management console password
     */
    consolePassword: string;
    /**
     * Required. Cloud provider management console login URL
     */
    signInLoginUrl: string;
    readonly commandType?: string;
};
export namespace CloudAccountCreateRequest {
    /**
     * Optional. Cloud provider. Default: 'AWS'
     */
    export enum provider {
        AWS = 'AWS',
        GCP = 'GCP',
    }
}

