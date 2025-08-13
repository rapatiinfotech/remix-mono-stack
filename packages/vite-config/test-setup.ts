import '@testing-library/jest-dom/vitest';

// React Testing Library v16 automatically cleans up after each test
// No manual cleanup needed with auto-cleanup enabled

// Global test configuration
(globalThis as any).IS_REACT_ACT_ENVIRONMENT = true;
