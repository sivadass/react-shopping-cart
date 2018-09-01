const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");

const webpackCommon = require("./webpack.common");

module.exports = merge.smart(webpackCommon, {
  mode: "development",
  output: {
    publicPath: "/", // deploy on server with /app/ folder name
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../dist")
  },
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true,
    overlay: true,
    contentBase: path.join(__dirname, "dist"),
    host: "localhost",
    port: 8012,
    publicPath: "/"
  },
  devtool: "cheap-eval-source-map",
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
