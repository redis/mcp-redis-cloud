/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Database tag update request message
 */
export type DatabaseTagUpdateRequest = {
    readonly subscriptionId?: number;
    readonly databaseId?: number;
    readonly key?: string;
    /**
     * Required. database tag value
     */
    value: string;
    readonly commandType?: string;
};

