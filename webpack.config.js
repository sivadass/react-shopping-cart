const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  watch: true,
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './index.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  devtool: 'source-map',
  resolve: {
    alias: {
      moment: 'moment/src/moment'
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include:[path.resolve(__dirname, 'src')],
        exclude: [path.resolve(__dirname,"node_modules")],
        use: "babel-loader"
      },
      {
        test: /\.scss?$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader'
        })
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: "file-loader"
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
  ]
};