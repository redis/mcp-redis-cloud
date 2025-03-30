/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountSystemLogEntries } from "../models/AccountSystemLogEntries.js";
import type { DataPersistenceOptions } from "../models/DataPersistenceOptions.js";
import type { ModulesData } from "../models/ModulesData.js";
import type { PaymentMethods } from "../models/PaymentMethods.js";
import type { Regions } from "../models/Regions.js";
import type { RootAccount } from "../models/RootAccount.js";
import type { SearchScalingFactorsData } from "../models/SearchScalingFactorsData.js";
import type { CancelablePromise } from "../core/CancelablePromise.js";
import { OpenAPI } from "../core/OpenAPI.js";
import { request as __request } from "../core/request.js";
export class AccountService {
  /**
   * Get Pro plans regions
   * Lookup list of regions for cloud provider
   * @param provider Provider Name
   * @returns Regions OK
   * @throws ApiError
   */
  public static getSupportedRegions(
    provider?: "AWS" | "GCP",
  ): CancelablePromise<Regions> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/regions",
      query: {
        provider: provider,
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
   * Get Query performance factors
   * Lookup list of supported Query performance factors
   * @returns SearchScalingFactorsData OK
   * @throws ApiError
   */
  public static getSupportedSearchScalingFactors(): CancelablePromise<SearchScalingFactorsData> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/query-performance-factors",
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
   * Get payment methods
   * Lookup list of current Account's payment methods
   * @returns PaymentMethods OK
   * @throws ApiError
   */
  public static getAccountPaymentMethods(): CancelablePromise<PaymentMethods> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/payment-methods",
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
   * Get system log
   * System log information for current account
   * @param offset Number of items to skip
   * @param limit Maximum number of items to return, but not more than 1000
   * @returns AccountSystemLogEntries OK
   * @throws ApiError
   */
  public static getAccountSystemLogs(
    offset?: number,
    limit?: number,
  ): CancelablePromise<AccountSystemLogEntries> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/logs",
      query: {
        offset: offset,
        limit: limit,
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
   * Get modules
   * Lookup list of database modules supported in current account (support may differ based on subscription and database settings)
   * @returns ModulesData OK
   * @throws ApiError
   */
  public static getSupportedDatabaseModules(): CancelablePromise<ModulesData> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/database-modules",
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
   * Get list of data persistence options
   * Lookup list of data persistence values
   * @returns DataPersistenceOptions OK
   * @throws ApiError
   */
  public static getDataPersistenceOptions(): CancelablePromise<DataPersistenceOptions> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/data-persistence",
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
   * Get current Account
   * Current account and related information
   * @returns RootAccount OK
   * @throws ApiError
   */
  public static getCurrentAccount(): CancelablePromise<RootAccount> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/",
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
