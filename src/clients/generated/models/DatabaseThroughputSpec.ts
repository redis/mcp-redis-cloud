/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Optional. Throughput measurement method. Default: 25000 ops/sec
 */
export type DatabaseThroughputSpec = {
    /**
     * Required. Throughput measurement method. Either 'number-of-shards' or 'operations-per-second'
     */
    by: DatabaseThroughputSpec.by;
    /**
     * Required. Throughput value (as applies to selected measurement method)
     */
    value: number;
};
export namespace DatabaseThroughputSpec {
    /**
     * Required. Throughput measurement method. Either 'number-of-shards' or 'operations-per-second'
     */
    export enum by {
        OPERATIONS_PER_SECOND = 'operations-per-second',
        NUMBER_OF_SHARDS = 'number-of-shards',
    }
}

