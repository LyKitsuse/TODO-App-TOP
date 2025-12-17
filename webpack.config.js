// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  // For source maps
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },

  //For HTML
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/temp.html",
      filename: "index.html",
    }),
  ],

  // For CSS
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      // webpack.config.js
      // webpack.config.js
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      // webpack.config.js
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: "asset/resource",
      },
    ],
  },
};