/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MaintenanceWindowSpec } from './MaintenanceWindowSpec.js';
export type SubscriptionMaintenanceWindowsSpec = {
    /**
     * Required. Maintenance window mode: either 'manual' or 'automatic'. Must provide windows property if manual. Default: 'automatic'
     */
    mode: SubscriptionMaintenanceWindowsSpec.mode;
    /**
     * Maintenance window specifications if mode is set to 'manual'. Up to 7 windows can be provided.
     */
    windows?: Array<MaintenanceWindowSpec>;
};
export namespace SubscriptionMaintenanceWindowsSpec {
    /**
     * Required. Maintenance window mode: either 'manual' or 'automatic'. Must provide windows property if manual. Default: 'automatic'
     */
    export enum mode {
        MANUAL = 'manual',
        AUTOMATIC = 'automatic',
    }
}

