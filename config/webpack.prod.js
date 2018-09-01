const path = require("path");
const merge = require("webpack-merge");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CleanWbepackPlugin = require("clean-webpack-plugin");

const webpackCommon = require("./webpack.common");

const pathsToClean = ["docs"];
const cleanOptions = {
  root: path.resolve(__dirname, "../")
};

module.exports = merge.smart(webpackCommon, {
  output: {
    filename: "main.[chunkhash].js",
    path: path.resolve(__dirname, "../docs"),
    publicPath: "/"
  },
  mode: "production",
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          mangle: {
            keep_fnames: true
          }
        }
      })
    ],
    runtimeChunk: true,
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor_app",
          chunks: "all",
          minChunks: 2
        }
      }
    }
  },
  plugins: [
    new CleanWbepackPlugin(pathsToClean, cleanOptions),
    new OptimizeCssAssetsPlugin()
  ]
});
