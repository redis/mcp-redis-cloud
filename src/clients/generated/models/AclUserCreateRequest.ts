/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * ACL user create request
 */
export type AclUserCreateRequest = {
    /**
     * Required. ACL user name
     */
    name: string;
    /**
     * Required. ACL role name
     */
    role: string;
    /**
     * Required. Password to identify as user after creation.
     */
    password: string;
    readonly commandType?: string;
};

