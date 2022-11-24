/** @type {import('ts-jest').JestConfigWithTsJest} */
import type { JestConfigWithTsJest } from 'ts-jest';

const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig: JestConfigWithTsJest = {
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.ts',
    'react-intersection-observer/test-utils',
  ],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
  },
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/*.d.ts',
    '!src/**/types.ts',
  ],
};

module.exports = createJestConfig({
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(j|t)sx?$': 'babel-jest',
  },
  globals: {
    'ts-jest': {
      isolatedModules: false,
      tsConfig: './tsconfig.jest.json',
    },
  },
  ...customJestConfig,
});
