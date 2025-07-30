# MCP Server NPX Path Fix

## Issue Description
MCP servers that require NPX were not connecting within the IDE environment, despite working correctly from the terminal. The servers would fail to start because the IDE couldn't locate the `npx` command.

## Root Cause
The IDE environment has a different PATH configuration than the user's terminal environment. While `npx` was available in the terminal (located at `/home/vivi/.nvm/versions/node/v22.17.1/bin/npx`), the IDE couldn't find it using just `npx`.

## Solution
Updated the MCP configuration file (`/home/vivi/.config/github-copilot/intellij/mcp.json`) to use absolute paths instead of relative command names:

### Before:
```json
{
  "servers": {
    "context7": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp@latest"]
    },
    "Browserbase": {
      "type": "stdio", 
      "command": "npx",
      "args": ["-y", "@smithery/cli@latest", "run", "@browserbasehq/mcp-browserbase", "--key", "...", "--profile", "..."]
    }
  }
}
```

### After:
```json
{
  "servers": {
    "context7": {
      "type": "stdio",
      "command": "/home/vivi/.nvm/versions/node/v22.17.1/bin/npx",
      "args": ["-y", "@upstash/context7-mcp@latest"]
    },
    "Browserbase": {
      "type": "stdio",
      "command": "/home/vivi/.nvm/versions/node/v22.17.1/bin/npx", 
      "args": ["-y", "@smithery/cli@latest", "run", "@browserbasehq/mcp-browserbase", "--key", "...", "--profile", "..."]
    }
  }
}
```

## Verification
Both servers were tested and confirmed working:
- `context7` server: Successfully displays help and can be invoked
- `Browserbase` server: Successfully displays help and can be invoked

## General Solution for Similar Issues
For any MCP server that uses NPX or other Node.js tools, use the absolute path to the executable:
1. Find the NPX location: `which npx`
2. Replace `"command": "npx"` with `"command": "/full/path/to/npx"`

This ensures the MCP server can find the required executables regardless of the IDE's PATH configuration.

## Date Fixed
2025-07-29 16:32