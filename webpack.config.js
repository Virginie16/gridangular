// filepath: /c:/Users/Virginie/IdeaProjects/grid-template/webpack.config.js
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/main.ts",
  output: {
    path: path.resolve(__dirname, "dist/out-tsc"),
    filename: "main.js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader", // Injects CSS into the DOM
          "css-loader", // Interprets @import and url() like import/require()
        ],
      },
    ],
  },
};
