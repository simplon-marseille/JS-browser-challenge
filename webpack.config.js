const path = require('path');

module.exports = {
  devServer: {
    watchContentBase: true,
  },
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  devtool: "sourcemap"
};












