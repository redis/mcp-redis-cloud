/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DatabaseSyncSourceSpec } from './DatabaseSyncSourceSpec.js';
/**
 * Optional. Replica Of configuration
 */
export type ReplicaOfSpec = {
    /**
     * Optional. This database will be a replica of the specified Redis databases provided as a list of one or more DatabaseSyncSourceSpec objects.
     */
    syncSources: Array<DatabaseSyncSourceSpec>;
};

