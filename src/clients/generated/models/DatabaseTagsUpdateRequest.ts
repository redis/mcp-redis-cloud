/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { tag } from './tag.js';
/**
 * Database tags update request message
 */
export type DatabaseTagsUpdateRequest = {
    readonly subscriptionId?: number;
    readonly databaseId?: number;
    /**
     * Required. database tags
     */
    tags: Array<tag>;
    readonly commandType?: string;
};

