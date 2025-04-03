import { Tool } from "@modelcontextprotocol/sdk/types.js";
import { ToolHandlers } from "../../../utils/types.js";
import { z } from "zod";
import {
  FixedSubscriptionCreateRequest,
  SubscriptionsEssentialsService,
} from "../../../clients/generated/index.js";
import { commonSchemas } from "../../../utils/common/schemas.js";
import {
  createToolResponse,
  executeApiCall,
  extractArguments,
  validateToolInput,
} from "../../../utils/common/utils.js";
import {
  createPage,
  DEFAULT_PAGE_SIZE,
  Pageable,
} from "../../../utils/common/pagination.js";

// Schema definitions
const subscriptionIdSchema = commonSchemas.subscriptionId;

const createSubscriptionSchema = z.object({
  name: commonSchemas.name,
  planId: z.number().min(1, "planId must be greater than 0"),
  paymentMethod: commonSchemas.paymentMethod,
  paymentMethodId: z.number().optional(),
});

const getPlansSchema = z.object({
  provider: commonSchemas.provider,
  redisFlex: z.boolean().default(false),
  page: commonSchemas.page,
  size: commonSchemas.size,
});

const getSubscriptionsSchema = z.object({
  page: commonSchemas.page,
  size: commonSchemas.size,
});

// Tool definitions
const GET_ESSENTIAL_SUBSCRIPTIONS_TOOL: Tool = {
  name: "get-essential-subscriptions",
  description:
    "Get the essential subscriptions for the current Cloud Redis account. " +
    "A paginated response is returned, and to get all the essential subscriptions, the page and size parameters must be used until all the essential subscriptions are retrieved.",
  inputSchema: {
    type: "object",
    properties: {
      page: {
        type: "number",
        description: "Page number",
        default: 0,
      },
      size: {
        type: "number",
        description: "Page size",
        default: DEFAULT_PAGE_SIZE,
      },
    },
    required: [],
  },
};

const GET_ESSENTIAL_SUBSCRIPTION_BY_ID_TOOL: Tool = {
  name: "get-essential-subscription-by-id",
  description:
    "Get an essential subscription by ID for the current Cloud Redis account",
  inputSchema: {
    type: "object",
    properties: {
      subscriptionId: {
        type: "number",
        description: "Subscription ID",
        min: 1,
      },
    },
    required: ["subscriptionId"],
  },
};

const CREATE_ESSENTIAL_SUBSCRIPTION_TOOL: Tool = {
  name: "create-essential-subscription",
  description:
    "Create a new essential subscription. Returns a TASK ID that can be used to track the status of the subscription creation",
  inputSchema: {
    type: "object",
    properties: {
      name: {
        type: "string",
        description: "Subscription name",
      },
      planId: {
        type: "number",
        description: "Plan ID. The plan ID can be taken from /fixed/plans",
      },
      paymentMethod: {
        type: "string",
        description: "Payment method",
        enum: ["credit-card", "marketplace"],
        default: "credit-card",
      },
      paymentMethodId: {
        type: "number",
        description: "Payment method ID",
      },
    },
    required: ["name", "planId"],
  },
};

const DELETE_ESSENTIAL_SUBSCRIPTION_TOOL: Tool = {
  name: "delete-essential-subscription",
  description: "Delete an essential subscription by ID",
  inputSchema: {
    type: "object",
    properties: {
      subscriptionId: {
        type: "number",
        description: "Subscription ID",
        min: 1,
      },
    },
    required: ["subscriptionId"],
  },
};

const GET_ESSENTIALS_PLANS_TOOL: Tool = {
  name: "get-essentials-plans",
  description:
    "Get the available plans for essential subscriptions. Always ask for which provider the plans are want to be retrieved. " +
    "A paginated response is returned, and to get all the plans, the page and size parameters must be used until all the plans are retrieved.",
  inputSchema: {
    type: "object",
    properties: {
      provider: {
        type: "string",
        description: "Provider name.",
        enum: ["AWS", "GCP", "AZURE"],
      },
      redisFlex: {
        type: "boolean",
        description: "Redis Flex",
        default: false,
      },
      page: {
        type: "number",
        description: "Page number",
        default: 0,
      },
      size: {
        type: "number",
        description: "Page size",
        default: DEFAULT_PAGE_SIZE,
      },
    },
    required: ["provider"],
  },
};

export const SUBSCRIPTIONS_ESSENTIALS_TOOLS = [
  GET_ESSENTIAL_SUBSCRIPTIONS_TOOL,
  GET_ESSENTIAL_SUBSCRIPTION_BY_ID_TOOL,
  CREATE_ESSENTIAL_SUBSCRIPTION_TOOL,
  DELETE_ESSENTIAL_SUBSCRIPTION_TOOL,
  GET_ESSENTIALS_PLANS_TOOL,
];

