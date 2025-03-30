/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Redis Essentials Subscription information
 */
export type FixedSubscription = {
    id?: number;
    name?: string;
    status?: string;
    paymentMethodId?: number;
    paymentMethodType?: string;
    planId?: number;
    planName?: string;
    planType?: string;
    size?: number;
    sizeMeasurementUnit?: string;
    provider?: string;
    region?: string;
    price?: number;
    pricePeriod?: string;
    priceCurrency?: string;
    maximumDatabases?: number;
    availability?: string;
    connections?: string;
    cidrAllowRules?: number;
    supportDataPersistence?: boolean;
    supportInstantAndDailyBackups?: boolean;
    supportReplication?: boolean;
    supportClustering?: boolean;
    customerSupport?: string;
    creationDate?: string;
    links?: Array<Record<string, Record<string, any>>>;
    databaseStatus?: string;
};

