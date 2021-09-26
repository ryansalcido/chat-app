module.exports = {
  setupFilesAfterEnv: [ "./jest.setup.js" ],
  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: [ "src/**/*.{ts,tsx}" ],
  coverageReporters: [ "text", "text-summary", "json", "lcov" ]
};
