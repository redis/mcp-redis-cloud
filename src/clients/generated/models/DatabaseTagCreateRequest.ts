/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Database tag
 */
export type DatabaseTagCreateRequest = {
    /**
     * Required. Database tag key
     */
    key: string;
    /**
     * Required. Database tag value
     */
    value: string;
    readonly subscriptionId?: number;
    readonly databaseId?: number;
    readonly commandType?: string;
};

