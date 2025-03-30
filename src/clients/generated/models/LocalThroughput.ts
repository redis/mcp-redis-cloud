/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Local throughput for the regional instance of an Active-Active database
 */
export type LocalThroughput = {
    region?: string;
    /**
     * Default: 1000 ops/sec
     */
    writeOperationsPerSecond?: number;
    /**
     * Default: 1000 ops/sec
     */
    readOperationsPerSecond?: number;
};

