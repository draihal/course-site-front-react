module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
};

// module.exports = {
//   moduleFileExtensions: [
//     "ts",
//     "tsx",
//     "js"
//   ],
//   transform: {
//     "^.+\\.tsx?$": "ts-jest"
//   },
//   testMatch: [
//     "**/*.(test|spec).(ts|tsx)"
//   ],
//   globals: {
//     "ts-jest": {
//       useBabelrc: true,
//       tsConfigFile: "jest.tsconfig.json"
//     }
//   },
//   coveragePathIgnorePatterns: [
//     "/node_modules/",
//     "enzyme.js"
//   ],
//   setupTestFrameworkScriptFile: "<rootDir>/enzyme.js",
//   coverageReporters: [
//     "json",
//     "lcov",
//     "text",
//     "text-summary"
//   ],
//   moduleNameMapper: {
//     "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/mocks.js",
//     "\\.(css|less|scss)$": "<rootDir>/__mocks__/mocks.js"
//   }
// };
