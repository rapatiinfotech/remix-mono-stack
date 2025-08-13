# 🚀 Remix Mono Stack (Turborepo with React Router v7)

A modern, full-stack monorepo template built with the latest web technologies for scalable React applications.

A Turborepo starter template for a React Router v7 application.

## Using this template

Run the following command:

```sh
pnpm dlx create-turbo@latest -e https://github.com/rapatiinfotech/remix-mono-stack
```
You can use other package managers like `npm` and `yarn` or just clone the repo and install the dependencies.

## 🛠️ Tech Stack

| Technology                                                                                | Version | Description                                     |
| ----------------------------------------------------------------------------------------- | ------- | ----------------------------------------------- |
| ⚡ [React Router 7](https://reactrouter.com/)                                             | Latest  | Full-stack React framework (formerly Remix)     |
| 📦 [Turborepo](https://turbo.build/)                                                      | Latest  | High-performance build system for monorepos     |
| 🏃‍♂️ [PNPM](https://pnpm.io/)                                                               | Latest  | Fast, disk space efficient package manager      |
| 🎨 [ShadCN/UI](https://ui.shadcn.com/)                                                    | Latest  | Beautiful, accessible React component library   |
| 💨 [Tailwind CSS](https://tailwindcss.com/)                                               | Latest  | Utility-first CSS framework                     |
| 🔷 [TypeScript](https://www.typescriptlang.org/)                                          | Latest  | Static type checking for JavaScript             |
| 🔧 [Vite](https://vitejs.dev/)                                                            | 7.1.2+  | Next generation frontend tooling                |
| 🧪 [Vitest](https://vitest.dev/)                                                          | 3.2.4+  | Unit testing framework powered by Vite          |
| 🧪 [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) | Latest  | Simple and complete testing utilities for React |
| � [ESLint](https://eslint.org/)                                                           | Latest  | Code linting and quality assurance              |

## 🏁 Quick Start

Clone this repository and install dependencies:

```sh
git clone <repository-url>
cd remix-mono-stack
pnpm install
```

## 📁 What's inside?

This Turborepo includes the following packages and applications:

### 📱 Apps

- `frontend`: React Router 7 client application with ShadCN/UI components
- `backend`: React Router 7 server application (full-stack SSR)

### 📦 Packages

- `@remixmonostack/ui`: Shared React component library with ShadCN/UI and Tailwind CSS
- `@remixmonostack/eslint-config`: ESLint configurations for the entire monorepo
- `@remixmonostack/typescript-config`: Shared TypeScript configurations
- `@remixmonostack/vite-config`: Shared Vite and Vitest configurations for build and testing

Each package and app is built with 100% [TypeScript](https://www.typescriptlang.org/) for type safety and includes comprehensive testing setup.

## 🔧 How to Setup Monorepo with Remix + ShadCN + Tailwind + Turborepo + PNPM

Follow these step-by-step instructions to create your own monorepo from scratch:

### 📋 Prerequisites

- Node.js 18+ installed
- PNPM installed globally: `npm install -g pnpm`

### 🚀 Step 1: Create Turborepo

```bash
# Create a new Turborepo project
pnpm dlx create-turbo@latest

# When prompted:
# ✅ Repo name: remix-mono-stack
# ✅ Package manager: pnpm
```

### 🗂️ Step 2: Clean Up Default Apps

```bash
cd remix-mono-stack

# Remove default Next.js apps
rm -rf apps/web apps/docs
```

### 🎨 Step 3: Setup ShadCN/UI Package

```bash
# Delete existing UI package
rm -rf packages/ui

# Follow ShadCN monorepo setup guide
# Visit: https://ui.shadcn.com/docs/monorepo
# Copy the UI package from ShadCN monorepo example
```

### 📝 Step 4: Update Package Names

Update all `package.json` files to use your naming convention:

- `@remixmonostack/ui`
- `@remixmonostack/eslint-config`
- `@remixmonostack/typescript-config`

### 🏗️ Step 5: Create React Router 7 Apps

```bash
# Navigate to apps folder
cd apps

# Create frontend app
pnpx create-react-router@latest frontend

# Create backend app (optional)
pnpx create-react-router@latest backend
```

### 🧹 Step 6: Clean Up Next.js References

- Remove all Next.js related files and dependencies
- Update `turbo.json` configuration
- Update workspace references in `pnpm-workspace.yaml`

## 🎁 Bonus Features

### 📦 Add Vite Config Package ✅

This monorepo includes a shared `@remixmonostack/vite-config` package that provides:

- **Shared Vite configuration**: Base setup with React Router, TailwindCSS, and TypeScript paths
- **Vitest integration**: Testing configuration with jsdom environment and React Testing Library
- **Multiple exports**: Different configs for apps vs library packages
- **Latest versions**: Vite 7.1.2+ and Vitest 3.2.4+ for optimal performance

Available configurations:

```typescript
// For React Router apps (frontend/backend)
import { baseConfig } from '@remixmonostack/vite-config/base';
export default baseConfig;

// For library packages (UI components)
import { libraryConfig } from '@remixmonostack/vite-config/library';
export default libraryConfig;

// For testing configuration
import { mergedConfig } from '@remixmonostack/vite-config/vitest';
export default mergedConfig;
```

### 🧪 Vitest Workspace Setup ✅

The monorepo includes a comprehensive testing setup with the following features:

- **Workspace configuration**: [`vitest.workspace.ts`](./vitest.workspace.ts) for unified testing across all packages
- **Parallel execution**: Tests run simultaneously across all apps and packages for faster feedback
- **Turbo integration**: Cached test runs with intelligent task orchestration
- **Individual package testing**: Each app/package can run tests independently
- **React Testing Library**: Complete setup for component testing with jsdom environment
- **Hot reload**: Tests automatically re-run when files change in development

**Current test coverage:**

- ✅ Frontend app: Basic component and routing tests
- ✅ Backend app: Server-side rendering and API tests
- ✅ UI package: Component library tests with React Testing Library

**Test execution:**

```bash
# Run all tests (6 tests across 3 packages)
pnpm test:run

# Watch mode for development
pnpm test

# Run with Vitest UI
pnpm test:ui
```

### ⚙️ Development Tools

## ⚡ Development

### 🏗️ Build

To build all apps and packages:

```bash
# With global turbo installed (recommended)
turbo build

# With PNPM
pnpm exec turbo build
```

Build specific packages using [filters](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters):

```bash
# Build only frontend app
turbo build --filter=frontend

# Build only UI package
turbo build --filter=@remixmonostack/ui
```

### 🚀 Development Server

To start development for all apps and packages:

```bash
# Start all development servers
turbo dev

# Start specific app
turbo dev --filter=frontend
```

## ☁️ Remote Caching

> [!TIP]
> Vercel Remote Cache is free for all plans. Get started at [vercel.com](https://vercel.com/signup?utm_source=remote-cache-sdk&utm_campaign=free_remote_cache).

Turborepo can use [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

### 🔐 Setup Remote Caching

1. **Login to Vercel:**

    ```bash
    turbo login
    ```

2. **Link your repository:**
    ```bash
    turbo link
    ```

## 🛠️ Available Scripts

| Script            | Description                            |
| ----------------- | -------------------------------------- |
| `pnpm dev`        | Start development servers for all apps |
| `pnpm build`      | Build all apps and packages            |
| `pnpm lint`       | Lint all packages with ESLint          |
| `pnpm test`       | Run tests for all apps in watch mode   |
| `pnpm test:run`   | Run all tests once (CI mode)           |
| `pnpm test:ui`    | Run tests with Vitest UI dashboard     |
| `pnpm type-check` | Run TypeScript type checking           |
| `pnpm clean`      | Clean all build artifacts              |

### 🚀 Turbo Scripts

Use Turbo for optimized builds with caching:

```bash
# Development
turbo dev                    # Start all dev servers
turbo dev --filter=frontend  # Start specific app

# Building
turbo build                  # Build all packages
turbo build --filter=ui      # Build specific package

# Testing
turbo test                   # Run tests in watch mode
turbo test:run              # Run all tests once
turbo test:ui               # Run Vitest UI

# Linting
turbo lint                   # Lint all packages
turbo type-check            # Type check all packages
```

## 🧪 Testing & Quality

### 🧪 Testing with Vitest

The monorepo uses Vitest for fast, reliable testing with the following features:

- **Workspace configuration**: Unified testing across all apps and packages via `vitest.workspace.ts`
- **Shared configuration**: Apps use `@remixmonostack/vite-config` for consistent setup
- **Parallel execution**: Tests run simultaneously for faster feedback (6 tests across 3 packages)
- **JSdom environment**: Ready for React component testing with React Testing Library
- **Turbo integration**: Intelligent caching and task orchestration
- **Hot reload**: Tests automatically re-run when files change

**Current Test Status:**

```
✓ @remixmonostack/backend   app/test.spec.tsx (2 tests)
✓ @remixmonostack/frontend  app/test.spec.tsx (2 tests)
✓ @remixmonostack/ui        src/components/button.test.tsx (2 tests)

Test Files  3 passed (3)
Tests       6 passed (6)
```

**Test Commands:**

```bash
# Run all tests in watch mode
pnpm test
turbo test

# Run all tests once (CI mode)
pnpm test:run
turbo test:run

# Run tests with UI dashboard
pnpm test:ui
turbo test:ui

# Test specific app/package
pnpm --filter="apps/frontend" test
turbo test --filter=frontend
turbo test --filter=ui

# Test all apps only (exclude packages)
pnpm -r --filter="./apps/*" test:run
```

**Test Structure:**

- **Apps**: Tests located in `apps/*/app/*.test.ts` for routes and components
- **Packages**: Tests located in `packages/*/src/**/*.test.ts` for library code
- **Shared utilities**: Test helpers available in `@remixmonostack/vite-config/test-setup.ts`
- **Configuration**: Each package has its own `vitest.config.ts` extending shared configuration

### 🔍 Linting

The monorepo uses ESLint with shared configurations:

- **Base config**: For general TypeScript/JavaScript projects
- **React config**: For React-based applications and components

Each app and package has its own ESLint configuration that extends the shared configs and includes specific ignore patterns for build directories and generated files.

To run linting:

```bash
# Lint all packages
turbo lint

# Lint specific package
turbo lint --filter=frontend
```

## 📚 Project Structure

```
remix-mono-stack/
├── apps/
│   ├── frontend/              # React Router 7 client app
│   │   ├── app/
│   │   │   ├── routes/        # Route components
│   │   │   ├── *.test.tsx     # Test files
│   │   │   └── root.tsx       # Root layout
│   │   ├── vite.config.ts     # Extends shared config
│   │   └── vitest.config.ts   # Extends shared test config
│   └── backend/               # React Router 7 server app
│       ├── app/
│       │   ├── routes/        # API routes
│       │   ├── *.test.tsx     # Test files
│       │   └── root.tsx       # Server layout
│       ├── vite.config.ts     # Extends shared config
│       └── vitest.config.ts   # Extends shared test config
├── packages/
│   ├── ui/                    # ShadCN/UI component library
│   │   ├── src/components/    # React components
│   │   │   └── *.test.tsx     # Component tests
│   │   └── vitest.config.ts   # Library test config
│   ├── eslint-config/         # Shared ESLint configuration
│   ├── typescript-config/     # Shared TypeScript configuration
│   └── vite-config/           # 🆕 Shared Vite/Vitest configs
│       ├── base.js            # React Router app config
│       ├── library.js         # Library package config
│       ├── vitest.js          # Testing configuration
│       └── test-setup.ts      # Test environment setup
├── vitest.workspace.ts        # 🆕 Vitest workspace config
├── package.json               # Root package.json with test scripts
├── pnpm-workspace.yaml        # PNPM workspace configuration
└── turbo.json                # Turborepo with test tasks
```

## ✅ Current Status

### 🎯 Fully Implemented Features

- ✅ **Shared Vite Configuration**: Complete `@remixmonostack/vite-config` package with base, library, and vitest configs
- ✅ **Comprehensive Testing**: 6 tests passing across all apps and packages
- ✅ **Vitest Workspace**: Unified testing configuration with parallel execution
- ✅ **Turbo Integration**: Build and test orchestration with intelligent caching
- ✅ **React Testing Library**: Full setup for component testing with jsdom environment
- ✅ **TypeScript Support**: Complete type safety across the entire monorepo
- ✅ **Modern Tooling**: Latest Vite 7.1.2+ and Vitest 3.2.4+ with optimal performance

### 🚀 Recent Improvements

**August 2025 Updates:**

- Added shared `@remixmonostack/vite-config` package to eliminate configuration duplication
- Implemented comprehensive Vitest workspace for unified testing across all packages
- Integrated React Testing Library for robust component testing
- Added Turbo task orchestration for build and test operations
- Updated to latest Vite and Vitest versions for optimal performance
- Created test files for all apps and packages with working examples

**Performance Metrics:**

- **Build Time**: Optimized with Turbo caching and parallel execution
- **Test Speed**: 6 tests complete in ~1ms with jsdom environment
- **Development**: Hot reload and instant feedback across all packages

## 🔗 Useful Links

### 📖 Documentation

- [🚀 React Router 7 Docs](https://reactrouter.com/dev/guides)
- [🎨 ShadCN/UI Components](https://ui.shadcn.com/docs/components)
- [💨 Tailwind CSS](https://tailwindcss.com/docs)
- [📦 Turborepo](https://turbo.build/repo/docs)
- [🏃‍♂️ PNPM](https://pnpm.io/motivation)
- [🧪 Vitest](https://vitest.dev/guide/)
- [🔧 Vite](https://vitejs.dev/guide/)

### 🛠️ Turborepo Resources

- [Tasks](https://turborepo.com/docs/crafting-your-repository/running-tasks)
- [Caching](https://turborepo.com/docs/crafting-your-repository/caching)
- [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching)
- [Filtering](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters)
- [Configuration Options](https://turborepo.com/docs/reference/configuration)
- [CLI Usage](https://turborepo.com/docs/reference/command-line-reference)

## 🤝 Contributing

We welcome contributions! Please see our [contributing guidelines](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Happy coding! 🚀**
