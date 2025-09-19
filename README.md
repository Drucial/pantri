# Pantrio - Modern React Monorepo

A production-ready monorepo template built with Next.js 15, shadcn/ui, TypeScript, and modern development tools.

## 🚀 Quick Start

### Prerequisites

- **Node.js** ≥20
- **pnpm** 10.4.1 (exact version required)

### Installation

1. **Clone and install dependencies:**

```bash
git clone <repository-url>
cd pantrio
pnpm install
```

2. **Start development servers:**

```bash
# Start all applications
pnpm dev
# or
./bin/dev

# Start only the web app
./bin/web
```

3. **Open your browser:**
   - Web app: [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
pantrio/
├── apps/
│   └── web/                    # Next.js 15 application
├── packages/
│   ├── ui/                     # Shared component library
│   ├── eslint-config/          # Shared ESLint configurations
│   └── typescript-config/      # Shared TypeScript configurations
├── bin/                        # Utility scripts
│   ├── dev                     # Start all development servers
│   ├── web                     # Start web app only
│   ├── shadcn                  # Add standard shadcn components
│   └── shadui                  # Add custom shadcn.io components
└── README.md
```

## 🛠️ Development

### Available Commands

```bash
# Development
pnpm dev                # Start all development servers
pnpm build              # Build all packages and applications
pnpm lint               # Lint all packages (zero warnings enforced)
pnpm typecheck          # Type check all packages
pnpm format             # Format code with Prettier

# Web app specific (from apps/web/)
pnpm dev                # Next.js dev server with Turbopack
pnpm build              # Build for production
pnpm start              # Start production server
pnpm lint               # ESLint with Next.js config
pnpm lint:fix           # Auto-fix ESLint issues

# UI package specific (from packages/ui/)
pnpm lint               # ESLint with zero warnings
pnpm lint:fix           # Auto-fix with zero warnings
pnpm typecheck          # TypeScript checking
```

### Adding Components

**Standard shadcn/ui components:**

```bash
# From anywhere in the repo
./bin/shadcn add button
./bin/shadcn add card
./bin/shadcn add dialog
```

**Custom shadcn.io registry components:**

```bash
# From anywhere in the repo
./bin/shadui add navbar-06
./bin/shadui add theme-toggle-button
```

Components are automatically placed in `packages/ui/src/components/` and can be imported as:

```tsx
import { Button } from "@workspace/ui/components/button";
import { Card } from "@workspace/ui/components/card";
```

## 📋 Code Style Guidelines

### ESLint Rules (Enforced)

**Type Definitions:**

- ✅ **Use `type` instead of `interface`**
- ✅ **Separate type imports:** `import type { User } from "./types"`

**Variable Management:**

- ✅ **Zero unused variables** - Build will fail if any unused vars exist
- ✅ **Prefix intentionally unused params with `_`:**
  ```tsx
  const handler = (_event: Event, data: Data) => {
    // Only use data, _event is intentionally unused
  };
  ```

**Code Quality:**

- ✅ Prefer `const` over `let`
- ✅ Use object shorthand syntax
- ✅ Template literals over string concatenation
- ✅ Arrow functions for callbacks
- ✅ Consistent spacing and formatting

### Prettier Configuration

- **Semicolons**: Required
- **Quotes**: Double quotes (strings & JSX)
- **Trailing commas**: ES5 style
- **Indentation**: 2 spaces
- **Line width**: 80 characters
- **Line endings**: LF (Unix style)

### Type Safety

**Required practices:**

```tsx
// ✅ Good - Type definitions
type User = {
  id: string;
  name: string;
};

// ✅ Good - Type-only imports
import type { ComponentProps } from "react";

// ✅ Good - Proper exports
export type { User };

// ❌ Bad - Interface usage
interface User {
  id: string;
}

// ❌ Bad - Mixed imports
import { Component, type ComponentProps } from "react";
```

## 🏗️ Architecture

### Technology Stack

- **Build System**: Turborepo with pnpm workspaces
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **Components**: Radix UI primitives + shadcn/ui
- **Type Safety**: TypeScript 5.7.3 (strict mode)
- **Code Quality**: ESLint + Prettier (zero warnings policy)
- **Package Manager**: pnpm 10.4.1

### UI Package (`@workspace/ui`)

**Component System:**

- **Base Components**: `packages/ui/src/components/`
- **Utilities**: `packages/ui/src/lib/`
- **Hooks**: `packages/ui/src/hooks/`
- **Styles**: `packages/ui/src/styles/globals.css`

**Key Dependencies:**

- **Radix UI**: Headless component primitives
- **Class Variance Authority**: Component variants
- **Lucide React**: Icon library
- **Motion**: Animation library
- **Zod**: Runtime type validation
- **cmdk**: Command palette components
- **Fuse.js**: Fuzzy search

### Import System

```tsx
// Component imports
import { Button } from "@workspace/ui/components/button";
import { Card, CardContent } from "@workspace/ui/components/card";

// Utility imports
import { cn } from "@workspace/ui/lib/utils";

// Hook imports
import { useLocalStorage } from "@workspace/ui/hooks/use-local-storage";

// Global styles (in app layout)
import "@workspace/ui/globals.css";
```

## 🚦 Quality Assurance

### Pre-commit Checklist

Before committing any changes:

1. **Lint check**: `pnpm lint` (must pass with zero warnings)
2. **Type check**: `pnpm typecheck` (must pass without errors)
3. **Format**: `pnpm format` (ensures consistent formatting)
4. **Build test**: `pnpm build` (ensures everything compiles)

### Development Workflow

1. **Create/modify components** in `packages/ui/src/components/`
2. **Update exports** in `packages/ui/package.json` if adding new components
3. **Import and use** components in `apps/web/`
4. **Test thoroughly** - Turborepo provides hot reloading across packages
5. **Run quality checks** before committing

### Build System

- **Parallel builds**: Turborepo runs tasks in optimal order
- **Intelligent caching**: Only rebuilds what changed
- **Hot reloading**: Changes in UI package instantly reflect in web app
- **Type checking**: Shared TypeScript configs ensure consistency

## 🔧 Environment Setup

### Required Versions

- **Node.js**: ≥20 (LTS recommended)
- **pnpm**: 10.4.1 (locked version in packageManager field)
- **TypeScript**: 5.7.3

### IDE Configuration

**VS Code Extensions (Recommended):**

- TypeScript and JavaScript Language Features
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- Auto Rename Tag

**Settings:**

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "typescript.preferences.importModuleSpecifier": "relative"
}
```

## 📝 Contributing

1. **Follow code style guidelines** (enforced by ESLint/Prettier)
2. **Write TypeScript** with proper type definitions
3. **Test your changes** with `pnpm lint && pnpm typecheck && pnpm build`
4. **Use conventional commits** for clear history
5. **Ensure zero warnings** in all linting passes

## 🚨 Troubleshooting

**Common Issues:**

```bash
# Clear all caches and reinstall
rm -rf node_modules .turbo
pnpm install

# Reset turborepo cache
pnpm turbo clean

# Fix permission issues (macOS/Linux)
chmod +x bin/*
```

**ESLint Errors:**

- Unused variables: Remove them or prefix with `_`
- Interface usage: Convert to `type` definitions
- Import issues: Use proper type-only imports

**TypeScript Errors:**

- Check `tsconfig.json` extends workspace configs
- Ensure all dependencies have proper type definitions
- Run `pnpm typecheck` for detailed error information
