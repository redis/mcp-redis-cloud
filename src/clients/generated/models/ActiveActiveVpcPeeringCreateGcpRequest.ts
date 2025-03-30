/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * VPC peering creation request message
 */
export type ActiveActiveVpcPeeringCreateGcpRequest = {
    provider?: string;
    readonly subscriptionId?: number;
    /**
     * Name of region to create a VPC peering from
     */
    sourceRegion?: string;
    /**
     * VPC project uid
     */
    vpcProjectUid: string;
    /**
     * VPC network name
     */
    vpcNetworkName: string;
    readonly commandType?: string;
};

