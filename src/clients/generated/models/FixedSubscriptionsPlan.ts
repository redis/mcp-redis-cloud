/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Redis Essentials subscription plan information
 */
export type FixedSubscriptionsPlan = {
    id?: number;
    name?: string;
    size?: number;
    datasetSize?: number;
    sizeMeasurementUnit?: string;
    provider?: string;
    region?: string;
    regionId?: number;
    price?: number;
    priceCurrency?: string;
    pricePeriod?: string;
    maximumDatabases?: number;
    maximumThroughput?: number;
    maximumBandwidthGB?: number;
    availability?: string;
    connections?: string;
    cidrAllowRules?: number;
    supportDataPersistence?: boolean;
    redisFlex?: boolean;
    supportInstantAndDailyBackups?: boolean;
    supportReplication?: boolean;
    supportClustering?: boolean;
    supportSsl?: boolean;
    customerSupport?: string;
    links?: Array<Record<string, Record<string, any>>>;
};

