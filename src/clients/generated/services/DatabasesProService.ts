/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountSubscriptionDatabases } from '../models/AccountSubscriptionDatabases.js';
import type { CloudTag } from '../models/CloudTag.js';
import type { CloudTags } from '../models/CloudTags.js';
import type { CrdbFlushRequest } from '../models/CrdbFlushRequest.js';
import type { CrdbUpdatePropertiesRequest } from '../models/CrdbUpdatePropertiesRequest.js';
import type { Database } from '../models/Database.js';
import type { DatabaseBackupRequest } from '../models/DatabaseBackupRequest.js';
import type { DatabaseCertificate } from '../models/DatabaseCertificate.js';
import type { DatabaseCreateRequest } from '../models/DatabaseCreateRequest.js';
import type { DatabaseImportRequest } from '../models/DatabaseImportRequest.js';
import type { DatabaseTagCreateRequest } from '../models/DatabaseTagCreateRequest.js';
import type { DatabaseTagsUpdateRequest } from '../models/DatabaseTagsUpdateRequest.js';
import type { DatabaseTagUpdateRequest } from '../models/DatabaseTagUpdateRequest.js';
import type { DatabaseUpdateRequest } from '../models/DatabaseUpdateRequest.js';
import type { TaskStateUpdate } from '../models/TaskStateUpdate.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import { OpenAPI } from '../core/OpenAPI.js';
import { request as __request } from '../core/request.js';
export class DatabasesProService {
    /**
     * Get database by id
     * Information on a specific database identified by subscription Id and database Id
     * @param subscriptionId Subscription Id
     * @param databaseId Database Id
     * @returns Database OK
     * @throws ApiError
     */
    public static getSubscriptionDatabaseById(
        subscriptionId: number,
        databaseId: number,
    ): CancelablePromise<Database> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscriptions/{subscriptionId}/databases/{databaseId}',
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
     * Update database
     * Update an existing database
     * @param subscriptionId Subscription Id
     * @param databaseId Database Id
     * @param requestBody
     * @returns TaskStateUpdate OK
     * @throws ApiError
     */
    public static updateDatabase(
        subscriptionId: number,
        databaseId: number,
        requestBody: DatabaseUpdateRequest,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/subscriptions/{subscriptionId}/databases/{databaseId}',
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
     * Delete database
     * Delete a specific database identified by subscription Id and database Id
     * @param subscriptionId Subscription Id
     * @param databaseId Database Id
     * @returns TaskStateUpdate OK
     * @throws ApiError
     */
    public static deleteDatabaseById(
        subscriptionId: number,
        databaseId: number,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/subscriptions/{subscriptionId}/databases/{databaseId}',
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
    public static getTags(
        subscriptionId: number,
        databaseId: number,
    ): CancelablePromise<CloudTags> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscriptions/{subscriptionId}/databases/{databaseId}/tags',
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
    public static updateTags(
        subscriptionId: number,
        databaseId: number,
        requestBody: DatabaseTagsUpdateRequest,
    ): CancelablePromise<CloudTags> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/subscriptions/{subscriptionId}/databases/{databaseId}/tags',
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
    public static createTag(
        subscriptionId: number,
        databaseId: number,
        requestBody: DatabaseTagCreateRequest,
    ): CancelablePromise<CloudTag> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscriptions/{subscriptionId}/databases/{databaseId}/tags',
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
    public static updateTag(
        subscriptionId: number,
        databaseId: number,
        tagKey: string,
        requestBody: DatabaseTagUpdateRequest,
    ): CancelablePromise<CloudTag> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/subscriptions/{subscriptionId}/databases/{databaseId}/tags/{tagKey}',
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
    public static deleteTag(
        subscriptionId: number,
        databaseId: number,
        tagKey: string,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/subscriptions/{subscriptionId}/databases/{databaseId}/tags/{tagKey}',
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
     * Update active-active regions
     * Update active-active local database properties
     * @param subscriptionId Subscription Id
     * @param databaseId Database Id
     * @param requestBody
     * @returns TaskStateUpdate OK
     * @throws ApiError
     */
    public static updateCrdbLocalProperties(
        subscriptionId: number,
        databaseId: number,
        requestBody: CrdbUpdatePropertiesRequest,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/subscriptions/{subscriptionId}/databases/{databaseId}/regions',
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
     * Flush database data
     * Flush database data
     * @param subscriptionId Subscription Id
     * @param databaseId Database Id
     * @param requestBody
     * @returns TaskStateUpdate OK
     * @throws ApiError
     */
    public static flushCrdb(
        subscriptionId: number,
        databaseId: number,
        requestBody: CrdbFlushRequest,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/subscriptions/{subscriptionId}/databases/{databaseId}/flush',
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
     * Get databases
     * Information on databases belonging to subscription identified by subscription Id
     * @param subscriptionId Subscription Id
     * @param offset Number of items to skip
     * @param limit Maximum number of items to return
     * @returns AccountSubscriptionDatabases OK
     * @throws ApiError
     */
    public static getSubscriptionDatabases(
        subscriptionId: number,
        offset?: number,
        limit?: number,
    ): CancelablePromise<AccountSubscriptionDatabases> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscriptions/{subscriptionId}/databases',
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
     * Create database
     * Create a new database
     * @param subscriptionId Subscription Id
     * @param requestBody
     * @returns TaskStateUpdate Accepted
     * @throws ApiError
     */
    public static createDatabase(
        subscriptionId: number,
        requestBody: DatabaseCreateRequest,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscriptions/{subscriptionId}/databases',
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
     * Import database status
     * Information on the latest database import status identified by subscription Id and database Id
     * @param subscriptionId Subscription Id
     * @param databaseId Database Id
     * @returns TaskStateUpdate OK
     * @throws ApiError
     */
    public static getDatabaseImportStatus(
        subscriptionId: number,
        databaseId: number,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscriptions/{subscriptionId}/databases/{databaseId}/import',
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
     * Import database
     * Import data from an RDB file or a different Redis database
     * @param subscriptionId Subscription Id
     * @param databaseId Database Id
     * @param requestBody
     * @returns TaskStateUpdate OK
     * @throws ApiError
     */
    public static importDatabase(
        subscriptionId: number,
        databaseId: number,
        requestBody: DatabaseImportRequest,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscriptions/{subscriptionId}/databases/{databaseId}/import',
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
     * Backup database status
     * Information on the latest database backup status identified by subscription Id and database Id
     * @param subscriptionId Subscription Id
     * @param databaseId Database Id
     * @param regionName Region name (required for active-active subscription)
     * @returns TaskStateUpdate OK
     * @throws ApiError
     */
    public static getDatabaseBackupStatus(
        subscriptionId: number,
        databaseId: number,
        regionName?: string,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscriptions/{subscriptionId}/databases/{databaseId}/backup',
            path: {
                'subscriptionId': subscriptionId,
                'databaseId': databaseId,
            },
            query: {
                'regionName': regionName,
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
     * Backup database
     * Manually backup a database into the destination defined for it
     * @param subscriptionId Subscription Id
     * @param databaseId Database Id
     * @param requestBody
     * @returns TaskStateUpdate OK
     * @throws ApiError
     */
    public static backupDatabase(
        subscriptionId: number,
        databaseId: number,
        requestBody?: DatabaseBackupRequest,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscriptions/{subscriptionId}/databases/{databaseId}/backup',
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
     * Get database certificate
     * X.509 PEM (base64) encoded certificate for TLS connection to the database
     * @param subscriptionId Subscription Id
     * @param databaseId Database Id
     * @returns DatabaseCertificate OK
     * @throws ApiError
     */
    public static getSubscriptionDatabaseCertificate(
        subscriptionId: number,
        databaseId: number,
    ): CancelablePromise<DatabaseCertificate> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscriptions/{subscriptionId}/databases/{databaseId}/certificate',
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
}
