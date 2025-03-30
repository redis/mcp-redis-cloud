/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TasksStateUpdate } from '../models/TasksStateUpdate.js';
import type { TaskStateUpdate } from '../models/TaskStateUpdate.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import { OpenAPI } from '../core/OpenAPI.js';
import { request as __request } from '../core/request.js';
export class TasksService {
    /**
     * Get tasks
     * Currently active long running operations
     * @returns TasksStateUpdate OK
     * @throws ApiError
     */
    public static getAllTasks(): CancelablePromise<TasksStateUpdate> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tasks',
            errors: {
                400: `Bad Request - The server cannot process the request due to something that is perceived to be a client error`,
                401: `Unauthorized - Authentication failed for requested resource`,
                403: `Forbidden - Not allowed to access requested resource (primarily due to client source IP API Key restrictions)`,
                404: `Not Found - The resource you were trying to reach was not found or does not exist`,
                412: `Precondition Failed - Feature flag for this flow is off`,
                429: `Too Many Requests - Too many resources are concurrently created / updated / deleted in the account. Please re-submit API requests after resource changes are completed)`,
                500: `Internal system error - If this error persists, please contact customer support`,
                503: `Service Unavailable - Server is temporarily unable to handle the request, please try again later. If this error persists, please contact customer support `,
            },
        });
    }
    /**
     * Get task by id
     * Get specific long running operation, identified by Task Id
     * @param taskId Task Id
     * @returns TaskStateUpdate OK
     * @throws ApiError
     */
    public static getTaskById(
        taskId: string,
    ): CancelablePromise<TaskStateUpdate> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tasks/{taskId}',
            path: {
                'taskId': taskId,
            },
            errors: {
                400: `Bad Request - The server cannot process the request due to something that is perceived to be a client error`,
                401: `Unauthorized - Authentication failed for requested resource`,
                403: `Forbidden - Not allowed to access requested resource (primarily due to client source IP API Key restrictions)`,
                404: `Not Found - The resource you were trying to reach was not found or does not exist`,
                412: `Precondition Failed - Feature flag for this flow is off`,
                429: `Too Many Requests - Too many resources are concurrently created / updated / deleted in the account. Please re-submit API requests after resource changes are completed)`,
                500: `Internal system error - If this error persists, please contact customer support`,
                503: `Service Unavailable - Server is temporarily unable to handle the request, please try again later. If this error persists, please contact customer support `,
            },
        });
    }
}
