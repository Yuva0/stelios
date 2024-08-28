export {};
module.exports = {
  roots: ["src"],
  setupFilesAfterEnv: ["./setupTests.ts"],
  moduleFileExtensions: ["ts", "tsx", "js"],
  testPathIgnorePatterns: ["node_modules/"],
  coverageReporters: ["text-summary", "lcov", "json"],
  coverageDirectory: "coverage-result",
  testEnvironment: "jsdom", 
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "src/components/**/*.{jsx,tsx}",
    "!src/**/*.d.ts",
    "!src/**/*.stories.tsx",
    "!src/**/index.ts",
  ],
  coveragePathIgnorePatterns: [
    "node_modules",
    "test-config",
    "interfaces",
    "jestGlobalMocks.ts",
    ".module.ts",
    "__test__",
    ".{spec,test,stories}.{js,jsx,ts,tsx}",
    ".mock.ts",
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testMatch: ["**/*.test.(ts|tsx)"],
  moduleNameMapper: {
    // Mocks out all these file formats when tests are run.
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "identity-obj-proxy",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};
