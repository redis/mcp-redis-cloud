/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActiveActiveRegionToDelete } from './ActiveActiveRegionToDelete.js';
/**
 * Active active region deletion request message
 */
export type ActiveActiveRegionDeleteRequest = {
    readonly subscriptionId?: number;
    /**
     * List of names of regions to delete
     */
    regions?: Array<ActiveActiveRegionToDelete>;
    /**
     * Optional. When 'false': Creates a deployment plan and deploys it (creating any resources required by the plan). When 'true': creates a read-only deployment plan without any resource creation. Default: 'false'
     */
    dryRun?: boolean;
    readonly commandType?: string;
};

