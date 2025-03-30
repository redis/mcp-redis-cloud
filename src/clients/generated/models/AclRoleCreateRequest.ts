/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AclRoleRedisRuleSpec } from './AclRoleRedisRuleSpec.js';
/**
 * ACL role create request
 */
export type AclRoleCreateRequest = {
    /**
     * Required. ACL role name
     */
    name: string;
    /**
     * Required. List of ACL redis rules to associated with the requested ACL role
     */
    redisRules: Array<AclRoleRedisRuleSpec>;
    readonly commandType?: string;
};

