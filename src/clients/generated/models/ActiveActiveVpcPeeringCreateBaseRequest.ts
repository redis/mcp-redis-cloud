/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActiveActiveVpcPeeringCreateAwsRequest } from './ActiveActiveVpcPeeringCreateAwsRequest.js';
import type { ActiveActiveVpcPeeringCreateGcpRequest } from './ActiveActiveVpcPeeringCreateGcpRequest.js';
/**
 * Active-Active VPC peering creation request message
 */
export type ActiveActiveVpcPeeringCreateBaseRequest = (ActiveActiveVpcPeeringCreateAwsRequest | ActiveActiveVpcPeeringCreateGcpRequest | {
    provider?: string;
    readonly subscriptionId?: number;
    /**
     * Name of region to create a VPC peering from
     */
    sourceRegion?: string;
    readonly commandType?: string;
});

