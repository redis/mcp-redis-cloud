/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CrdbRegionSpec } from './CrdbRegionSpec.js';
/**
 * Active active region creation request message
 */
export type ActiveActiveRegionCreateRequest = {
    readonly subscriptionId?: number;
    /**
     * Name of region to add as defined by cloud provider
     */
    region?: string;
    /**
     * Deployment CIDR mask.
     * Default: 192.168.0.0/24
     */
    deploymentCIDR: string;
    /**
     * Optional. When 'false': Creates a deployment plan and deploys it (creating any resources required by the plan). When 'true': creates a read-only deployment plan without any resource creation. Default: 'false'
     */
    dryRun?: boolean;
    /**
     * List of databases with local throughput for the new region
     */
    databases?: Array<CrdbRegionSpec>;
    /**
     * Deprecated - Optional. RESP version must be compatible with Redis version.
     * @deprecated
     */
    respVersion?: ActiveActiveRegionCreateRequest.respVersion;
    readonly commandType?: string;
};
export namespace ActiveActiveRegionCreateRequest {
    /**
     * Deprecated - Optional. RESP version must be compatible with Redis version.
     */
    export enum respVersion {
        RESP2 = 'resp2',
        RESP3 = 'resp3',
    }
}

