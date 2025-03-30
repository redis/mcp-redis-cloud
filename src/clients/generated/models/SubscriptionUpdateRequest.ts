/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Subscription update request
 */
export type SubscriptionUpdateRequest = {
    readonly subscriptionId?: number;
    /**
     * Subscription name
     */
    name?: string;
    /**
     * Optional. A valid payment method that was pre-defined in the current account. This value is Optional if ‘paymentMethod’ is ‘marketplace’, but Required for all other account types.
     */
    paymentMethodId?: number;
    /**
     * Optional. The payment method for the requested subscription. If ‘credit-card’ is specified, ‘paymentMethodId’ must be defined. Default: 'credit-card
     */
    paymentMethod?: SubscriptionUpdateRequest.paymentMethod;
    readonly commandType?: string;
};
export namespace SubscriptionUpdateRequest {
    /**
     * Optional. The payment method for the requested subscription. If ‘credit-card’ is specified, ‘paymentMethodId’ must be defined. Default: 'credit-card
     */
    export enum paymentMethod {
        CREDIT_CARD = 'credit-card',
        MARKETPLACE = 'marketplace',
    }
}

