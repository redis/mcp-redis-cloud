/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Cloud Account definition
 */
export type CloudAccountUpdateRequest = {
    /**
     * name
     */
    name?: string;
    readonly cloudAccountId?: number;
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
     * Optional. Cloud provider management console login URL
     */
    signInLoginUrl?: string;
    readonly commandType?: string;
};

