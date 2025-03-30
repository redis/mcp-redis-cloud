import { z } from "zod";
import { CallToolRequestSchema } from "@modelcontextprotocol/sdk/types.js";

export const emptySchema = {
  type: "object",
  properties: {},
} as const;

export interface ToolResponse {
  content: Array<{ type: string; text: string }>;
  isError?: boolean;
  _meta?: Record<string, unknown>;
  [key: string]: unknown;
}

export const commonSchemas = {
  subscriptionId: z.number().min(1, "subscriptionId must be greater than 0"),
  taskId: z.string().min(1, "taskId cannot be empty"),
  paymentMethod: z.enum(["credit-card", "marketplace"]).default("credit-card"),
  provider: z.enum(["AWS", "GCP", "AZURE"]),
  region: z.string().min(1, "region cannot be empty"),
  name: z.string().min(1, "name cannot be empty"),
} as const;

export type ToolRequest = z.infer<typeof CallToolRequestSchema>;
