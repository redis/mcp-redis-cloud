export const LogLevel = {
  ERROR: "error",
  WARN: "warn",
  INFO: "info",
  DEBUG: "debug",
} as const;

type LogLevel = (typeof LogLevel)[keyof typeof LogLevel];
type LogMeta = Record<string, unknown>;

interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  meta?: LogMeta;
}

const stringify = (obj: unknown) =>
  JSON.stringify(obj, null, process.env.NODE_ENV === "development" ? 2 : 0);

// Helper to create log entries
function createLogEntry(
  level: LogLevel,
  message: string,
  meta?: LogMeta,
): LogEntry {
  return {
    timestamp: new Date().toISOString(),
    level,
    message,
    ...(meta && { meta }),
  };
}

export const log = {
  error: (message: string, meta?: LogMeta) => {
    console.error(stringify(createLogEntry(LogLevel.ERROR, message, meta)));
  },
  warn: (message: string, meta?: LogMeta) => {
    console.warn(stringify(createLogEntry(LogLevel.WARN, message, meta)));
  },
  info: (message: string, meta?: LogMeta) => {
    console.log(stringify(createLogEntry(LogLevel.INFO, message, meta)));
  },
  debug: (message: string, meta?: LogMeta) => {
    if (process.env.NODE_ENV === "development") {
      console.debug(stringify(createLogEntry(LogLevel.DEBUG, message, meta)));
    }
  },
};
