/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * VPC peering creation request message
 */
export type ActiveActiveVpcPeeringCreateAwsRequest = {
    provider?: string;
    readonly subscriptionId?: number;
    /**
     * Name of region to create a VPC peering from
     */
    sourceRegion?: string;
    /**
     * Name of region to create a VPC peering to
     */
    destinationRegion: string;
    /**
     * AWS Account uid
     */
    awsAccountId: string;
    /**
     * VPC Id
     */
    vpcId: string;
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

