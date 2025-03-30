/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Optional. Cloud networking details, per region (single region or multiple regions for Active-Active cluster only). Default: if using Redis internal cloud account, 192.168.0.0/24
 */
export type SubscriptionRegionNetworkingSpec = {
    /**
     * Optional. Deployment CIDR mask.
     * Default: If using Redis internal cloud account, 192.168.0.0/24
     */
    deploymentCIDR: string;
    /**
     * Optional. Either an existing VPC Id (already exists in the specific region) or create a new VPC (if no VPC is specified). VPC Identifier must be in a valid format (for example: 'vpc-0125be68a4625884ad') and existing within the hosting account
     */
    vpcId?: string;
};

