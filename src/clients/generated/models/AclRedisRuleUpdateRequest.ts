/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * ACL redis rule update request
 */
export type AclRedisRuleUpdateRequest = {
    readonly redisRuleId?: number;
    /**
     * Optional. ACL redis rule name
     */
    name: string;
    /**
     * Optional. ACL redis rule pattern
     */
    redisRule: string;
    readonly commandType?: string;
};

