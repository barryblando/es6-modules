const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// this is for development or production environment
const nodeEnv = process.env.NODE_ENV || 'production';
// We are using node's native package 'path'
// https://nodejs.org/api/path.html
const path = require('path');

// Constant with out paths
const paths = {
  BUILD: path.join(__dirname, '_build'),
  SRC: path.resolve(__dirname, 'src'),
  JS: path.resolve(__dirname, 'src/js')
};

module.exports = {
  devtool: 'source-map',
  entry: path.join(paths.JS, 'app.js'),
  output: {
    path: paths.BUILD,
    filename: 'app.bundle.js'
  },
  // Dev server config: _build as a starting point
  devServer: {
    contentBase: './',
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader', options: { cacheDirectory: true } }],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    // uglify, we'll gonna use beta in order to work for webpack3.8.1, @Update: Beta won't work for now, I downgraded Uglify
    /* new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false },
      sourceMap: true
    }), */
    new UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false },
      sourceMap: true
    }),
    // env plugin
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
    }),
    // html to inject script
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html'),
    }),
  ]
};
