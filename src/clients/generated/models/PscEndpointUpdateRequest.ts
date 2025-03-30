/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Private Service Connect endpoint update request
 */
export type PscEndpointUpdateRequest = {
    readonly subscriptionId: number;
    readonly pscServiceId: number;
    readonly endpointId: number;
    /**
     * The google cloud project ID
     */
    gcpProjectId?: string;
    /**
     * Name of the VPC that hosts your application
     */
    gcpVpcName?: string;
    /**
     * Name of your VPC's subnet of IP address ranges
     */
    gcpVpcSubnetName?: string;
    /**
     * Prefix used to update PSC endpoints in the consumer application VPC, so endpoint names appear in Google Cloud as endpoint name prefix + endpoint number
     */
    endpointConnectionName?: string;
    /**
     * The action to perform on the endpoint
     */
    action?: PscEndpointUpdateRequest.action;
    readonly commandType?: string;
};
export namespace PscEndpointUpdateRequest {
    /**
     * The action to perform on the endpoint
     */
    export enum action {
        ACCEPT = 'accept',
        REJECT = 'reject',
    }
}

