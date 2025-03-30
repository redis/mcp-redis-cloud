/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * RedisLabs region information
 */
export type Region = {
    name?: string;
    provider?: Region.provider;
};
export namespace Region {
    export enum provider {
        AWS = 'AWS',
        GCP = 'GCP',
    }
}

