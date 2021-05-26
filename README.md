# Steps
1) npx create-react-app myapp --template typescript
2) npm install react-bootstrap bootstrap
3) add import 'bootstrap/dist/css/bootstrap.min.css'; in App.tsx
4) change "isolatedModules": false in tsconfig.json
5) npm i jest ts-jest babel-jest
6) create babel.config.js file
  module.exports = {presets: ['@babel/preset-env']}

7) create jest.config.js
  module.exports = {
    preset: 'ts-jest',
    transform: {
      '^.+\\.(ts|tsx)?$': 'ts-jest',
      "^.+\\.(js|jsx)$": "babel-jest",
    }
  };
8) npm i --save react-test-renderer
9) npm i --save @types/react-test-renderer
----------------------------------------------------------------------------
# redux
1) npm install redux react-redux (no need types for readux is written in typescript but yes for react-redux)
2) npm install @types/react-redux

add provider to App.tsx


----------------------------------------------------------------------------
redux-saga
----------
1) npm install redux-saga

---------------------------------------------------------------------------------
Puppeteer

1) npm i puppeteer @types/puppeteer jest-puppeteer @types/jest-environment-puppeteer
2) npm i puppeteer-core
