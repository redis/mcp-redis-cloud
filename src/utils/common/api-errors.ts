export const enum ErrorCode {
  TOOL = "TOOL_ERROR",
}

export const enum HttpStatus {
  INTERNAL_SERVER_ERROR = 500,
}

export class BaseError extends Error {
  readonly code: ErrorCode;
  readonly status: HttpStatus;
  readonly details?: unknown;
  readonly timestamp: string;

  constructor(
    message: string,
    code: ErrorCode,
    status: HttpStatus,
    details?: unknown,
  ) {
    super(message);
    this.name = this.constructor.name;
    this.code = code;
    this.status = status;
    this.details = details;
    this.timestamp = new Date().toISOString();

    // Maintains proper stack trace for where error was thrown
    Error.captureStackTrace(this, this.constructor);
  }

  toString(): string {
    return `[${this.code}] ${this.message}`;
  }
}

export class ToolError extends BaseError {
  constructor(message: string, details?: unknown) {
    super(message, ErrorCode.TOOL, HttpStatus.INTERNAL_SERVER_ERROR, details);
  }
}
