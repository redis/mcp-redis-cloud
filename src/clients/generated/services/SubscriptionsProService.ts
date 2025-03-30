/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountSubscriptions } from '../models/AccountSubscriptions.js';
import type { ActiveActiveRegionCreateRequest } from '../models/ActiveActiveRegionCreateRequest.js';
import type { ActiveActiveRegionDeleteRequest } from '../models/ActiveActiveRegionDeleteRequest.js';
import type { ActiveActiveSubscriptionRegions } from '../models/ActiveActiveSubscriptionRegions.js';
import type { CidrWhiteListUpdateRequest } from '../models/CidrWhiteListUpdateRequest.js';
import type { RedisVersions } from '../models/RedisVersions.js';
import type { Subscription } from '../models/Subscription.js';
import type { SubscriptionCreateRequest } from '../models/SubscriptionCreateRequest.js';
import type { SubscriptionMaintenanceWindows } from '../models/SubscriptionMaintenanceWindows.js';
import type { SubscriptionMaintenanceWindowsSpec } from '../models/SubscriptionMaintenanceWindowsSpec.js';
import type { SubscriptionPricings } from '../models/SubscriptionPricings.js';
import type { SubscriptionUpdateRequest } from '../models/SubscriptionUpdateRequest.js';
import type { TaskStateUpdate } from '../models/TaskStateUpdate.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import { OpenAPI } from '../core/OpenAPI.js';
import { request as __request } from '../core/request.js';
export class SubscriptionsProService {
    /**
     * Get subscription by id
     * Information on subscription identified by subscription Id
     * @param subscriptionId Subscription Id
     * @returns Subscription OK
     * @throws ApiError
     */
    public static getSubscriptionById(
        subscriptionId: number,
    ): CancelablePromise<Subscription> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscriptions/{subscriptionId}',
            path: {
                'subscriptionId': subscriptionId,
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
     * Update subscription
     * Update an existing subscription by Id
     * @param subscriptionId Subscription Id
     * @param requestBody
     * @returns TaskStateUpdate OK
     * @throws ApiError
     */
    public static updateSubscription(
        subscriptionId: number,
        requestBody: SubscriptionUpdateRequest,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/subscriptions/{subscriptionId}',
            path: {
                'subscriptionId': subscriptionId,
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
     * Delete subscription
     * Delete a subscription identified by subscription Id (subscription must be empty, i.e. cannot contain databases)
     * @param subscriptionId Subscription Id
     * @returns TaskStateUpdate OK
     * @throws ApiError
     */
    public static deleteSubscriptionById(
        subscriptionId: number,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/subscriptions/{subscriptionId}',
            path: {
                'subscriptionId': subscriptionId,
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
     * Get subscription maintenance windows
     * Get maintenance windows for subscription
     * @param subscriptionId Subscription Id
     * @returns SubscriptionMaintenanceWindows OK
     * @throws ApiError
     */
    public static getSubscriptionMaintenanceWindows(
        subscriptionId: number,
    ): CancelablePromise<SubscriptionMaintenanceWindows> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscriptions/{subscriptionId}/maintenance-windows',
            path: {
                'subscriptionId': subscriptionId,
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
     * Update subscription maintenance windows
     * Update maintenance windows for subscription
     * @param subscriptionId Subscription Id
     * @param requestBody
     * @returns TaskStateUpdate OK
     * @throws ApiError
     */
    public static updateSubscriptionMaintenanceWindows(
        subscriptionId: number,
        requestBody: SubscriptionMaintenanceWindowsSpec,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/subscriptions/{subscriptionId}/maintenance-windows',
            path: {
                'subscriptionId': subscriptionId,
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
     * Get subscription CIDR
     * Get CIDR  whitelist
     * @param subscriptionId Subscription Id
     * @returns TaskStateUpdate Accepted
     * @throws ApiError
     */
    public static getCidrWhiteList(
        subscriptionId: number,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscriptions/{subscriptionId}/cidr',
            path: {
                'subscriptionId': subscriptionId,
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
     * Update subscription CIDR
     * Update subscription CIDR whitelist
     * @param subscriptionId Subscription Id
     * @param requestBody
     * @returns TaskStateUpdate Accepted
     * @throws ApiError
     */
    public static updateSubscriptionCidrWhiteList(
        subscriptionId: number,
        requestBody: CidrWhiteListUpdateRequest,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/subscriptions/{subscriptionId}/cidr',
            path: {
                'subscriptionId': subscriptionId,
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
     * Get subscriptions
     * Information on current account's subscriptions
     * @returns AccountSubscriptions OK
     * @throws ApiError
     */
    public static getAllSubscriptions(): CancelablePromise<AccountSubscriptions> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscriptions',
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
     * Create subscription
     * Create a new subscription
     * @param requestBody
     * @returns TaskStateUpdate Accepted
     * @throws ApiError
     */
    public static createSubscription(
        requestBody: SubscriptionCreateRequest,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscriptions',
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
     * Get active-active subscription regions
     * Get all regions of an active-active subscription
     * @param subscriptionId Subscription Id
     * @returns ActiveActiveSubscriptionRegions OK
     * @throws ApiError
     */
    public static getRegionsFromActiveActiveSubscription(
        subscriptionId: number,
    ): CancelablePromise<ActiveActiveSubscriptionRegions> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscriptions/{subscriptionId}/regions',
            path: {
                'subscriptionId': subscriptionId,
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
     * Create active-active subscription region
     * Create a new region in an active-active subscription
     * @param subscriptionId Subscription Id
     * @param requestBody
     * @returns TaskStateUpdate OK
     * @throws ApiError
     */
    public static addNewRegionToActiveActiveSubscription(
        subscriptionId: number,
        requestBody: ActiveActiveRegionCreateRequest,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscriptions/{subscriptionId}/regions',
            path: {
                'subscriptionId': subscriptionId,
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
     * Delete active-active subscription regions
     * Delete one or more regions from an active-active subscription
     * @param subscriptionId Subscription Id
     * @param requestBody
     * @returns TaskStateUpdate OK
     * @throws ApiError
     */
    public static deleteRegionsFromActiveActiveSubscription(
        subscriptionId: number,
        requestBody: ActiveActiveRegionDeleteRequest,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/subscriptions/{subscriptionId}/regions',
            path: {
                'subscriptionId': subscriptionId,
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
     * Get subscription pricing
     * Get subscription pricing by by subscription Id
     * @param subscriptionId Subscription Id
     * @returns SubscriptionPricings OK
     * @throws ApiError
     */
    public static getSubscriptionPricing(
        subscriptionId: number,
    ): CancelablePromise<SubscriptionPricings> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscriptions/{subscriptionId}/pricing',
            path: {
                'subscriptionId': subscriptionId,
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
     * Get the available Redis database versions
     * Get the available Redis database versions
     * @returns RedisVersions OK
     * @throws ApiError
     */
    public static getRedisVersions(): CancelablePromise<RedisVersions> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscriptions/redis-versions',
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
