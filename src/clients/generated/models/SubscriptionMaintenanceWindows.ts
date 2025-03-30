/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MaintenanceWindow } from './MaintenanceWindow.js';
import type { MaintenanceWindowSkipStatus } from './MaintenanceWindowSkipStatus.js';
export type SubscriptionMaintenanceWindows = {
    mode?: SubscriptionMaintenanceWindows.mode;
    timeZone?: string;
    windows?: Array<MaintenanceWindow>;
    skipStatus?: MaintenanceWindowSkipStatus;
};
export namespace SubscriptionMaintenanceWindows {
    export enum mode {
        MANUAL = 'manual',
        AUTOMATIC = 'automatic',
    }
}

