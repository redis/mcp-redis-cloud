/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Optional. A list of TLS/SSL certificates (public keys) with new line characters replaced by \n. If specified, mTLS authentication (with enableTls not specified or set to true) will be required to authenticate user connections. If empty list is received, SSL certificates will be removed and mTLS will not be required (note that TLS connection may still apply, depending on the value of the enableTls property). Default: 'null'"
 */
export type DatabaseCertificateSpec = {
    /**
     * Required. Public key certificate (PEM format)
     */
    publicCertificatePEMString: string;
};

