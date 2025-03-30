/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VpcPeeringCreateAwsRequest } from './VpcPeeringCreateAwsRequest.js';
import type { VpcPeeringCreateGcpRequest } from './VpcPeeringCreateGcpRequest.js';
/**
 * Vpc peering creation request message
 */
export type VpcPeeringCreateBaseRequest = (VpcPeeringCreateAwsRequest | VpcPeeringCreateGcpRequest | {
    provider?: string;
    readonly commandType?: string;
});

