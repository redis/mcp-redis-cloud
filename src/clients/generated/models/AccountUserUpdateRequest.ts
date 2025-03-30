/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * User update request
 */
export type AccountUserUpdateRequest = {
    readonly userId?: number;
    /**
     * User name
     */
    name: string;
    /**
     * Role name
     */
    role?: AccountUserUpdateRequest.role;
    readonly commandType?: string;
};
export namespace AccountUserUpdateRequest {
    /**
     * Role name
     */
    export enum role {
        OWNER = 'Owner',
        MEMBER = 'Member',
        VIEWER = 'Viewer',
        LOGS_VIEWER_API_USE_ONLY_ = 'Logs Viewer (API use only)',
        MANAGER = 'Manager',
        BILLING_ADMIN = 'Billing Admin',
    }
}

