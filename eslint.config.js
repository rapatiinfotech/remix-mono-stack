import { config } from '@pgs/eslint-config/base';

/** @type {import("eslint").Linter.Config} */
export default [
    {
        ignores: ['packages/**', 'apps/**'],
    },
    ...config,
];
