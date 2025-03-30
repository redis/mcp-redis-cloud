/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AclRoleDatabaseSpec } from './AclRoleDatabaseSpec.js';
/**
 * Optional. List of ACL redis rules to associated with the requested ACL role
 */
export type AclRoleRedisRuleSpec = {
    /**
     * Required. ACL redis rule name
     */
    ruleName: string;
    /**
     * Required. List of databaseId and subscriptionId pairs associated with the requested ACL role
     */
    databases: Array<AclRoleDatabaseSpec>;
};

