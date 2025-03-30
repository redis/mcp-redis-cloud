/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * ACL redis rule create request
 */
export type AclRedisRuleCreateRequest = {
    /**
     * Required. ACL redis rule name
     */
    name: string;
    /**
     * Required. ACL redis rule pattern
     */
    redisRule: string;
    readonly commandType?: string;
};

