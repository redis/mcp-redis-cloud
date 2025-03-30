/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountUserOptions } from './AccountUserOptions.js';
/**
 * RedisLabs User information
 */
export type AccountUser = {
    id?: number;
    name?: string;
    email?: string;
    role?: string;
    signUp?: string;
    userType?: string;
    hasApiKey?: boolean;
    options?: AccountUserOptions;
};

