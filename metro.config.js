const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);

/*{
  "name": "AwesomeProject",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    "lint": "eslint .",
    "start": "react-native start",
    "test": "jest"
  },
  "dependencies": {
    "react": "18.2.0",
    "react-native": "0.76.9"
  },
  "devDependencies": {
    "@babel/core": "^7.25.2",
    "@babel/preset-env": "^7.25.3",
    "@babel/runtime": "^7.25.0",
    "@react-native-community/cli": "18.0.0",
    "@react-native-community/cli-platform-android": "18.0.0",
    "@react-native-community/cli-platform-ios": "18.0.0",
    "@react-native/babel-preset": "0.76.9",
    "@react-native/eslint-config": "0.76.9",
    "@react-native/metro-config": "0.76.9",
    "@react-native/typescript-config": "0.76.9",
    "@types/jest": "^29.5.13",
    "@types/react": "^18.2.0",
    "@types/react-test-renderer": "^18.2.0",
    "eslint": "^8.19.0",
    "jest": "^29.6.3",
    "prettier": "2.8.8",
    "react-test-renderer": "18.2.0",
    "typescript": "5.0.4"
  },
  "engines": {
    "node": ">=18"
  }
}*/
