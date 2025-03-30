/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * RedisLabs Subscription information
 */
export type Subscription = {
    id?: number;
    name?: string;
    paymentMethodId?: number;
    status?: string;
    memoryStorage?: Subscription.memoryStorage;
    numberOfDatabases?: number;
    paymentMethodType?: Subscription.paymentMethodType;
    links?: Array<Record<string, Record<string, any>>>;
};
export namespace Subscription {
    export enum memoryStorage {
        RAM = 'ram',
        RAM_AND_FLASH = 'ram-and-flash',
    }
    export enum paymentMethodType {
        CREDIT_CARD = 'credit-card',
        MARKETPLACE = 'marketplace',
    }
}

