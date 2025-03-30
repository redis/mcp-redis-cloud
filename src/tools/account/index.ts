import { Tool } from "@modelcontextprotocol/sdk/types.js";
import { ToolHandlers } from "../../utils/types.js";
import { AccountService } from "../../clients/generated/index.js";
import { emptySchema } from "../../utils/common/schemas.js";
import {
  createToolResponse,
  executeApiCall,
} from "../../utils/common/utils.js";

const GET_CURRENT_ACCOUNT_TOOL: Tool = {
  name: "get-current-account",
  description: "Get the current Cloud Redis account",
  inputSchema: emptySchema,
};

const GET_CURRENT_PAYMENT_METHODS_TOOL: Tool = {
  name: "get-current-payment-methods",
  description:
    "Get the current payment methods for the current Cloud Redis account",
  inputSchema: emptySchema,
};

const GET_DATABASE_MODULES: Tool = {
  name: "get-database-modules",
  description:
    "Lookup list of database modules supported in current account (support may differ based on subscription and database settings). These modules are also called capabilities.",
  inputSchema: emptySchema,
};

const GET_PRO_PLANS_REGIONS: Tool = {
  name: "get-pro-plans-regions",
  description:
    "Lookup list of regions for cloud provider. These regions include the providers too.",
  inputSchema: emptySchema,
};

export const ACCOUNT_TOOLS = [
  GET_CURRENT_ACCOUNT_TOOL,
  GET_CURRENT_PAYMENT_METHODS_TOOL,
  GET_DATABASE_MODULES,
  GET_PRO_PLANS_REGIONS,
];

export const ACCOUNT_HANDLERS: ToolHandlers = {
  "get-current-account": async () => {
    const account = await executeApiCall(
      () => AccountService.getCurrentAccount(),
      "Get current account",
    );
    return createToolResponse(account);
  },

  "get-current-payment-methods": async () => {
    const paymentMethods = await executeApiCall(
      () => AccountService.getAccountPaymentMethods(),
      "Get current payment methods",
    );
    return createToolResponse(paymentMethods);
  },

  "get-database-modules": async () => {
    const modules = await executeApiCall(
      () => AccountService.getSupportedDatabaseModules(),
      "Get database modules",
    );
    return createToolResponse(modules);
  },

  "get-pro-plans-regions": async () => {
    const regions = await executeApiCall(
      () => AccountService.getSupportedRegions(),
      "Get pro plans regions",
    );
    return createToolResponse(regions);
  },
};
