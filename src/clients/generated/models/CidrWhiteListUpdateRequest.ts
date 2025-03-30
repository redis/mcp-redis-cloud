/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Update subscription
 */
export type CidrWhiteListUpdateRequest = {
    readonly subscriptionId?: number;
    /**
     * CIDR values in an array format (example: ['10.1.1.0/32'])
     */
    cidrIps?: Array<string>;
    /**
     * AWS Security group identifier
     */
    securityGroupIds?: Array<string>;
    readonly commandType?: string;
};

