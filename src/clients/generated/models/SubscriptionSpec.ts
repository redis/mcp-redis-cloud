/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SubscriptionRegionSpec } from './SubscriptionRegionSpec.js';
/**
 * Required. Cloud hosting & networking details
 */
export type SubscriptionSpec = {
    /**
     * Optional. Cloud provider. Default: 'AWS'
     */
    provider?: SubscriptionSpec.provider;
    /**
     * Optional. Cloud account identifier. Default: Redis internal cloud account (using Cloud Account Id = 1 implies using Redis internal cloud account). Note that a GCP subscription can be created only with Redis internal cloud account.
     */
    cloudAccountId?: number;
    /**
     * Required. Cloud networking details, per region (single region or multiple regions for Active-Active cluster only)
     */
    regions: Array<SubscriptionRegionSpec>;
};
export namespace SubscriptionSpec {
    /**
     * Optional. Cloud provider. Default: 'AWS'
     */
    export enum provider {
        AWS = 'AWS',
        GCP = 'GCP',
    }
}

