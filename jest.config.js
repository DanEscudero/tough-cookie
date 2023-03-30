/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.ts$",
  maxWorkers: 1,
  rootDir: './lib/',
  testPathIgnorePatterns: ['./lib/__tests__/data/']
};
