/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Maintenance window specifications if mode is set to 'manual'. Up to 7 windows can be provided.
 */
export type MaintenanceWindowSpec = {
    /**
     * Required. Hour of the day that is the start of the maintenance window. Valid input is in range 0-23.
     */
    startHour: number;
    /**
     * Required. The duration for which the maintenance window lasts in hours. Valid input is in range 4-24 (or 8-24 if using flash memory).
     */
    durationInHours: number;
    /**
     * Required. The days for which the maintenance window applies. Valid input is array containing: "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday".
     */
    days: Array<string>;
};

