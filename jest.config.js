module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\](?!lodash-es/).+\\.js$'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: ['<rootDir>/**/*.spec.(ts|tsx|js)'],
  testURL: 'http://localhost/',
  coverageDirectory: '<rootDir>/tests/unit/coverage',
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue'
  ],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0
    }
  }
}
