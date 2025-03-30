/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SubscriptionDatabaseSpec } from './SubscriptionDatabaseSpec.js';
import type { SubscriptionSpec } from './SubscriptionSpec.js';
/**
 * Subscription create request
 */
export type SubscriptionCreateRequest = {
    /**
     * Optional. Subscription name
     */
    name?: string;
    /**
     * Optional. When 'false': Creates a deployment plan and deploys it (creating any resources required by the plan). When 'true': creates a read-only deployment plan without any resource creation. Default: 'false'
     */
    dryRun?: boolean;
    /**
     * Optional. When 'single-region' or null: Creates a single region subscription. When 'active-active': creates an active-active (multi-region) subscription
     */
    deploymentType?: SubscriptionCreateRequest.deploymentType;
    /**
     * Optional. The payment method for the requested subscription. If ‘credit-card’ is specified, ‘paymentMethodId’ must be defined. Default: 'credit-card
     */
    paymentMethod?: SubscriptionCreateRequest.paymentMethod;
    /**
     * Optional. A valid payment method that was pre-defined in the current account. This value is Optional if ‘paymentMethod’ is ‘marketplace’, but Required for all other account types.
     */
    paymentMethodId?: number;
    /**
     * Optional. Memory storage preference: either 'ram' or a combination of 'ram-and-flash'. Default: 'ram'
     */
    memoryStorage?: SubscriptionCreateRequest.memoryStorage;
    /**
     * Required. Cloud hosting & networking details
     */
    cloudProviders: Array<SubscriptionSpec>;
    /**
     * Required. Databases specifications for each planned database
     */
    databases: Array<SubscriptionDatabaseSpec>;
    /**
     * Optional. If specified, the redisVersion defines the Redis version of the databases in the subscription. If omitted, the Redis version will be the default (available in 'GET /subscriptions/redis-versions')
     */
    redisVersion?: string;
    readonly commandType?: string;
};
export namespace SubscriptionCreateRequest {
    /**
     * Optional. When 'single-region' or null: Creates a single region subscription. When 'active-active': creates an active-active (multi-region) subscription
     */
    export enum deploymentType {
        SINGLE_REGION = 'single-region',
        ACTIVE_ACTIVE = 'active-active',
    }
    /**
     * Optional. The payment method for the requested subscription. If ‘credit-card’ is specified, ‘paymentMethodId’ must be defined. Default: 'credit-card
     */
    export enum paymentMethod {
        CREDIT_CARD = 'credit-card',
        MARKETPLACE = 'marketplace',
    }
    /**
     * Optional. Memory storage preference: either 'ram' or a combination of 'ram-and-flash'. Default: 'ram'
     */
    export enum memoryStorage {
        RAM = 'ram',
        RAM_AND_FLASH = 'ram-and-flash',
    }
}

