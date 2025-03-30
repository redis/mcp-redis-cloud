/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountFixedSubscriptionDatabases } from '../models/AccountFixedSubscriptionDatabases.js';
import type { CloudTag } from '../models/CloudTag.js';
import type { CloudTags } from '../models/CloudTags.js';
import type { DatabaseTagCreateRequest } from '../models/DatabaseTagCreateRequest.js';
import type { DatabaseTagsUpdateRequest } from '../models/DatabaseTagsUpdateRequest.js';
import type { DatabaseTagUpdateRequest } from '../models/DatabaseTagUpdateRequest.js';
import type { FixedDatabase } from '../models/FixedDatabase.js';
import type { FixedDatabaseBackupRequest } from '../models/FixedDatabaseBackupRequest.js';
import type { FixedDatabaseCreateRequest } from '../models/FixedDatabaseCreateRequest.js';
import type { FixedDatabaseImportRequest } from '../models/FixedDatabaseImportRequest.js';
import type { FixedDatabaseUpdateRequest } from '../models/FixedDatabaseUpdateRequest.js';
import type { TaskStateUpdate } from '../models/TaskStateUpdate.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import { OpenAPI } from '../core/OpenAPI.js';
import { request as __request } from '../core/request.js';
export class DatabasesEssentialsService {
    /**
     * Get Essentials database by id
     * Information on a specific database identified by Essentials subscription Id and database Id
     * @param subscriptionId Subscription Id
     * @param databaseId Database Id
     * @returns FixedDatabase OK
     * @throws ApiError
     */
    public static getSubscriptionDatabaseById1(
        subscriptionId: number,
        databaseId: number,
    ): CancelablePromise<FixedDatabase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/fixed/subscriptions/{subscriptionId}/databases/{databaseId}',
            path: {
                'subscriptionId': subscriptionId,
                'databaseId': databaseId,
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
     * Update Essentials database
     * Update a specific database identified by an Essentials subscription Id and database Id
     * @param subscriptionId Subscription Id
     * @param databaseId Database Id
     * @param requestBody
     * @returns TaskStateUpdate OK
     * @throws ApiError
     */
    public static deleteFixedDatabaseById(
        subscriptionId: number,
        databaseId: number,
        requestBody: FixedDatabaseUpdateRequest,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/fixed/subscriptions/{subscriptionId}/databases/{databaseId}',
            path: {
                'subscriptionId': subscriptionId,
                'databaseId': databaseId,
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
     * Delete Essentials database
     * Delete a specific database identified by an Essentials subscription Id and database Id
     * @param subscriptionId Subscription Id
     * @param databaseId Database Id
     * @returns TaskStateUpdate OK
     * @throws ApiError
     */
    public static deleteFixedDatabaseById1(
        subscriptionId: number,
        databaseId: number,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/fixed/subscriptions/{subscriptionId}/databases/{databaseId}',
            path: {
                'subscriptionId': subscriptionId,
                'databaseId': databaseId,
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
     * Get database tags
     * Get database tags for a given resource
     * @param subscriptionId Subscription Id
     * @param databaseId Database Id
     * @returns CloudTags OK
     * @throws ApiError
     */
    public static getTags1(
        subscriptionId: number,
        databaseId: number,
    ): CancelablePromise<CloudTags> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/fixed/subscriptions/{subscriptionId}/databases/{databaseId}/tags',
            path: {
                'subscriptionId': subscriptionId,
                'databaseId': databaseId,
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
     * Override database tags
     * Override database tags for a given resource
     * @param subscriptionId Subscription Id
     * @param databaseId Database Id
     * @param requestBody
     * @returns CloudTags OK
     * @throws ApiError
     */
    public static updateTags1(
        subscriptionId: number,
        databaseId: number,
        requestBody: DatabaseTagsUpdateRequest,
    ): CancelablePromise<CloudTags> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/fixed/subscriptions/{subscriptionId}/databases/{databaseId}/tags',
            path: {
                'subscriptionId': subscriptionId,
                'databaseId': databaseId,
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
     * Add database tags
     * Add single database tag for a given resource
     * @param subscriptionId Subscription Id
     * @param databaseId Database Id
     * @param requestBody
     * @returns CloudTag OK
     * @throws ApiError
     */
    public static createTag1(
        subscriptionId: number,
        databaseId: number,
        requestBody: DatabaseTagCreateRequest,
    ): CancelablePromise<CloudTag> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/fixed/subscriptions/{subscriptionId}/databases/{databaseId}/tags',
            path: {
                'subscriptionId': subscriptionId,
                'databaseId': databaseId,
            },
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
     * Update database tag by key
     * Update single database tag for a given resource by tag key
     * @param subscriptionId Subscription Id
     * @param databaseId Database Id
     * @param tagKey Tag key
     * @param requestBody
     * @returns CloudTag OK
     * @throws ApiError
     */
    public static updateTag1(
        subscriptionId: number,
        databaseId: number,
        tagKey: string,
        requestBody: DatabaseTagUpdateRequest,
    ): CancelablePromise<CloudTag> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/fixed/subscriptions/{subscriptionId}/databases/{databaseId}/tags/{tagKey}',
            path: {
                'subscriptionId': subscriptionId,
                'databaseId': databaseId,
                'tagKey': tagKey,
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
     * Delete database tag by key
     * Delete database tag for a given resource by tag key
     * @param subscriptionId Subscription Id
     * @param databaseId Database Id
     * @param tagKey Tag key
     * @returns any OK
     * @throws ApiError
     */
    public static deleteTag1(
        subscriptionId: number,
        databaseId: number,
        tagKey: string,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/fixed/subscriptions/{subscriptionId}/databases/{databaseId}/tags/{tagKey}',
            path: {
                'subscriptionId': subscriptionId,
                'databaseId': databaseId,
                'tagKey': tagKey,
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
     * Get Essentials databases
     * Information on databases belonging to an Essentials subscription identified by subscription Id
     * @param subscriptionId Subscription Id
     * @param offset Number of items to skip
     * @param limit Maximum number of items to return
     * @returns AccountFixedSubscriptionDatabases OK
     * @throws ApiError
     */
    public static getFixedSubscriptionDatabases(
        subscriptionId: number,
        offset?: number,
        limit?: number,
    ): CancelablePromise<AccountFixedSubscriptionDatabases> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/fixed/subscriptions/{subscriptionId}/databases',
            path: {
                'subscriptionId': subscriptionId,
            },
            query: {
                'offset': offset,
                'limit': limit,
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
     * Create Essentials database
     * Create a new Essentials database
     * @param subscriptionId Subscription Id
     * @param requestBody
     * @returns TaskStateUpdate OK
     * @throws ApiError
     */
    public static createFixedDatabase(
        subscriptionId: number,
        requestBody: FixedDatabaseCreateRequest,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/fixed/subscriptions/{subscriptionId}/databases',
            path: {
                'subscriptionId': subscriptionId,
            },
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
     * Import Essentials database status
     * Information on the latest database import status identified by Essentials subscription Id and Essentials database Id
     * @param subscriptionId Subscription Id
     * @param databaseId Database Id
     * @returns TaskStateUpdate OK
     * @throws ApiError
     */
    public static getDatabaseImportStatus1(
        subscriptionId: number,
        databaseId: number,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/fixed/subscriptions/{subscriptionId}/databases/{databaseId}/import',
            path: {
                'subscriptionId': subscriptionId,
                'databaseId': databaseId,
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
     * Import Essentials database
     * Import data from an RDB file or a different Redis database
     * @param subscriptionId Subscription Id
     * @param databaseId Database Id
     * @param requestBody
     * @returns TaskStateUpdate OK
     * @throws ApiError
     */
    public static importDatabase1(
        subscriptionId: number,
        databaseId: number,
        requestBody: FixedDatabaseImportRequest,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/fixed/subscriptions/{subscriptionId}/databases/{databaseId}/import',
            path: {
                'subscriptionId': subscriptionId,
                'databaseId': databaseId,
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
     * Backup Essentials database status
     * Information on the latest database backup status identified by Essentials subscription Id and Essentials database Id
     * @param subscriptionId Subscription Id
     * @param databaseId Database Id
     * @returns TaskStateUpdate OK
     * @throws ApiError
     */
    public static getDatabaseBackupStatus1(
        subscriptionId: number,
        databaseId: number,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/fixed/subscriptions/{subscriptionId}/databases/{databaseId}/backup',
            path: {
                'subscriptionId': subscriptionId,
                'databaseId': databaseId,
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
     * Backup Essentials database
     * Manually backup an Essentials database into the destination defined for it
     * @param subscriptionId Subscription Id
     * @param databaseId Database Id
     * @param requestBody
     * @returns TaskStateUpdate OK
     * @throws ApiError
     */
    public static backupDatabase1(
        subscriptionId: number,
        databaseId: number,
        requestBody?: FixedDatabaseBackupRequest,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/fixed/subscriptions/{subscriptionId}/databases/{databaseId}/backup',
            path: {
                'subscriptionId': subscriptionId,
                'databaseId': databaseId,
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
}
