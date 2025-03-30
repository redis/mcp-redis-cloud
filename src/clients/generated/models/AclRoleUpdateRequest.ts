/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AclRoleRedisRuleSpec } from './AclRoleRedisRuleSpec.js';
/**
 * ACL role update request
 */
export type AclRoleUpdateRequest = {
    /**
     * Optional. ACL role name
     */
    name?: string;
    /**
     * Optional. List of ACL redis rules to associated with the requested ACL role
     */
    redisRules?: Array<AclRoleRedisRuleSpec>;
    readonly roleId?: number;
    readonly commandType?: string;
};

