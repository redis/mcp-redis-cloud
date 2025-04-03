#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";

import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { log } from "./utils/helpers.js";
import { version } from "./utils/version.js";
import { ACCOUNT_HANDLERS, ACCOUNT_TOOLS } from "./tools/account/index.js";
import {
  SUBSCRIPTIONS_ESSENTIALS_HANDLERS,
  SUBSCRIPTIONS_ESSENTIALS_TOOLS,
} from "./tools/subscriptions/essentials/index.js";
import { TASKS_HANDLERS, TASKS_TOOLS } from "./tools/tasks/index.js";
import {
  SUBSCRIPTIONS_PRO_HANDLERS,
  SUBSCRIPTIONS_PRO_TOOLS,
} from "./tools/subscriptions/pro/index.js";
import {
  DATABASES_PRO_HANDLERS,
  DATABASES_PRO_TOOLS,
} from "./tools/databases/pro/index.js";

process.on("uncaughtException", (error) => {
  log("Uncaught exception:", error);
  process.exit(1);
});

process.on("unhandledRejection", (error) => {
  log("Unhandled rejection:", error);
  process.exit(1);
});

const ALL_TOOLS = [
  ...ACCOUNT_TOOLS,
  ...SUBSCRIPTIONS_PRO_TOOLS,
  ...SUBSCRIPTIONS_ESSENTIALS_TOOLS,
  ...TASKS_TOOLS,
  ...DATABASES_PRO_TOOLS,
];

const ALL_HANDLERS = {
  ...ACCOUNT_HANDLERS,
  ...SUBSCRIPTIONS_ESSENTIALS_HANDLERS,
  ...SUBSCRIPTIONS_PRO_HANDLERS,
  ...TASKS_HANDLERS,
  ...DATABASES_PRO_HANDLERS,
};

const server = new Server(
  { name: "mcp-redis-cloud", version },
  { capabilities: { tools: {} } },
);

server.setRequestHandler(ListToolsRequestSchema, async () => {
  log("Received list tools request");
  return { tools: ALL_TOOLS };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const toolName = request.params.name;
  log("Received tool call:", toolName);

  try {
    const handler = ALL_HANDLERS[toolName];
    if (!handler) {
      throw new Error(`Unknown tool: ${toolName}`);
    }
    return await handler(request);
  } catch (error) {
    log("Error handling tool call:", error);
    return {
      content: [
        {
          type: "text",
          text: `Error: ${error instanceof Error ? error.message : String(error)}`,
        },
      ],
      isError: true,
    };
  }
});

export async function main() {
  log("Starting server...");

  try {
    const transport = new StdioServerTransport();
    log("Created transport");
    await server.connect(transport);
    log("Server connected and running");
  } catch (error) {
    log("Fatal error:", error);
    process.exit(1);
  }
}

await main();
