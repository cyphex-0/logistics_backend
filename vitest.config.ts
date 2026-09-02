import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    pool: 'forks',
    poolOptions: {
      forks: {
        singleFork: true
      }
    },
    fileParallelism: false,
    setupFiles: ['./tests/env-setup.js', './tests/setup.ts'],
    include: ['tests/**/*.test.ts']
  }
});
