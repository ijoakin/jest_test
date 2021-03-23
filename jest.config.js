module.exports = {
  preset: 'jest-puppeteer',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  globals: {
    'ts-jest': {
      isolatedModules: true
    }
  }
};