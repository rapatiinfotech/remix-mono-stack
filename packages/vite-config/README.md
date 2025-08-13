# @remixmonostack/vite-config

Shared Vite and Vitest configuration for the monorepo.

## Usage

### For Vite only (production builds):

```javascript
// vite.config.ts
import { baseConfig } from '@remixmonostack/vite-config/base';
export default baseConfig;
```

### For Vite + Vitest (development with testing):

```javascript
// vite.config.ts
import { mergedConfig } from '@remixmonostack/vite-config/vitest';
export default mergedConfig;
```

### Custom configuration:

```javascript
// vite.config.ts
import { defineConfig, mergeConfig } from 'vite';
import { baseConfig } from '@remixmonostack/vite-config/base';

export default mergeConfig(
    baseConfig,
    defineConfig({
        // Your custom configuration
        server: {
            port: 3001,
        },
    })
);
```

## What's included

### Base configuration:

- **TailwindCSS**: For utility-first CSS
- **React Router**: Development server and build tools
- **TypeScript paths**: Automatic path mapping from tsconfig.json

### Vitest configuration:

- **DOM environment**: For React component testing
- **Global test functions**: `describe`, `it`, `expect` available globally
- **Test file patterns**: Supports `.test.` and `.spec.` files
- **Setup files**: Automatic test setup loading

## Dependencies

This package includes all necessary Vite and Vitest dependencies, so you don't need to install them separately in your apps.
