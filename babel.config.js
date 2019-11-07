module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "*": ["src/*"]
        }
      }
    ]
  ],
  env: {
    production: {
      plugins: ["transform-remove-console"]
    }
  }
};
