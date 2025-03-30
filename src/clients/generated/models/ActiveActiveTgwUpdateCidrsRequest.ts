/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Cidr } from './Cidr.js';
/**
 * Active active Transit Gateway update attachment cidr/s request message
 */
export type ActiveActiveTgwUpdateCidrsRequest = {
    /**
     * Optional. List of attachment CIDRs
     */
    cidrs?: Array<Cidr>;
    readonly commandType?: string;
};

