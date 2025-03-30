import { Tool } from "@modelcontextprotocol/sdk/types.js";
import { ToolHandlers } from "../../utils/types.js";
import { TasksService } from "../../clients/generated/index.js";
import {
  emptySchema,
  commonSchemas,
  ToolRequest,
} from "../../utils/common/schemas.js";
import {
  createToolResponse,
  executeApiCall,
  validateToolInput,
  extractArguments,
} from "../../utils/common/utils.js";

const GET_TASKS_TOOL: Tool = {
  name: "get-tasks",
  description: "Get the current tasks for the current Cloud Redis account",
  inputSchema: emptySchema,
};

const GET_TASK_BY_ID_TOOL: Tool = {
  name: "get-task-by-id",
  description: "Get a task by ID for the current Cloud Redis account",
  inputSchema: {
    type: "object",
    properties: {
      taskId: {
        type: "string",
        description: "Task ID",
        minLength: 1,
      },
    },
    required: ["taskId"],
  },
};

export const TASKS_TOOLS = [GET_TASKS_TOOL, GET_TASK_BY_ID_TOOL];

export const TASKS_HANDLERS: ToolHandlers = {
  "get-tasks": async () => {
    const tasks = await executeApiCall(
      () => TasksService.getAllTasks(),
      "Get all tasks",
    );
    return createToolResponse(tasks);
  },

  "get-task-by-id": async (request: ToolRequest) => {
    const { taskId } = extractArguments<{ taskId: string }>(request);

    // Validate input
    validateToolInput(commonSchemas.taskId, taskId, "Task ID");

    const task = await executeApiCall(
      () => TasksService.getTaskById(taskId),
      `Get task ${taskId}`,
    );

    return createToolResponse(task);
  },
};
