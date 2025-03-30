/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * ACL user update request
 */
export type AclUserUpdateRequest = {
    readonly userId?: number;
    /**
     * Optional. ACL role name
     */
    role?: string;
    /**
     * Optional. ACL User's password.
     */
    password?: string;
    readonly commandType?: string;
};

