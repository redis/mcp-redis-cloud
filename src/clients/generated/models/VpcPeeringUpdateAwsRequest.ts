/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * VPC peering update request message
 */
export type VpcPeeringUpdateAwsRequest = {
    readonly subscriptionId?: number;
    /**
     * VPC Peering ID to update
     */
    readonly vpcPeeringId?: number;
    /**
     * Optional. VPC CIDR
     */
    vpcCidr?: string;
    /**
     * Optional. List of VPC CIDRs
     */
    vpcCidrs?: Array<string>;
    readonly commandType?: string;
};

