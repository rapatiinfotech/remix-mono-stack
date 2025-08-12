# 🚀 Remix Mono Stack

A modern, full-stack monorepo template built with the latest web technologies for scalable React applications.

## 🛠️ Tech Stack

| Technology | Description |
|------------|-------------|
| ⚡ [React Router 7](https://reactrouter.com/) | Full-stack React framework (formerly Remix) |
| 📦 [Turborepo](https://turbo.build/) | High-performance build system for monorepos |
| 🏃‍♂️ [PNPM](https://pnpm.io/) | Fast, disk space efficient package manager |
| 🎨 [ShadCN/UI](https://ui.shadcn.com/) | Beautiful, accessible React component library |
| 💨 [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS framework |
| 🔷 [TypeScript](https://www.typescriptlang.org/) | Static type checking for JavaScript |
| 🔧 [Vite](https://vitejs.dev/) | Next generation frontend tooling |
| 📏 [ESLint](https://eslint.org/) | Code linting and quality assurance |
| 💅 [Prettier](https://prettier.io/) | Code formatting |

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
- `frontend`: React Router 7 application with ShadCN/UI components
- `backend`: React Router 7 backend application

### 📦 Packages
- `@remixmonostack/ui`: Shared React component library with ShadCN/UI and Tailwind CSS
- `@remixmonostack/eslint-config`: ESLint configurations for the entire monorepo
- `@remixmonostack/typescript-config`: Shared TypeScript configurations

Each package and app is built with 100% [TypeScript](https://www.typescriptlang.org/) for type safety.

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

### 📦 Add Vite Config Package

For shared Vite configurations across your monorepo:

```bash
# Add vite-config package
# Reference: https://github.com/thedammyking/turborepo-react-router-v7-starter/tree/main/packages/vite-config
```

### 🧪 Add Vitest for Testing

```bash
# Install Vitest for testing apps and packages
pnpm add -D vitest @vitest/ui
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

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development servers for all apps |
| `pnpm build` | Build all apps and packages |
| `pnpm lint` | Lint all packages with ESLint |
| `pnpm type-check` | Run TypeScript type checking |
| `pnpm clean` | Clean all build artifacts |

## 🧪 Testing & Quality

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
│   ├── frontend/          # React Router 7 frontend app
│   └── backend/           # React Router 7 backend app
├── packages/
│   ├── ui/                # ShadCN/UI component library
│   ├── eslint-config/     # Shared ESLint configuration
│   └── typescript-config/ # Shared TypeScript configuration
├── package.json           # Root package.json
├── pnpm-workspace.yaml    # PNPM workspace configuration
└── turbo.json            # Turborepo configuration
```

## 🔗 Useful Links

### 📖 Documentation
- [🚀 React Router 7 Docs](https://reactrouter.com/dev/guides)
- [🎨 ShadCN/UI Components](https://ui.shadcn.com/docs/components)
- [💨 Tailwind CSS](https://tailwindcss.com/docs)
- [📦 Turborepo](https://turbo.build/repo/docs)
- [🏃‍♂️ PNPM](https://pnpm.io/motivation)

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
