/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProcessorResponse } from './ProcessorResponse.js';
export type TaskStateUpdate = {
    taskId?: string;
    commandType?: string;
    status?: TaskStateUpdate.status;
    description?: string;
    timestamp?: string;
    response?: ProcessorResponse;
    links?: Array<Record<string, Record<string, any>>>;
};
export namespace TaskStateUpdate {
    export enum status {
        INITIALIZED = 'initialized',
        RECEIVED = 'received',
        PROCESSING_IN_PROGRESS = 'processing-in-progress',
        PROCESSING_COMPLETED = 'processing-completed',
        PROCESSING_ERROR = 'processing-error',
    }
}

