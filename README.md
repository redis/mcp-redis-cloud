# Redis Cloud API MCP Server

[![smithery badge](https://smithery.ai/badge/@redis/mcp-redis-cloud)](https://smithery.ai/server/@redis/mcp-redis-cloud)

Model Context Protocol (MCP) is a standardized protocol for managing context between large language models (LLMs) and external systems. This repository provides an MCP Server for Redis Cloud's API, allowing you to manage your Redis Cloud resources using natural language.

This lets you use Claude Desktop, or any MCP Client, to use natural language to accomplish things on your Redis Cloud account, e.g.:

- "Create a new Redis database in AWS"
- "What are my current subscriptions?"
- "Help me choose the right Redis database for my e-commerce application"

## Features

### Account Management
- `get_current_account`: Get details about your current Redis Cloud account
- `get_current_payment_methods`: List all payment methods configured for your account

### Subscription Management

#### Pro Subscriptions
- `get_pro_subscriptions`: List all Pro subscriptions in your account
- `create_pro_subscription`: Create a new Pro subscription with advanced configuration options
  - Supports multi-cloud deployment
  - Configure memory, persistence, and modules
  - Set up Active-Active deployments
  - Custom networking configuration

#### Essential Subscriptions
- `get_essential_subscriptions`: List all Essential subscriptions (paginated)
- `get_essential_subscription_by_id`: Get detailed information about a specific Essential subscription
- `create_essential_subscription`: Create a new Essential subscription
- `delete_essential_subscription`: Delete an Essential subscription

### Database Capabilities
- `get_database_modules`: List all available database modules (capabilities) supported in your account
  - Redis modules
  - Database features
  - Performance options

### Cloud Provider Management
- `get_pro_plans_regions`: Get available regions across cloud providers
  - AWS regions
  - GCP regions
  - Networking options
  - Availability zones

### Plans and Pricing
- `get_essentials_plans`: List available Essential subscription plans (paginated)
  - Supports AWS, GCP, and Azure
  - Redis Flex options
  - Fixed plans

### Task Management
- `get_tasks`: List all current tasks in your account
- `get_task_by_id`: Get detailed information about a specific task
  - Track deployment status
  - Monitor subscription changes
  - View task progress


## Usage

#### Prerequisites
- Valid Redis Cloud API credentials (API Key and Secret Key)
- Task IDs are returned for long-running operations and can be monitored
- Paginated responses require multiple calls to retrieve all data

### Installing via Smithery

To install Redis Cloud API MCP Server for Claude Desktop automatically via [Smithery](https://smithery.ai/server/@redis/mcp-redis-cloud):

```bash
npx -y @smithery/cli install @redis/mcp-redis-cloud --client claude
```

### Claude Desktop

To run the MCP server with Claude Desktop, follow these steps:

1. Build the package:
   ```bash
   npm run build
   ```

2. Add the server to Claude Desktop:
    - Open Claude Desktop settings
    - Navigate to the Developer tab (make sure you have enabled Developer Mode)
    - Click on "Edit config"
    - Open the `claude_desktop_config.json` file in your text editor and add the following configuration:
   ```json
   {
     "mcpServers": {
       "mcp-redis-cloud": {
         "command": "node",
         "args": ["--experimental-fetch", "<absolute_path_to_project_root>/dist/index.js"],
         "env": {
           "API_KEY": "<redis_cloud_api_key>",
           "SECRET_KEY": "<redis_cloud_api_secret_key>"
         }
       }
     }
   }
   ```

3. Close Claude Desktop and restart it. The server should now be available in the MCP Servers section.

### Cursor IDE

To run the MCP server with Cursor IDE, follow these steps:

1. Build the package:
   ```bash
   npm run build
   ```

2. Add the server to Cursor:
    - Open Cursor Settings
    - Navigate to the MCP tab
    - Click on "Add new global MCP Server"
    - Update the automatically opened `mcp.json` file with the following configuration:
   ```json
   {
     "mcpServers": {
       "mcp-redis-cloud": {
         "command": "node",
         "args": ["--experimental-fetch", "<absolute_path_to_project_root>/dist/index.js"],
         "env": {
           "API_KEY": "<redis_cloud_api_key>",
           "SECRET_KEY": "<redis_cloud_api_secret_key>"
         }
       }
     }
   }
   ```

3. Restart Cursor. The server should now be available in the MCP Servers section.


## Development

### Prerequisites

1. nvm (Node Version Manager)
2. Node v22.14.0
3. npm 10.9.2

### Getting Started

1. Install dependencies:
   ```bash
   nvm use v22.14.0
   npm install
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Test it by using the MCP Inspector:
    ```bash
    npx @modelcontextprotocol/inspector node dist/index.js --api-key=<api_key> --secret-key=<secret_key>
    ```

### Project Structure

```
src/
├── index.ts              # Entry point
├── clients/              # API Clients for external services
│   └── generated         # Generated Redis Cloud API client
└── tools/                # Tool implementations
    └── accounts/         # Account tools
    └── subscriptions/    # Subscription tools
    └── tasks/            # Task tools
```


Note: If you make changes to your code, remember to rebuild and restart Claude Desktop / Cursor:
```bash
npm run build
```

