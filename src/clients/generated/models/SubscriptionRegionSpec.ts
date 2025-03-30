/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SubscriptionRegionNetworkingSpec } from './SubscriptionRegionNetworkingSpec.js';
/**
 * Required. Cloud networking details, per region (single region or multiple regions for Active-Active cluster only)
 */
export type SubscriptionRegionSpec = {
    /**
     * Required. Deployment region as defined by cloud provider
     */
    region: string;
    /**
     * Optional. Support deployment on multiple availability zones within the selected region. Default: 'false'
     */
    multipleAvailabilityZones?: boolean;
    /**
     * Optional. Availability zones deployment preferences (for the selected provider & region). If ‘multipleAvailabilityZones’ is set to 'true', you must specify three availability zones. In AWS Redis internal cloud account, set the zone IDs (for example: ["use-az2", "use-az3", "use-az5"]).
     */
    preferredAvailabilityZones?: Array<string>;
    networking?: SubscriptionRegionNetworkingSpec;
};

