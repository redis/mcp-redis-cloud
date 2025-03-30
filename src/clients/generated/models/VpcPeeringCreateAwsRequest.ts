/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * VPC peering creation request message
 */
export type VpcPeeringCreateAwsRequest = {
    provider?: string;
    /**
     * Deployment region as defined by cloud provider
     */
    region: string;
    /**
     * AWS Account uid
     */
    awsAccountId: string;
    /**
     * VPC uid
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

