/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Optional. Redis database alerts
 */
export type DatabaseAlertSpec = {
    /**
     * Required. Alert name
     */
    name: DatabaseAlertSpec.name;
    /**
     * Required. Alert value
     */
    value: number;
};
export namespace DatabaseAlertSpec {
    /**
     * Required. Alert name
     */
    export enum name {
        DATASET_SIZE = 'dataset-size',
        DATASETS_SIZE = 'datasets-size',
        THROUGHPUT_HIGHER_THAN = 'throughput-higher-than',
        THROUGHPUT_LOWER_THAN = 'throughput-lower-than',
        LATENCY = 'latency',
        SYNCSOURCE_ERROR = 'syncsource-error',
        SYNCSOURCE_LAG = 'syncsource-lag',
        CONNECTIONS_LIMIT = 'connections-limit',
    }
}

