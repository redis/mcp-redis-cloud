/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Vpc peering creation request message
 */
export type VpcPeeringCreateGcpRequest = {
    provider?: string;
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