export const SUBSCRIPTIONS_ESSENTIALS_HANDLERS: ToolHandlers = {
  "get-essential-subscriptions": async (request) => {
    const { page = 0, size = DEFAULT_PAGE_SIZE } = extractArguments<{
      page?: number;
      size?: number;
    }>(request);

    // Validate input
    validateToolInput(
      getSubscriptionsSchema,
      { page, size },
      "Essential subscriptions request",
    );

    const response = await executeApiCall(
      () => SubscriptionsEssentialsService.getAllSubscriptions1(),
      "Get essential subscriptions",
    );

    const allSubscriptions = response.subscriptions || [];

    // Calculate pagination
    const startIndex = page * size;
    const endIndex = startIndex + size;
    const paginatedSubscriptions = allSubscriptions.slice(startIndex, endIndex);

    const pageable: Pageable = {
      page,
      size,
    };

    return createToolResponse(
      createPage(paginatedSubscriptions, pageable, allSubscriptions.length),
    );
  },

  "get-essential-subscription-by-id": async (request) => {
    const { subscriptionId } = extractArguments<{ subscriptionId: number }>(
      request,
    );

    // Validate input
    validateToolInput(
      subscriptionIdSchema,
      { subscriptionId },
      "Essential subscription ID",
    );

    const subscription = await executeApiCall(
      () => SubscriptionsEssentialsService.getSubscriptionById1(subscriptionId),
      `Get essential subscription ${subscriptionId}`,
    );
    return createToolResponse(subscription);
  },

  "delete-essential-subscription": async (request) => {
    const { subscriptionId } = extractArguments<{ subscriptionId: number }>(
      request,
    );

    // Validate input
    validateToolInput(
      subscriptionIdSchema,
      { subscriptionId },
      "Essential subscription ID",
    );

    const result = await executeApiCall(
      () =>
        SubscriptionsEssentialsService.deleteSubscriptionById1(subscriptionId),
      `Delete essential subscription ${subscriptionId}`,
    );
    return createToolResponse(result);
  },

  "get-essentials-plans": async (request) => {
    const {
      provider,
      redisFlex,
      page = 0,
      size = DEFAULT_PAGE_SIZE,
    } = extractArguments<{
      provider: "AWS" | "GCP" | "AZURE";
      redisFlex: boolean;
      page?: number;
      size?: number;
    }>(request);

    // Validate input
    validateToolInput(
      getPlansSchema,
      { provider, redisFlex, page, size },
      "Essential plans request",
    );

    const response = await executeApiCall(
      () =>
        SubscriptionsEssentialsService.getAllFixedSubscriptionsPlans(
          provider,
          redisFlex,
        ),
      `Get essential plans for ${provider}`,
    );

    const allPlans = response.plans.map((plan) => ({
      id: plan.id,
      name: plan.name,
      size: plan.size,
      sizeMeasurementUnit: plan.sizeMeasurementUnit,
      regionId: plan.regionId,
      price: plan.price,
      priceCurrency: plan.priceCurrency,
      pricePeriod: plan.pricePeriod,
    }));

    // Calculate pagination
    const startIndex = page * size;
    const endIndex = startIndex + size;
    const paginatedPlans = allPlans.slice(startIndex, endIndex);

    const pageable: Pageable = {
      page,
      size,
    };

    return createToolResponse(
      createPage(paginatedPlans, pageable, allPlans.length),
    );
  },

  "create-essential-subscription": async (request) => {
    const { name, planId, paymentMethod, paymentMethodId } = extractArguments<{
      name: string;
      planId: number;
      paymentMethod?: FixedSubscriptionCreateRequest["paymentMethod"];
      paymentMethodId?: number;
    }>(request);

    // Validate input
    validateToolInput(
      createSubscriptionSchema,
      { name, planId, paymentMethod, paymentMethodId },
      "Create essential subscription",
    );

    // If paymentMethod is credit-card, paymentMethodId is required
    if (paymentMethod === "credit-card" && !paymentMethodId) {
      throw new Error(
        "paymentMethodId is required when paymentMethod is credit-card",
      );
    }

    const reqBody: FixedSubscriptionCreateRequest = {
      name,
      planId,
      ...(paymentMethod && { paymentMethod }),
      ...(paymentMethodId && { paymentMethodId }),
    };

    const result = await executeApiCall(
      () => SubscriptionsEssentialsService.createSubscription1(reqBody),
      "Create essential subscription",
    );
    return createToolResponse(result);
  },
};
