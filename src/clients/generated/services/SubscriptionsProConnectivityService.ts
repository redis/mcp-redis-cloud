/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActiveActivePscEndpointCreateRequest } from '../models/ActiveActivePscEndpointCreateRequest.js';
import type { ActiveActivePscEndpointUpdateRequest } from '../models/ActiveActivePscEndpointUpdateRequest.js';
import type { ActiveActiveTgwUpdateCidrsRequest } from '../models/ActiveActiveTgwUpdateCidrsRequest.js';
import type { ActiveActiveVpcPeeringCreateBaseRequest } from '../models/ActiveActiveVpcPeeringCreateBaseRequest.js';
import type { ActiveActiveVpcPeeringUpdateAwsRequest } from '../models/ActiveActiveVpcPeeringUpdateAwsRequest.js';
import type { PscEndpointCreateRequest } from '../models/PscEndpointCreateRequest.js';
import type { PscEndpointUpdateRequest } from '../models/PscEndpointUpdateRequest.js';
import type { TaskStateUpdate } from '../models/TaskStateUpdate.js';
import type { TgwUpdateCidrsRequest } from '../models/TgwUpdateCidrsRequest.js';
import type { VpcPeeringCreateBaseRequest } from '../models/VpcPeeringCreateBaseRequest.js';
import type { VpcPeeringUpdateAwsRequest } from '../models/VpcPeeringUpdateAwsRequest.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import { OpenAPI } from '../core/OpenAPI.js';
import { request as __request } from '../core/request.js';
export class SubscriptionsProConnectivityService {
    /**
     * Update a transit gateway attachment
     * Update an AWS transit gateway attachment
     * @param subscriptionId Subscription Id
     * @param tgwId Tgw Id
     * @param requestBody
     * @returns TaskStateUpdate Accepted
     * @throws ApiError
     */
    public static updateTgwAttachmentCidrs(
        subscriptionId: number,
        tgwId: number,
        requestBody: TgwUpdateCidrsRequest,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/subscriptions/{subscriptionId}/transitGateways/{TgwId}/attachment',
            path: {
                'subscriptionId': subscriptionId,
                'TgwId': tgwId,
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
     * Create a transit gateway attachment
     * Create an AWS transit gateway attachment
     * @param subscriptionId Subscription Id
     * @param tgwId Tgw Id
     * @returns TaskStateUpdate Accepted
     * @throws ApiError
     */
    public static createTgwAttachment(
        subscriptionId: number,
        tgwId: number,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscriptions/{subscriptionId}/transitGateways/{TgwId}/attachment',
            path: {
                'subscriptionId': subscriptionId,
                'TgwId': tgwId,
            },
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
     * Delete a transit gateway attachment
     * Delete an AWS transit gateway attachment
     * @param subscriptionId Subscription Id
     * @param tgwId Tgw Id
     * @returns TaskStateUpdate Accepted
     * @throws ApiError
     */
    public static deleteTgwAttachment(
        subscriptionId: number,
        tgwId: number,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/subscriptions/{subscriptionId}/transitGateways/{TgwId}/attachment',
            path: {
                'subscriptionId': subscriptionId,
                'TgwId': tgwId,
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
     * Reject a transit gateway resource share
     * Reject an AWS transit gateway resource share
     * @param subscriptionId Subscription Id
     * @param tgwInvitationId TgwInvitation Id
     * @returns TaskStateUpdate Accepted
     * @throws ApiError
     */
    public static rejectTgwResourceShare(
        subscriptionId: number,
        tgwInvitationId: number,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/subscriptions/{subscriptionId}/transitGateways/invitations/{tgwInvitationId}/reject',
            path: {
                'subscriptionId': subscriptionId,
                'tgwInvitationId': tgwInvitationId,
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
     * Accept a transit gateway resource share
     * Accept an AWS transit gateway resource share
     * @param subscriptionId Subscription Id
     * @param tgwInvitationId TgwInvitation Id
     * @returns TaskStateUpdate Accepted
     * @throws ApiError
     */
    public static acceptTgwResourceShare(
        subscriptionId: number,
        tgwInvitationId: number,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/subscriptions/{subscriptionId}/transitGateways/invitations/{tgwInvitationId}/accept',
            path: {
                'subscriptionId': subscriptionId,
                'tgwInvitationId': tgwInvitationId,
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
     * Update a specific region transit gateway attachment
     * Update an active active specific region AWS transit gateway attachment
     * @param subscriptionId Subscription Id
     * @param regionId Region id (required for active-active subscription)
     * @param tgwId Tgw Id
     * @param requestBody
     * @returns TaskStateUpdate Accepted
     * @throws ApiError
     */
    public static updateActiveActiveTgwAttachmentCidrs(
        subscriptionId: number,
        regionId: number,
        tgwId: number,
        requestBody: ActiveActiveTgwUpdateCidrsRequest,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/subscriptions/{subscriptionId}/regions/{regionId}/transitGateways/{TgwId}/attachment',
            path: {
                'subscriptionId': subscriptionId,
                'regionId': regionId,
                'TgwId': tgwId,
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
     * Create a specific region transit gateway attachment
     * Create an active active specific region AWS transit gateway attachment
     * @param subscriptionId Subscription Id
     * @param regionId Region id (required for active-active subscription)
     * @param tgwId Tgw Id
     * @returns TaskStateUpdate Accepted
     * @throws ApiError
     */
    public static createActiveActiveTgwAttachment(
        subscriptionId: number,
        regionId: number,
        tgwId: number,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscriptions/{subscriptionId}/regions/{regionId}/transitGateways/{TgwId}/attachment',
            path: {
                'subscriptionId': subscriptionId,
                'regionId': regionId,
                'TgwId': tgwId,
            },
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
     * Delete a specific region transit gateway attachment
     * Delete an active active specific region AWS transit gateway attachment
     * @param subscriptionId Subscription Id
     * @param regionId Region id (required for active-active subscription)
     * @param tgwId Tgw Id
     * @returns TaskStateUpdate Accepted
     * @throws ApiError
     */
    public static deleteActiveActiveTgwAttachment(
        subscriptionId: number,
        regionId: number,
        tgwId: number,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/subscriptions/{subscriptionId}/regions/{regionId}/transitGateways/{TgwId}/attachment',
            path: {
                'subscriptionId': subscriptionId,
                'regionId': regionId,
                'TgwId': tgwId,
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
     * Accept a specific region transit gateway resource share
     * Accept an active active specific region AWS transit gateway resource share
     * @param subscriptionId Subscription Id
     * @param regionId Region id (required for active-active subscription)
     * @param tgwInvitationId TgwInvitation Id
     * @returns TaskStateUpdate Accepted
     * @throws ApiError
     */
    public static acceptActiveActiveTgwResourceShare(
        subscriptionId: number,
        regionId: number,
        tgwInvitationId: number,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/subscriptions/{subscriptionId}/regions/{regionId}/transitGateways/invitations/{tgwInvitationId}/accept',
            path: {
                'subscriptionId': subscriptionId,
                'regionId': regionId,
                'tgwInvitationId': tgwInvitationId,
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
     * Update an existing active-active subscription Private Service Connect endpoint
     * Update an existing Private Service Connect endpoint in an existing active-active subscription.
     * @param subscriptionId Subscription Id
     * @param pscServiceId Private service connect service Id
     * @param regionId Region id (required for active-active subscription)
     * @param endpointId Private service connect endpoint Id
     * @param requestBody
     * @returns TaskStateUpdate Accepted
     * @throws ApiError
     */
    public static updateActiveActivePscServiceEndpoint(
        subscriptionId: number,
        pscServiceId: number,
        regionId: number,
        endpointId: number,
        requestBody: ActiveActivePscEndpointUpdateRequest,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/subscriptions/{subscriptionId}/regions/{regionId}/private-service-connect/{pscServiceId}/endpoints/{endpointId}',
            path: {
                'subscriptionId': subscriptionId,
                'pscServiceId': pscServiceId,
                'regionId': regionId,
                'endpointId': endpointId,
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
     * Delete an existing active-active subscription Private Service Connect endpoint
     * Delete an existing Private Service Connect endpoint in an existing active-active subscription.
     * @param subscriptionId Subscription Id
     * @param pscServiceId Private service connect service Id
     * @param regionId Region id (required for active-active subscription)
     * @param endpointId Private service connect endpoint Id
     * @returns TaskStateUpdate Accepted
     * @throws ApiError
     */
    public static deleteActiveActivePscServiceEndpoint(
        subscriptionId: number,
        pscServiceId: number,
        regionId: number,
        endpointId: number,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/subscriptions/{subscriptionId}/regions/{regionId}/private-service-connect/{pscServiceId}/endpoints/{endpointId}',
            path: {
                'subscriptionId': subscriptionId,
                'pscServiceId': pscServiceId,
                'regionId': regionId,
                'endpointId': endpointId,
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
     * Update an active-active subscription VPC peering
     * Update an existing VPC peering in an existing active-active subscription.
     * @param subscriptionId Subscription Id
     * @param peeringId VpcPeering Id
     * @param requestBody
     * @returns TaskStateUpdate OK
     * @throws ApiError
     */
    public static updateActiveActiveVpcPeering(
        subscriptionId: number,
        peeringId: number,
        requestBody: ActiveActiveVpcPeeringUpdateAwsRequest,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/subscriptions/{subscriptionId}/regions/peerings/{peeringId}',
            path: {
                'subscriptionId': subscriptionId,
                'peeringId': peeringId,
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
     * Delete an active-active subscription VPC peering
     * Delete a VPC peering from an existing active-active subscription.
     * @param subscriptionId Subscription Id
     * @param peeringId VpcPeering Id
     * @returns TaskStateUpdate OK
     * @throws ApiError
     */
    public static deleteActiveActiveVpcPeering(
        subscriptionId: number,
        peeringId: number,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/subscriptions/{subscriptionId}/regions/peerings/{peeringId}',
            path: {
                'subscriptionId': subscriptionId,
                'peeringId': peeringId,
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
     * Update an existing subscription Private Service Connect endpoint
     * Update an existing Private Service Connect endpoint in an existing subscription.
     * @param subscriptionId Subscription Id
     * @param pscServiceId Private service connect service Id
     * @param endpointId Private service connect endpoint Id
     * @param requestBody
     * @returns TaskStateUpdate Accepted
     * @throws ApiError
     */
    public static updatePscServiceEndpoint(
        subscriptionId: number,
        pscServiceId: number,
        endpointId: number,
        requestBody: PscEndpointUpdateRequest,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/subscriptions/{subscriptionId}/private-service-connect/{pscServiceId}/endpoints/{endpointId}',
            path: {
                'subscriptionId': subscriptionId,
                'pscServiceId': pscServiceId,
                'endpointId': endpointId,
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
     * Delete an existing subscription Private Service Connect endpoint
     * Delete an existing Private Service Connect endpoint in an existing subscription.
     * @param subscriptionId Subscription Id
     * @param pscServiceId Private service connect service Id
     * @param endpointId Private service connect endpoint Id
     * @returns TaskStateUpdate Accepted
     * @throws ApiError
     */
    public static deletePscServiceEndpoint(
        subscriptionId: number,
        pscServiceId: number,
        endpointId: number,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/subscriptions/{subscriptionId}/private-service-connect/{pscServiceId}/endpoints/{endpointId}',
            path: {
                'subscriptionId': subscriptionId,
                'pscServiceId': pscServiceId,
                'endpointId': endpointId,
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
     * Update subscription peering
     * Update an existing VPC peering in an existing subscription.
     * @param subscriptionId Subscription Id
     * @param peeringId VpcPeering Id
     * @param requestBody
     * @returns TaskStateUpdate Accepted
     * @throws ApiError
     */
    public static updateVpcPeering(
        subscriptionId: number,
        peeringId: number,
        requestBody: VpcPeeringUpdateAwsRequest,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/subscriptions/{subscriptionId}/peerings/{peeringId}',
            path: {
                'subscriptionId': subscriptionId,
                'peeringId': peeringId,
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
     * Delete subscription peering
     * Deletes a VPC peering identified by an id
     * @param subscriptionId Subscription Id
     * @param peeringId VpcPeering Id
     * @returns TaskStateUpdate Accepted
     * @throws ApiError
     */
    public static deleteVpcPeering(
        subscriptionId: number,
        peeringId: number,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/subscriptions/{subscriptionId}/peerings/{peeringId}',
            path: {
                'subscriptionId': subscriptionId,
                'peeringId': peeringId,
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
     * Reject a specific region transit gateway resource share
     * Reject an active active specific region AWS transit gateway resource share
     * @param subscriptionId Subscription Id
     * @param regionId Region id (required for active-active subscription)
     * @param tgwInvitationId TgwInvitation Id
     * @returns TaskStateUpdate Accepted
     * @throws ApiError
     */
    public static rejectActiveActiveTgwResourceShare(
        subscriptionId: number,
        regionId: number,
        tgwInvitationId: number,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/subscriptions/{subscriptionId}/regions/{regionId}/transitGateways/invitations/{tgwInvitationId}/reject',
            path: {
                'subscriptionId': subscriptionId,
                'regionId': regionId,
                'tgwInvitationId': tgwInvitationId,
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
     * Get an active-active Subscription private service connect
     * Get an active-active private service connect details
     * @param subscriptionId Subscription Id
     * @param regionId Region id (required for active-active subscription)
     * @returns TaskStateUpdate Accepted
     * @throws ApiError
     */
    public static getActiveActivePscService(
        subscriptionId: number,
        regionId: number,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscriptions/{subscriptionId}/regions/{regionId}/private-service-connect',
            path: {
                'subscriptionId': subscriptionId,
                'regionId': regionId,
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
     * Create an active-active subscription Private Service Connect
     * Create a new Private Service Connect in an existing active-active subscription.
     * @param subscriptionId Subscription Id
     * @param regionId Region id (required for active-active subscription)
     * @returns TaskStateUpdate Accepted
     * @throws ApiError
     */
    public static createActiveActivePscService(
        subscriptionId: number,
        regionId: number,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscriptions/{subscriptionId}/regions/{regionId}/private-service-connect',
            path: {
                'subscriptionId': subscriptionId,
                'regionId': regionId,
            },
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
     * Delete an active-active subscription Private Service Connect
     * Delete a Private Service Connect in an existing active-active subscription.
     * @param subscriptionId Subscription Id
     * @param regionId Region id (required for active-active subscription)
     * @returns TaskStateUpdate Accepted
     * @throws ApiError
     */
    public static deleteActiveActivePscService(
        subscriptionId: number,
        regionId: number,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/subscriptions/{subscriptionId}/regions/{regionId}/private-service-connect',
            path: {
                'subscriptionId': subscriptionId,
                'regionId': regionId,
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
     * Get an active-active subscription private service connect endpoints
     * Get an active-active private service connect endpoints details
     * @param subscriptionId Subscription Id
     * @param regionId Region id (required for active-active subscription)
     * @param pscServiceId Private service connect service Id
     * @returns TaskStateUpdate Accepted
     * @throws ApiError
     */
    public static getActiveActivePscServiceEndpoints(
        subscriptionId: number,
        regionId: number,
        pscServiceId: number,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscriptions/{subscriptionId}/regions/{regionId}/private-service-connect/{pscServiceId}',
            path: {
                'subscriptionId': subscriptionId,
                'regionId': regionId,
                'pscServiceId': pscServiceId,
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
     * Create an active-active subscription Private Service Connect endpoint
     * Create a new Private Service Connect endpoint in an existing active-active subscription.
     * @param subscriptionId Subscription Id
     * @param pscServiceId Private service connect service Id
     * @param regionId Region id (required for active-active subscription)
     * @param requestBody
     * @returns TaskStateUpdate Accepted
     * @throws ApiError
     */
    public static createActiveActivePscServiceEndpoint(
        subscriptionId: number,
        pscServiceId: number,
        regionId: number,
        requestBody: ActiveActivePscEndpointCreateRequest,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscriptions/{subscriptionId}/regions/{regionId}/private-service-connect/{pscServiceId}',
            path: {
                'subscriptionId': subscriptionId,
                'pscServiceId': pscServiceId,
                'regionId': regionId,
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
     * Get an active-active subscription VPC peering
     * Get VPC peering details for an active-active subscription.
     * @param subscriptionId Subscription Id
     * @returns TaskStateUpdate OK
     * @throws ApiError
     */
    public static getActiveActiveVpcPeerings(
        subscriptionId: number,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscriptions/{subscriptionId}/regions/peerings',
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
     * Create an active-active subscription VPC peering
     * Create a new VPC peering in an existing active-active subscription. For details, see [documentation](https://docs.redis.com/latest/rc/security/vpc-peering)
     * @param subscriptionId Subscription Id
     * @param requestBody
     * @returns TaskStateUpdate OK
     * @throws ApiError
     */
    public static createActiveActiveVpcPeering(
        subscriptionId: number,
        requestBody: ActiveActiveVpcPeeringCreateBaseRequest,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscriptions/{subscriptionId}/regions/peerings',
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
     * Get Subscription private service connect
     * Get private service connect details
     * @param subscriptionId Subscription Id
     * @returns TaskStateUpdate Accepted
     * @throws ApiError
     */
    public static getPscService(
        subscriptionId: number,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscriptions/{subscriptionId}/private-service-connect',
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
     * Create a subscription Private Service Connect
     * Create a new Private Service Connect in an existing subscription.
     * @param subscriptionId Subscription Id
     * @returns TaskStateUpdate Accepted
     * @throws ApiError
     */
    public static createPscService(
        subscriptionId: number,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscriptions/{subscriptionId}/private-service-connect',
            path: {
                'subscriptionId': subscriptionId,
            },
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
     * Delete a subscription Private Service Connect
     * Delete a Private Service Connect in an existing subscription.
     * @param subscriptionId Subscription Id
     * @returns TaskStateUpdate Accepted
     * @throws ApiError
     */
    public static deletePscService(
        subscriptionId: number,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/subscriptions/{subscriptionId}/private-service-connect',
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
     * Get Subscription private service connect endpoints
     * Get private service connect endpoints details
     * @param subscriptionId Subscription Id
     * @param pscServiceId Private service connect service Id
     * @returns TaskStateUpdate Accepted
     * @throws ApiError
     */
    public static getPscServiceEndpoints(
        subscriptionId: number,
        pscServiceId: number,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscriptions/{subscriptionId}/private-service-connect/{pscServiceId}',
            path: {
                'subscriptionId': subscriptionId,
                'pscServiceId': pscServiceId,
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
     * Create a subscription Private Service Connect endpoint
     * Create a new Private Service Connect endpoint in an existing subscription.
     * @param subscriptionId Subscription Id
     * @param pscServiceId Private service connect service Id
     * @param requestBody
     * @returns TaskStateUpdate Accepted
     * @throws ApiError
     */
    public static createPscServiceEndpoint(
        subscriptionId: number,
        pscServiceId: number,
        requestBody: PscEndpointCreateRequest,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscriptions/{subscriptionId}/private-service-connect/{pscServiceId}',
            path: {
                'subscriptionId': subscriptionId,
                'pscServiceId': pscServiceId,
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
     * Get Subscription peering
     * Get VPC peering details
     * @param subscriptionId Subscription Id
     * @returns TaskStateUpdate Accepted
     * @throws ApiError
     */
    public static getVpcPeering(
        subscriptionId: number,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscriptions/{subscriptionId}/peerings',
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
     * Create subscription peering
     * Create a new VPC peering in an existing subscription. VPC peering for Google Cloud Provider must be enabled using the GCloud command line. For details, see [documentation](https://docs.redis.com/latest/rc/security/vpc-peering)
     * @param subscriptionId Subscription Id
     * @param requestBody
     * @returns TaskStateUpdate Accepted
     * @throws ApiError
     */
    public static createVpcPeering(
        subscriptionId: number,
        requestBody: VpcPeeringCreateBaseRequest,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscriptions/{subscriptionId}/peerings',
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
     * Get Subscription tgws
     * Get tgws details
     * @param subscriptionId Subscription Id
     * @returns TaskStateUpdate OK
     * @throws ApiError
     */
    public static getTgws(
        subscriptionId: number,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscriptions/{subscriptionId}/transitGateways',
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
     * Get Subscription tgw invitations
     * Get tgw invitations details
     * @param subscriptionId Subscription Id
     * @returns TaskStateUpdate OK
     * @throws ApiError
     */
    public static getTgwSharedInvitations(
        subscriptionId: number,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscriptions/{subscriptionId}/transitGateways/invitations',
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
     * Get Active Active Subscription tgws
     * Get Active Active tgws details
     * @param subscriptionId Subscription Id
     * @param regionId Region id (required for active-active subscription)
     * @returns TaskStateUpdate OK
     * @throws ApiError
     */
    public static getActiveActiveTgws(
        subscriptionId: number,
        regionId: number,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscriptions/{subscriptionId}/regions/{regionId}/transitGateways',
            path: {
                'subscriptionId': subscriptionId,
                'regionId': regionId,
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
     * Get Active Active Subscription tgw invitations
     * Get Active Active tgw invitations details
     * @param subscriptionId Subscription Id
     * @param regionId Region id (required for active-active subscription)
     * @returns TaskStateUpdate OK
     * @throws ApiError
     */
    public static getActiveActiveTgwSharedInvitations(
        subscriptionId: number,
        regionId: number,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscriptions/{subscriptionId}/regions/{regionId}/transitGateways/invitations',
            path: {
                'subscriptionId': subscriptionId,
                'regionId': regionId,
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
     * Get an active-active subscription private service connect endpoint deletion script
     * Get an active-active subscription private service connect endpoint deletion script details for the deletion of a gcp user's endpoint.
     * @param subscriptionId Subscription Id
     * @param regionId Region id (required for active-active subscription)
     * @param pscServiceId Private service connect service Id
     * @param endpointId Private service connect endpoint Id
     * @returns TaskStateUpdate Accepted
     * @throws ApiError
     */
    public static getActiveActivPscServiceEndpointDeletionScript(
        subscriptionId: number,
        regionId: number,
        pscServiceId: number,
        endpointId: number,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscriptions/{subscriptionId}/regions/{regionId}/private-service-connect/{pscServiceId}/endpoints/{endpointId}/deletionScripts',
            path: {
                'subscriptionId': subscriptionId,
                'regionId': regionId,
                'pscServiceId': pscServiceId,
                'endpointId': endpointId,
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
     * Get an active-active subscription private service connect endpoint creation script
     * Get an active-active subscription private service connect endpoint creation script details for the creation of a gcp user's endpoint.
     * @param subscriptionId Subscription Id
     * @param regionId Region id (required for active-active subscription)
     * @param pscServiceId Private service connect service Id
     * @param endpointId Private service connect endpoint Id
     * @returns TaskStateUpdate Accepted
     * @throws ApiError
     */
    public static getActiveActivPscServiceEndpointCreationScript(
        subscriptionId: number,
        regionId: number,
        pscServiceId: number,
        endpointId: number,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscriptions/{subscriptionId}/regions/{regionId}/private-service-connect/{pscServiceId}/endpoints/{endpointId}/creationScripts',
            path: {
                'subscriptionId': subscriptionId,
                'regionId': regionId,
                'pscServiceId': pscServiceId,
                'endpointId': endpointId,
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
     * Get Subscription private service connect endpoint deletion script
     * Get Subscription private service connect endpoint deletion script details for the deletion of a gcp user's endpoint.
     * @param subscriptionId Subscription Id
     * @param pscServiceId Private service connect service Id
     * @param endpointId Private service connect endpoint Id
     * @returns TaskStateUpdate Accepted
     * @throws ApiError
     */
    public static getPscServiceEndpointDeletionScript(
        subscriptionId: number,
        pscServiceId: number,
        endpointId: number,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscriptions/{subscriptionId}/private-service-connect/{pscServiceId}/endpoints/{endpointId}/deletionScripts',
            path: {
                'subscriptionId': subscriptionId,
                'pscServiceId': pscServiceId,
                'endpointId': endpointId,
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
     * Get Subscription private service connect endpoint creation script
     * Get Subscription private service connect endpoint creation script details for the creation of a gcp user's endpoint.
     * @param subscriptionId Subscription Id
     * @param pscServiceId Private service connect service Id
     * @param endpointId Private service connect endpoint Id
     * @returns TaskStateUpdate Accepted
     * @throws ApiError
     */
    public static getPscServiceEndpointCreationScript(
        subscriptionId: number,
        pscServiceId: number,
        endpointId: number,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscriptions/{subscriptionId}/private-service-connect/{pscServiceId}/endpoints/{endpointId}/creationScripts',
            path: {
                'subscriptionId': subscriptionId,
                'pscServiceId': pscServiceId,
                'endpointId': endpointId,
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
