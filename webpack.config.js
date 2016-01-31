// fix an error with css loader in older versions of node
require('es6-promise').polyfill();

var webpack = require ('webpack');

module.exports = {
  // http://webpack.github.io/docs/configuration.html#devtool
  devtool: "eval-source-map",
  entry:  __dirname + "/app/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    contentBase: "./public",
    colors: true,
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 8080
  }
};
