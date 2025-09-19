# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

### Development

- `pnpm dev` or `./bin/dev` - Start development server for all apps
- `./bin/web` - Start only the web app development server
- `pnpm build` - Build all applications and packages
- `pnpm lint` - Run linting across all packages
- `pnpm typecheck` - Run TypeScript checks (web app only)
- `pnpm format` - Format all TypeScript, TSX, and Markdown files

### Web App Specific (from apps/web/)

- `pnpm dev` - Start Next.js development server with Turbopack
- `pnpm build` - Build the Next.js application
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Run ESLint with auto-fix
- `pnpm typecheck` - Run TypeScript type checking

### UI Package Specific (from packages/ui/)

- `pnpm lint` - Run ESLint with zero warnings tolerance

## Architecture

This is a **monorepo** using:

- **Turborepo** for build orchestration and caching
- **pnpm workspaces** for package management
- **Next.js 15** for the web application
- **shadcn/ui** component system with **Radix UI** primitives

### Project Structure

```
apps/
  web/                 # Next.js application
packages/
  ui/                  # Shared UI component library
  eslint-config/       # Shared ESLint configurations
  typescript-config/   # Shared TypeScript configurations
```

### UI Package Architecture

The `@workspace/ui` package is the central component library:

- **Components**: Located in `packages/ui/src/components/`
- **Utilities**: Shared utilities in `packages/ui/src/lib/`
- **Styles**: Global CSS in `packages/ui/src/styles/globals.css`
- **Typography**: Dedicated typography components in `packages/ui/src/components/typography/`

Key dependencies:

- **Radix UI** for headless component primitives
- **Tailwind CSS** for styling
- **Class Variance Authority (cva)** for component variants
- **Lucide React** for icons
- **Motion** for animations
- **Zod** for schema validation

### Component Usage

Import components from the UI package:

```tsx
import { Button } from "@workspace/ui/components/button";
```

### Adding shadcn/ui Components

Use the custom bin scripts from anywhere in the repo:

**Standard shadcn components:**

```bash
./bin/shadcn add button
```

**Custom shadcn.io registry components:**

```bash
./bin/shadui add navbar-06
```

Both scripts automatically target the UI package and place components in `packages/ui/src/components/`.

### Development Workflow

1. UI components are developed in `packages/ui/`
2. Web app consumes components from `@workspace/ui`
3. Turborepo handles build dependencies and caching
4. All packages share ESLint and TypeScript configurations

### Build System

- **Turbo tasks** are defined in `turbo.json`
- **Build dependencies**: UI package builds before web app
- **Caching**: Turbo caches build outputs for faster rebuilds
- **Hot reloading**: Changes in UI package automatically reflect in web app during development
