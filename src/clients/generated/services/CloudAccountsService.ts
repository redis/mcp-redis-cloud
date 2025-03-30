/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CloudAccount } from '../models/CloudAccount.js';
import type { CloudAccountCreateRequest } from '../models/CloudAccountCreateRequest.js';
import type { CloudAccounts } from '../models/CloudAccounts.js';
import type { CloudAccountUpdateRequest } from '../models/CloudAccountUpdateRequest.js';
import type { TaskStateUpdate } from '../models/TaskStateUpdate.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import { OpenAPI } from '../core/OpenAPI.js';
import { request as __request } from '../core/request.js';
export class CloudAccountsService {
    /**
     * Get cloud account by id
     * Information on a specific cloud account
     * @param cloudAccountId Cloud Account Id
     * @returns CloudAccount OK
     * @throws ApiError
     */
    public static getCloudAccountById(
        cloudAccountId: number,
    ): CancelablePromise<CloudAccount> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/cloud-accounts/{cloudAccountId}',
            path: {
                'cloudAccountId': cloudAccountId,
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
     * Update cloud account
     * Update cloud account
     * @param cloudAccountId Cloud Account Id
     * @param requestBody
     * @returns TaskStateUpdate Accepted
     * @throws ApiError
     */
    public static updateCloudAccount(
        cloudAccountId: number,
        requestBody: CloudAccountUpdateRequest,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/cloud-accounts/{cloudAccountId}',
            path: {
                'cloudAccountId': cloudAccountId,
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
     * Delete cloud account
     * Delete specified cloud account
     * @param cloudAccountId Cloud Account Id
     * @returns TaskStateUpdate OK
     * @throws ApiError
     */
    public static deleteCloudAccount(
        cloudAccountId: number,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/cloud-accounts/{cloudAccountId}',
            path: {
                'cloudAccountId': cloudAccountId,
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
     * Get cloud accounts
     * List all configured cloud accounts
     * @returns CloudAccounts OK
     * @throws ApiError
     */
    public static getCloudAccounts(): CancelablePromise<CloudAccounts> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/cloud-accounts',
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
     * Create cloud account
     * Create cloud account
     * @param requestBody
     * @returns TaskStateUpdate Accepted
     * @throws ApiError
     */
    public static createCloudAccount(
        requestBody: CloudAccountCreateRequest,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/cloud-accounts',
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
