import { defineConfig, mergeConfig } from 'vitest/config';
import { libraryConfig } from '@remixmonostack/vite-config/library';

export default mergeConfig(
    libraryConfig,
    defineConfig({
        test: {
            globals: true,
            environment: 'jsdom',
            include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
            exclude: [
                '**/node_modules/**',
                '**/dist/**',
                '**/cypress/**',
                '**/.{idea,git,cache,output,temp}/**',
                '**/build/**',
            ],
        },
    })
);
