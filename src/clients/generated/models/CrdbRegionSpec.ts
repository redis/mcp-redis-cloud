/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LocalThroughput } from './LocalThroughput.js';
/**
 * List of databases with local throughput for the new region
 */
export type CrdbRegionSpec = {
    /**
     * Name of database
     */
    name?: string;
    localThroughputMeasurement?: LocalThroughput;
};

