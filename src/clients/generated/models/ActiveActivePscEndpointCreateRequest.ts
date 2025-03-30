/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Private Service Connect endpoint create request
 */
export type ActiveActivePscEndpointCreateRequest = {
    readonly subscriptionId: number;
    readonly pscServiceId: number;
    /**
     * Deployment region id as defined by cloud provider
     */
    readonly regionId: number;
    /**
     * The google cloud project ID
     */
    gcpProjectId: string;
    /**
     * Name of the VPC that hosts your application
     */
    gcpVpcName: string;
    /**
     * Name of your VPC's subnet of IP address ranges
     */
    gcpVpcSubnetName: string;
    /**
     * Prefix used to create PSC endpoints in the consumer application VPC, so endpoint names appear in Google Cloud as endpoint name prefix + endpoint number
     */
    endpointConnectionName: string;
    readonly commandType?: string;
};

