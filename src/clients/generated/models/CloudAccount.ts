/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * RedisLabs Cloud Account information
 */
export type CloudAccount = {
    id?: number;
    name?: string;
    status?: string;
    accessKeyId?: string;
    signInLoginUrl?: string;
    links?: Array<Record<string, Record<string, any>>>;
    provider?: CloudAccount.provider;
};
export namespace CloudAccount {
    export enum provider {
        AWS = 'AWS',
        GCP = 'GCP',
    }
}

