/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FixedSubscription } from "../models/FixedSubscription.js";
import type { FixedSubscriptionCreateRequest } from "../models/FixedSubscriptionCreateRequest.js";
import type { FixedSubscriptions } from "../models/FixedSubscriptions.js";
import type { FixedSubscriptionsPlan } from "../models/FixedSubscriptionsPlan.js";
import type { FixedSubscriptionsPlans } from "../models/FixedSubscriptionsPlans.js";
import type { FixedSubscriptionUpdateRequest } from "../models/FixedSubscriptionUpdateRequest.js";
import type { TaskStateUpdate } from "../models/TaskStateUpdate.js";
import type { CancelablePromise } from "../core/CancelablePromise.js";
import { OpenAPI } from "../core/OpenAPI.js";
import { request as __request } from "../core/request.js";
export class SubscriptionsEssentialsService {
  /**
   * Get Essentials subscription by id
   * Information on Essentials subscription identified by subscription Id
   * @param subscriptionId Subscription Id
   * @returns FixedSubscription OK
   * @throws ApiError
   */
  public static getSubscriptionById1(
    subscriptionId: number,
  ): CancelablePromise<FixedSubscription> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/fixed/subscriptions/{subscriptionId}",
      path: {
        subscriptionId: subscriptionId,
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
   * Update Essentials subscription
   * Update an Essentials subscription
   * @param subscriptionId
   * @param requestBody
   * @returns TaskStateUpdate Accepted
   * @throws ApiError
   */
  public static updateSubscription1(
    subscriptionId: number,
    requestBody: FixedSubscriptionUpdateRequest,
  ): CancelablePromise<TaskStateUpdate> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/fixed/subscriptions/{subscriptionId}",
      path: {
        subscriptionId: subscriptionId,
      },
      body: requestBody,
      mediaType: "application/json",
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
   * Delete Essentials subscription
   * Delete a Essentials subscription identified by subscription Id (subscription must be empty, i.e. cannot contain databases)
   * @param subscriptionId Subscription Id
   * @returns TaskStateUpdate OK
   * @throws ApiError
   */
  public static deleteSubscriptionById1(
    subscriptionId: number,
  ): CancelablePromise<TaskStateUpdate> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/fixed/subscriptions/{subscriptionId}",
      path: {
        subscriptionId: subscriptionId,
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
   * Get Essentials subscriptions
   * Information on current account's Essentials subscriptions
   * @returns FixedSubscriptions OK
   * @throws ApiError
   */
  public static getAllSubscriptions1(): CancelablePromise<FixedSubscriptions> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/fixed/subscriptions",
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
   * Create Essentials subscription
   * Create a new Essentials subscription
   * @param requestBody
   * @returns TaskStateUpdate Accepted
   * @throws ApiError
   */
  public static createSubscription1(
    requestBody: FixedSubscriptionCreateRequest,
  ): CancelablePromise<TaskStateUpdate> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/fixed/subscriptions",
      body: requestBody,
      mediaType: "application/json",
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
   * Get Plans
   * Lookup list of plans
   * @param provider Cloud Provider Name
   * @param redisFlex Is RedisFlex Plan
   * @returns FixedSubscriptionsPlans OK
   * @throws ApiError
   */
  public static getAllFixedSubscriptionsPlans(
    provider?: "AWS" | "GCP" | "AZURE",
    redisFlex?: boolean,
  ): CancelablePromise<FixedSubscriptionsPlans> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/fixed/plans",
      query: {
        provider: provider,
        redisFlex: redisFlex,
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
   * Get Essentials subscription plan by id
   * Information on a specific Essentials subscription plan identified by plan Id
   * @param planId Essentials Subscription Plan ID
   * @returns FixedSubscriptionsPlan OK
   * @throws ApiError
   */
  public static getFixedSubscriptionsPlanById(
    planId: number,
  ): CancelablePromise<FixedSubscriptionsPlan> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/fixed/plans/{planId}",
      path: {
        planId: planId,
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
   * Get Essentials subscription plans by subscription id
   * Lookup list of Essentials plans that can be used by a specific subscription
   * @param subscriptionId Subscription Id
   * @returns FixedSubscriptionsPlans OK
   * @throws ApiError
   */
  public static getFixedSubscriptionsPlansBySubscriptionId(
    subscriptionId: number,
  ): CancelablePromise<FixedSubscriptionsPlans> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/fixed/plans/subscriptions/{subscriptionId}",
      path: {
        subscriptionId: subscriptionId,
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
