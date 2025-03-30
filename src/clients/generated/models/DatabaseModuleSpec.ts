/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Optional. Redis modules to be provisioned in the database
 */
export type DatabaseModuleSpec = {
    /**
     * Required. Redis module Id
     */
    name: string;
    /**
     * Optional. Redis database module parameters (name and value), as relevant to the specific module (see modules parameters specification)
     */
    parameters?: Record<string, Record<string, any>>;
};

