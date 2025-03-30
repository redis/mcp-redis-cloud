# mcp-redis-cloud: Redis Cloud API MCP Server


Redis Cloud API Model Context Protocol (MCP) server written in TypeScript.

## Getting Started

### Prerequisites

1. nvm
2. Node v22.14.0
3. npm 10.9.2

### Development

1. Install dependencies:

   ```bash
   nvm use v22.14.0
   npm install
   ```

2. Start the development server with hot reload:

   ```bash
   npm run dev
   ```

3. Build the project:

   ```bash
   npm run build
   ```

4. Run tests:

   ```bash
   npm test
   ```

5. Start the production server:

   ```bash
   npm start
   ```

## Project Structure

```
src/
├── index.ts              # Entry point
├── clients/              # API Clients for external services
│   └── generated         # Generated Redis Cloud API client
└── tools/                # Tool implementations
    └── accounts/         # Account tools
    └── subscriptions/    # Subscription tools
```

## Testing

### Using MCP Inspector

The template includes the MCP Inspector for visual debugging of your tools:

1. Start the inspector:

   ```bash
   npx @modelcontextprotocol/inspector node dist/index.js
   ```

2. Open the inspector UI at http://localhost:5173

The inspector provides:

- Visual interface for testing tools
- Real-time request/response monitoring
- Tool metadata inspection
- Interactive testing environment

### Local Testing with Claude Desktop

To test the MCP server locally with Claude Desktop:

1. Build the package:

   ```bash
   npm run build
   ```

2. Add the server to Claude Desktop:

   - Open Claude Desktop settings
   - Navigate to the Developer tab (make sure you have enabled Developer Mode)
   - Click on "Edit config"
   - Open the `claude_desktop_config.json` file in your text editor
   - Add the following configuration:

   ```json
   {
     "mcpServers": {
       "mcp-redis-cloud": {
         "command": "node",
         "args": ["<absolute_path_to_project_root>/dist/index.js"],
         "env": {
           "API_KEY": "<your_redis_cloud_api_key>",
           "SECRET_KEY": "<your_redis_cloud_api_secret_key>",
           "BASE_URL": "<your_api_base_url>"
         }
       }
     }
   }
   ```

3. Close Claude Desktop and restart it. The server should now be available in the MCP Servers section.

### Local Testing with Cursor IDE

To test the MCP server locally with Cursor IDE:

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
         "args": ["<absolute_path_to_project_root>/dist/index.js"],
         "env": {
           "API_KEY": "<your_redis_cloud_api_key>",
           "SECRET_KEY": "<your_redis_cloud_api_secret_key>",
           "BASE_URL": "<your_api_base_url>"
         }
       }
     }
   }
   ```

3. Restart Cursor. The server should now be available in the MCP Servers section.


Note: If you make changes to your code, remember to rebuild and restart Claude Desktop / Cursor.

```bash
npm run build
```
