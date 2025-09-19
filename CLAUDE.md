# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

### Development

- `pnpm dev` or `./bin/dev` - Start development server for all apps
- `./bin/web` - Start only the web app development server
- `pnpm build` - Build all applications and packages
- `pnpm lint` - Run linting across all packages (enforces zero warnings)
- `pnpm typecheck` - Run TypeScript checks (web app and UI package)
- `pnpm format` - Format all TypeScript, TSX, and Markdown files using Prettier

### Web App Specific (from apps/web/)

- `pnpm dev` - Start Next.js development server with Turbopack
- `pnpm build` - Build the Next.js application
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Run ESLint with auto-fix
- `pnpm typecheck` - Run TypeScript type checking

### UI Package Specific (from packages/ui/)

- `pnpm lint` - Run ESLint with zero warnings tolerance
- `pnpm lint:fix` - Run ESLint with auto-fix and zero warnings tolerance
- `pnpm typecheck` - Run TypeScript type checking

## Architecture

This is a **monorepo** using:

- **Turborepo** for build orchestration and caching
- **pnpm workspaces** for package management
- **Next.js 15** for the web application
- **shadcn/ui** component system with **Radix UI** primitives
- **TypeScript** with strict configurations
- **ESLint** with comprehensive code quality rules
- **Prettier** for consistent code formatting

### Project Structure

```
apps/
  web/                 # Next.js application
packages/
  ui/                  # Shared UI component library
  eslint-config/       # Shared ESLint configurations
  typescript-config/   # Shared TypeScript configurations
bin/                   # Utility scripts
  dev                  # Start all development servers
  web                  # Start only web app
  shadcn               # Add standard shadcn components
  shadui               # Add custom shadcn.io registry components
```

### UI Package Architecture

The `@workspace/ui` package is the central component library:

- **Components**: Located in `packages/ui/src/components/`
- **Utilities**: Shared utilities in `packages/ui/src/lib/`
- **Hooks**: Shared React hooks in `packages/ui/src/hooks/`
- **Styles**: Global CSS in `packages/ui/src/styles/globals.css`
- **Typography**: Dedicated typography components in `packages/ui/src/components/typography/`

Key dependencies:

- **Radix UI** for headless component primitives
- **Tailwind CSS v4** for styling
- **Class Variance Authority (cva)** for component variants
- **Lucide React** for icons
- **Motion** for animations
- **Zod** for schema validation
- **cmdk** for command palette components
- **Fuse.js** for fuzzy search

### Component Usage

Import components from the UI package using the configured exports:

```tsx
import { Button } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";
import { useLocalStorage } from "@workspace/ui/hooks/use-local-storage";
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

## Code Style Guidelines

### ESLint Configuration

Our ESLint setup enforces strict code quality standards:

**Type Definitions:**

- **MUST use `type` instead of `interface`** - enforced by `@typescript-eslint/consistent-type-definitions`
- Use separate type imports: `import type { User } from "./types"`

**Variable Usage:**

- **Zero tolerance for unused variables** - enforced by `@typescript-eslint/no-unused-vars`
- Prefix unused parameters with `_` to indicate intentional non-usage
- Example: `const handler = (_event: Event, data: Data) => { /* use data only */ }`

**Import Style:**

- Prefer type-only imports for types: `import type { ComponentProps } from "react"`
- Use consistent import ordering and grouping

**Code Quality Rules:**

- Prefer `const` over `let` where possible
- Use object shorthand syntax
- Prefer template literals over string concatenation
- Use arrow functions for callbacks
- Enforce proper spacing and formatting

### Prettier Configuration

Consistent formatting is enforced with these settings:

- **Semicolons**: Required
- **Quotes**: Double quotes for strings, JSX attributes
- **Trailing commas**: ES5 style (objects, arrays)
- **Tab width**: 2 spaces
- **Print width**: 80 characters
- **Line endings**: LF (Unix style)

### Development Workflow

1. **Component Development**: Create components in `packages/ui/src/components/`
2. **Export Management**: Update `packages/ui/package.json` exports for new components
3. **Type Safety**: All code must pass TypeScript strict mode checks
4. **Linting**: All code must pass ESLint with zero warnings
5. **Formatting**: Code is automatically formatted with Prettier
6. **Testing**: Run `pnpm lint && pnpm typecheck` before commits

### Build System

- **Turbo tasks** are defined in `turbo.json`
- **Build dependencies**: UI package builds before web app
- **Caching**: Turbo caches build outputs for faster rebuilds
- **Hot reloading**: Changes in UI package automatically reflect in web app during development
- **Parallel execution**: Lint and typecheck tasks run in parallel where possible

### Environment Requirements

- **Node.js**: >=20 (specified in package.json engines)
- **Package Manager**: pnpm 10.4.1 (locked version)
- **TypeScript**: 5.7.3 (latest stable)

### Quality Assurance

**Before any code changes:**

1. Run `pnpm lint` to check for code quality issues
2. Run `pnpm typecheck` to verify TypeScript correctness
3. Run `pnpm format` to ensure consistent formatting
4. Verify all changes build successfully with `pnpm build`

**Git Workflow:**

- All commits should pass linting and type checking
- Use conventional commit messages
- Ensure no unused variables or dead code is committed
