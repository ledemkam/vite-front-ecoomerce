export default {
  testEnvironment: 'jsdom',
  transform: {
   '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
   '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
   '^.+\\.svg$': 'jest-transformer-svg',
   '^common/(.*)$': '<rootDir>/src/common/$1',
   '^features/(.*)$': '<rootDir>/src/features/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  };
  