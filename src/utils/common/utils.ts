import { z } from "zod";
import { ToolResponse, ToolRequest } from "./schemas.js";
import { log } from "./logging.js";
import { ToolError } from "./api-errors.js";

export function createToolResponse(
  data: unknown,
  isError = false,
): ToolResponse {
  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(data),
      },
    ],
    isError,
    _meta: {},
  };
}

export function handleToolError(error: unknown, context: string): never {
  const errorMessage = error instanceof Error ? error.message : String(error);
  log.error(`${context} failed`, { error: errorMessage });

  if (error instanceof z.ZodError) {
    throw new ToolError(`Invalid input: ${context}`, error.format());
  }

  throw new ToolError(`${context} failed: ${errorMessage}`);
}

export function validateToolInput<T>(
  schema: z.ZodSchema<T>,
  data: unknown,
  context: string,
): T {
  try {
    return schema.parse(data);
  } catch (error) {
    handleToolError(error, `Input validation for ${context}`);
  }
}

export async function executeApiCall<T>(
  apiCall: () => Promise<T>,
  context: string,
): Promise<T> {
  try {
    return await apiCall();
  } catch (error) {
    handleToolError(error, context);
  }
}

export function extractArguments<T extends Record<string, unknown>>(
  request: ToolRequest,
): T {
  return (request.params.arguments || {}) as T;
}
