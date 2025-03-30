/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountACLRedisRules } from '../models/AccountACLRedisRules.js';
import type { AccountACLRoles } from '../models/AccountACLRoles.js';
import type { AccountACLUsers } from '../models/AccountACLUsers.js';
import type { AclRedisRuleCreateRequest } from '../models/AclRedisRuleCreateRequest.js';
import type { AclRedisRuleUpdateRequest } from '../models/AclRedisRuleUpdateRequest.js';
import type { AclRoleCreateRequest } from '../models/AclRoleCreateRequest.js';
import type { AclRoleUpdateRequest } from '../models/AclRoleUpdateRequest.js';
import type { ACLUser } from '../models/ACLUser.js';
import type { AclUserCreateRequest } from '../models/AclUserCreateRequest.js';
import type { AclUserUpdateRequest } from '../models/AclUserUpdateRequest.js';
import type { TaskStateUpdate } from '../models/TaskStateUpdate.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import { OpenAPI } from '../core/OpenAPI.js';
import { request as __request } from '../core/request.js';
export class AccessControlListService {
    /**
     * Get ACL user by id
     * Information on an ACL user identified by ACL user Id
     * @param aclUserId ACL user ID
     * @returns ACLUser OK
     * @throws ApiError
     */
    public static getUserById(
        aclUserId: number,
    ): CancelablePromise<ACLUser> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/acl/users/{aclUserId}',
            path: {
                'aclUserId': aclUserId,
            },
            errors: {
                400: `Bad Request - The server cannot process the request due to something that is perceived to be a client error`,
                401: `Unauthorized - Authentication failed for requested resource`,
                403: `Forbidden - Not allowed to access requested resource (primarily due to client source IP API Key restrictions)`,
                404: `Not Found - The resource you were trying to reach was not found or does not exist`,
                412: `Precondition Failed - Feature flag for this flow is off`,
                429: `Too Many Requests - Too many resources are concurrently created / updated / deleted in the account. Please re-submit API requests after resource changes are completed)`,
                500: `Internal system error - If this error persists, please contact customer support`,
                503: `Service Unavailable - Server is temporarily unable to handle the request, please try again later. If this error persists, please contact customer support `,
            },
        });
    }
    /**
     * Update ACL user
     * Update a new ACL user
     * @param aclUserId ACL user ID
     * @param requestBody
     * @returns TaskStateUpdate OK
     * @throws ApiError
     */
    public static updateUser1(
        aclUserId: number,
        requestBody: AclUserUpdateRequest,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/acl/users/{aclUserId}',
            path: {
                'aclUserId': aclUserId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request - The server cannot process the request due to something that is perceived to be a client error`,
                401: `Unauthorized - Authentication failed for requested resource`,
                403: `Forbidden - Not allowed to access requested resource (primarily due to client source IP API Key restrictions)`,
                404: `Not Found - The resource you were trying to reach was not found or does not exist`,
                408: `Request Timeout - The server didn't receive a complete request message within the server's allotted timeout period`,
                409: `Conflict - request could not be processed because of a conflict (primarily due to another resource that exist with new updated name)`,
                412: `Precondition Failed - Feature flag for this flow is off`,
                429: `Too Many Requests - Too many resources are concurrently created / updated / deleted in the account. Please re-submit API requests after resource changes are completed)`,
                500: `Internal system error - If this error persists, please contact customer support`,
                503: `Service Unavailable - Server is temporarily unable to handle the request, please try again later. If this error persists, please contact customer support `,
            },
        });
    }
    /**
     * Delete ACL user
     * Delete an ACL user
     * @param aclUserId ACL user ID
     * @returns TaskStateUpdate OK
     * @throws ApiError
     */
    public static deleteUser(
        aclUserId: number,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/acl/users/{aclUserId}',
            path: {
                'aclUserId': aclUserId,
            },
            errors: {
                400: `Bad Request - The server cannot process the request due to something that is perceived to be a client error`,
                401: `Unauthorized - Authentication failed for requested resource`,
                403: `Forbidden - Not allowed to access requested resource (primarily due to client source IP API Key restrictions)`,
                404: `Not Found - The resource you were trying to reach was not found or does not exist`,
                408: `Request Timeout - The server didn't receive a complete request message within the server's allotted timeout period`,
                409: `Conflict - request could not be processed because of a conflict (primarily due to another resource that exist with new updated name)`,
                412: `Precondition Failed - Feature flag for this flow is off`,
                429: `Too Many Requests - Too many resources are concurrently created / updated / deleted in the account. Please re-submit API requests after resource changes are completed)`,
                500: `Internal system error - If this error persists, please contact customer support`,
                503: `Service Unavailable - Server is temporarily unable to handle the request, please try again later. If this error persists, please contact customer support `,
            },
        });
    }
    /**
     * Update ACL role
     * Update an ACL role
     * @param aclRoleId ACL role ID
     * @param requestBody
     * @returns TaskStateUpdate Accepted
     * @throws ApiError
     */
    public static updateRole(
        aclRoleId: number,
        requestBody: AclRoleUpdateRequest,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/acl/roles/{aclRoleId}',
            path: {
                'aclRoleId': aclRoleId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request - The server cannot process the request due to something that is perceived to be a client error`,
                401: `Unauthorized - Authentication failed for requested resource`,
                403: `Forbidden - Not allowed to access requested resource (primarily due to client source IP API Key restrictions)`,
                404: `Not Found - The resource you were trying to reach was not found or does not exist`,
                408: `Request Timeout - The server didn't receive a complete request message within the server's allotted timeout period`,
                409: `Conflict - request could not be processed because of a conflict (primarily due to another resource that exist with new updated name)`,
                412: `Precondition Failed - Feature flag for this flow is off`,
                429: `Too Many Requests - Too many resources are concurrently created / updated / deleted in the account. Please re-submit API requests after resource changes are completed)`,
                500: `Internal system error - If this error persists, please contact customer support`,
                503: `Service Unavailable - Server is temporarily unable to handle the request, please try again later. If this error persists, please contact customer support `,
            },
        });
    }
    /**
     * Delete ACL role
     * Delete an ACL role
     * @param aclRoleId ACL role ID
     * @returns TaskStateUpdate OK
     * @throws ApiError
     */
    public static deleteAclRole(
        aclRoleId: number,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/acl/roles/{aclRoleId}',
            path: {
                'aclRoleId': aclRoleId,
            },
            errors: {
                400: `Bad Request - The server cannot process the request due to something that is perceived to be a client error`,
                401: `Unauthorized - Authentication failed for requested resource`,
                403: `Forbidden - Not allowed to access requested resource (primarily due to client source IP API Key restrictions)`,
                404: `Not Found - The resource you were trying to reach was not found or does not exist`,
                408: `Request Timeout - The server didn't receive a complete request message within the server's allotted timeout period`,
                409: `Conflict - request could not be processed because of a conflict (primarily due to another resource that exist with new updated name)`,
                412: `Precondition Failed - Feature flag for this flow is off`,
                429: `Too Many Requests - Too many resources are concurrently created / updated / deleted in the account. Please re-submit API requests after resource changes are completed)`,
                500: `Internal system error - If this error persists, please contact customer support`,
                503: `Service Unavailable - Server is temporarily unable to handle the request, please try again later. If this error persists, please contact customer support `,
            },
        });
    }
    /**
     * Update ACL redis rule
     * Update an ACL redis rule
     * @param aclRedisRuleId ACL redis rule ID
     * @param requestBody
     * @returns TaskStateUpdate Accepted
     * @throws ApiError
     */
    public static updateRedisRule(
        aclRedisRuleId: number,
        requestBody: AclRedisRuleUpdateRequest,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/acl/redisRules/{aclRedisRuleId}',
            path: {
                'aclRedisRuleId': aclRedisRuleId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request - The server cannot process the request due to something that is perceived to be a client error`,
                401: `Unauthorized - Authentication failed for requested resource`,
                403: `Forbidden - Not allowed to access requested resource (primarily due to client source IP API Key restrictions)`,
                404: `Not Found - The resource you were trying to reach was not found or does not exist`,
                408: `Request Timeout - The server didn't receive a complete request message within the server's allotted timeout period`,
                409: `Conflict - request could not be processed because of a conflict (primarily due to another resource that exist with new updated name)`,
                412: `Precondition Failed - Feature flag for this flow is off`,
                429: `Too Many Requests - Too many resources are concurrently created / updated / deleted in the account. Please re-submit API requests after resource changes are completed)`,
                500: `Internal system error - If this error persists, please contact customer support`,
                503: `Service Unavailable - Server is temporarily unable to handle the request, please try again later. If this error persists, please contact customer support `,
            },
        });
    }
    /**
     * Delete ACL redis rule
     * Delete an ACL redis rule
     * @param aclRedisRuleId ACL redis rule ID
     * @returns TaskStateUpdate Accepted
     * @throws ApiError
     */
    public static deleteRedisRule(
        aclRedisRuleId: number,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/acl/redisRules/{aclRedisRuleId}',
            path: {
                'aclRedisRuleId': aclRedisRuleId,
            },
            errors: {
                400: `Bad Request - The server cannot process the request due to something that is perceived to be a client error`,
                401: `Unauthorized - Authentication failed for requested resource`,
                403: `Forbidden - Not allowed to access requested resource (primarily due to client source IP API Key restrictions)`,
                404: `Not Found - The resource you were trying to reach was not found or does not exist`,
                408: `Request Timeout - The server didn't receive a complete request message within the server's allotted timeout period`,
                409: `Conflict - request could not be processed because of a conflict (primarily due to another resource that exist with new updated name)`,
                412: `Precondition Failed - Feature flag for this flow is off`,
                429: `Too Many Requests - Too many resources are concurrently created / updated / deleted in the account. Please re-submit API requests after resource changes are completed)`,
                500: `Internal system error - If this error persists, please contact customer support`,
                503: `Service Unavailable - Server is temporarily unable to handle the request, please try again later. If this error persists, please contact customer support `,
            },
        });
    }
    /**
     * Get ACL users
     * Information on current account's ACL users
     * @returns AccountACLUsers OK
     * @throws ApiError
     */
    public static getAllUsers1(): CancelablePromise<AccountACLUsers> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/acl/users',
            errors: {
                400: `Bad Request - The server cannot process the request due to something that is perceived to be a client error`,
                401: `Unauthorized - Authentication failed for requested resource`,
                403: `Forbidden - Not allowed to access requested resource (primarily due to client source IP API Key restrictions)`,
                404: `Not Found - The resource you were trying to reach was not found or does not exist`,
                412: `Precondition Failed - Feature flag for this flow is off`,
                429: `Too Many Requests - Too many resources are concurrently created / updated / deleted in the account. Please re-submit API requests after resource changes are completed)`,
                500: `Internal system error - If this error persists, please contact customer support`,
                503: `Service Unavailable - Server is temporarily unable to handle the request, please try again later. If this error persists, please contact customer support `,
            },
        });
    }
    /**
     * Create ACL user
     * Create a new ACL user
     * @param requestBody
     * @returns TaskStateUpdate Accepted
     * @throws ApiError
     */
    public static createUser(
        requestBody: AclUserCreateRequest,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/acl/users',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request - The server cannot process the request due to something that is perceived to be a client error`,
                401: `Unauthorized - Authentication failed for requested resource`,
                403: `Forbidden - Not allowed to create requested resource (primarily due to not active resource)`,
                404: `Not Found - The resource you were trying to reach was not found or does not exist`,
                408: `Request Timeout - The server didn't receive a complete request message within the server's allotted timeout period`,
                409: `Conflict - request could not be processed because of a conflict (primarily due to another resource that exist with the new name`,
                412: `Precondition Failed - Feature flag for this flow is off`,
                422: `Unprocessable Entity - The server understands the request, and the syntax of the request is correct, but it was unable to process the contained instructions`,
                429: `Too Many Requests - Too many resources are concurrently created / updated / deleted in the account. Please re-submit API requests after resource changes are completed)`,
                500: `Internal system error - If this error persists, please contact customer support`,
                503: `Service Unavailable - Server is temporarily unable to handle the request, please try again later. If this error persists, please contact customer support `,
            },
        });
    }
    /**
     * Get ACL roles
     * Information on current account's ACL roles
     * @returns AccountACLRoles OK
     * @throws ApiError
     */
    public static getRoles(): CancelablePromise<AccountACLRoles> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/acl/roles',
            errors: {
                400: `Bad Request - The server cannot process the request due to something that is perceived to be a client error`,
                401: `Unauthorized - Authentication failed for requested resource`,
                403: `Forbidden - Not allowed to access requested resource (primarily due to client source IP API Key restrictions)`,
                404: `Not Found - The resource you were trying to reach was not found or does not exist`,
                412: `Precondition Failed - Feature flag for this flow is off`,
                429: `Too Many Requests - Too many resources are concurrently created / updated / deleted in the account. Please re-submit API requests after resource changes are completed)`,
                500: `Internal system error - If this error persists, please contact customer support`,
                503: `Service Unavailable - Server is temporarily unable to handle the request, please try again later. If this error persists, please contact customer support `,
            },
        });
    }
    /**
     * Create ACL role
     * Create a new ACL role
     * @param requestBody
     * @returns TaskStateUpdate Accepted
     * @throws ApiError
     */
    public static createRole(
        requestBody: AclRoleCreateRequest,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/acl/roles',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request - The server cannot process the request due to something that is perceived to be a client error`,
                401: `Unauthorized - Authentication failed for requested resource`,
                403: `Forbidden - Not allowed to create requested resource (primarily due to not active resource)`,
                404: `Not Found - The resource you were trying to reach was not found or does not exist`,
                408: `Request Timeout - The server didn't receive a complete request message within the server's allotted timeout period`,
                409: `Conflict - request could not be processed because of a conflict (primarily due to another resource that exist with the new name`,
                412: `Precondition Failed - Feature flag for this flow is off`,
                422: `Unprocessable Entity - The server understands the request, and the syntax of the request is correct, but it was unable to process the contained instructions`,
                429: `Too Many Requests - Too many resources are concurrently created / updated / deleted in the account. Please re-submit API requests after resource changes are completed)`,
                500: `Internal system error - If this error persists, please contact customer support`,
                503: `Service Unavailable - Server is temporarily unable to handle the request, please try again later. If this error persists, please contact customer support `,
            },
        });
    }
    /**
     * Get ACL redis rules
     * Information on current account's ACL users
     * @returns AccountACLRedisRules OK
     * @throws ApiError
     */
    public static getAllRedisRules(): CancelablePromise<AccountACLRedisRules> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/acl/redisRules',
            errors: {
                400: `Bad Request - The server cannot process the request due to something that is perceived to be a client error`,
                401: `Unauthorized - Authentication failed for requested resource`,
                403: `Forbidden - Not allowed to access requested resource (primarily due to client source IP API Key restrictions)`,
                404: `Not Found - The resource you were trying to reach was not found or does not exist`,
                412: `Precondition Failed - Feature flag for this flow is off`,
                429: `Too Many Requests - Too many resources are concurrently created / updated / deleted in the account. Please re-submit API requests after resource changes are completed)`,
                500: `Internal system error - If this error persists, please contact customer support`,
                503: `Service Unavailable - Server is temporarily unable to handle the request, please try again later. If this error persists, please contact customer support `,
            },
        });
    }
    /**
     * Create ACL redis rule
     * Create a new ACL redis rule
     * @param requestBody
     * @returns TaskStateUpdate Accepted
     * @throws ApiError
     */
    public static createRedisRule(
        requestBody: AclRedisRuleCreateRequest,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/acl/redisRules',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request - The server cannot process the request due to something that is perceived to be a client error`,
                401: `Unauthorized - Authentication failed for requested resource`,
                403: `Forbidden - Not allowed to create requested resource (primarily due to not active resource)`,
                404: `Not Found - The resource you were trying to reach was not found or does not exist`,
                408: `Request Timeout - The server didn't receive a complete request message within the server's allotted timeout period`,
                409: `Conflict - request could not be processed because of a conflict (primarily due to another resource that exist with the new name`,
                412: `Precondition Failed - Feature flag for this flow is off`,
                422: `Unprocessable Entity - The server understands the request, and the syntax of the request is correct, but it was unable to process the contained instructions`,
                429: `Too Many Requests - Too many resources are concurrently created / updated / deleted in the account. Please re-submit API requests after resource changes are completed)`,
                500: `Internal system error - If this error persists, please contact customer support`,
                503: `Service Unavailable - Server is temporarily unable to handle the request, please try again later. If this error persists, please contact customer support `,
            },
        });
    }
}
