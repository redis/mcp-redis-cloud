/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Cidr } from './Cidr.js';
/**
 * Transit Gateway update attachment cidr/s request message
 */
export type TgwUpdateCidrsRequest = {
    /**
     * Optional. List of attachment CIDRs
     */
    cidrs?: Array<Cidr>;
    readonly commandType?: string;
};

