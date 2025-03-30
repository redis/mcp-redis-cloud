/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Required. List of databaseId and subscriptionId pairs associated with the requested ACL role
 */
export type AclRoleDatabaseSpec = {
    /**
     * Required. Subscription Id of the given database
     */
    subscriptionId: number;
    /**
     * Required. Database Id that belong to the subscription
     */
    databaseId: number;
    /**
     * Optional. AA regions name belong to the given database, list of String comma separated
     */
    regions?: Array<string>;
};

