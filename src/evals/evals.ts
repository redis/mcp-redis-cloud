//evals.ts

import { EvalConfig } from 'mcp-evals';
import { openai } from "@ai-sdk/openai";
import { grade, EvalFunction } from "mcp-evals";

const getProDatabasesEval: EvalFunction = {
    name: "get-pro-databases Evaluation",
    description: "Evaluates the get-pro-databases tool by testing database retrieval for a given subscription",
    run: async () => {
        const result = await grade(openai("gpt-4"), "Please retrieve the pro databases for subscription ID 123, skipping the first 5 items and limiting to 2 results. Provide details about these databases.");
        return JSON.parse(result);
    }
};

const createProDatabaseEval: EvalFunction = {
    name: "create-pro-database Evaluation",
    description: "Evaluates the create-pro-database functionality",
    run: async () => {
        const result = await grade(openai("gpt-4"), "Please create a new pro database for subscription ID 1234 named 'my-db-1' using the default protocol. Enable TLS and do not run in dry mode. Return the TASK ID for tracking the creation status.");
        return JSON.parse(result);
    }
};

const getEssentialDatabasesEval: EvalFunction = {
    name: "Get Essential Databases Tool Evaluation",
    description: "Evaluates the get-essential-databases tool functionality",
    run: async () => {
        const result = await grade(openai("gpt-4"), "How can I retrieve the essential databases for subscription ID 123, skipping the first 2 items, and limiting the results to 5?");
        return JSON.parse(result);
    }
};

const createEssentialDatabaseEval: EvalFunction = {
  name: "create-essential-database Evaluation",
  description: "Evaluates the create-essential-database tool functionality",
  run: async () => {
    const result = await grade(openai("gpt-4"), "Please create a free essential database in subscription ID 123456 with the name my-db.");
    return JSON.parse(result);
  }
};

const getTasksToolEvaluation: EvalFunction = {
    name: "get-tasks Tool Evaluation",
    description: "Evaluates the functionality of retrieving current tasks from Cloud Redis",
    run: async () => {
        const result = await grade(openai("gpt-4"), "List the current tasks stored in this Cloud Redis account.");
        return JSON.parse(result);
    }
};

const config: EvalConfig = {
    model: openai("gpt-4"),
    evals: [getProDatabasesEval, createProDatabaseEval, getEssentialDatabasesEval, createEssentialDatabaseEval, getTasksToolEvaluation]
};
  
export default config;
  
export const evals = [getProDatabasesEval, createProDatabaseEval, getEssentialDatabasesEval, createEssentialDatabaseEval, getTasksToolEvaluation];