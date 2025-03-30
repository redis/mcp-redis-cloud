/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Essentials subscription update request
 */
export type FixedSubscriptionUpdateRequest = {
    readonly subscriptionId?: number;
    /**
     * Optional. Essentials subscription name
     */
    name?: string;
    /**
     * Optional. A predefined Essentials plan Id (see lookup API '/fixed/plans'). The plan defines the billing, deployment and configuration for the created subscription based on specific plan details
     */
    planId?: number;
    /**
     * Optional. The payment method for the requested subscription. If ‘credit-card’ is specified, ‘paymentMethodId’ must be defined. Default: 'credit-card'
     */
    paymentMethod?: FixedSubscriptionUpdateRequest.paymentMethod;
    /**
     * Optional. A valid payment method (credit card, wire transfer etc) pre-defined in the current account. It will be billed for any charges related to the created subscription.
     */
    paymentMethodId?: number;
    readonly commandType?: string;
};
export namespace FixedSubscriptionUpdateRequest {
    /**
     * Optional. The payment method for the requested subscription. If ‘credit-card’ is specified, ‘paymentMethodId’ must be defined. Default: 'credit-card'
     */
    export enum paymentMethod {
        CREDIT_CARD = 'credit-card',
        MARKETPLACE = 'marketplace',
    }
}

