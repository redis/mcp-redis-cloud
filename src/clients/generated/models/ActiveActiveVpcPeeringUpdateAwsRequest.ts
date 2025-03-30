/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Active-Active VPC peering update request message
 */
export type ActiveActiveVpcPeeringUpdateAwsRequest = {
    readonly subscriptionId?: number;
    /**
     * VPC Peering id to update
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

