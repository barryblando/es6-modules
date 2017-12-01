const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// this is for development or production environment
const nodeEnv = process.env.NODE_ENV || 'production';
// We are using node's native package 'path'
// https://nodejs.org/api/path.html
const path = require('path');

// Constant with out paths
const paths = {
  BUILD: path.resolve(__dirname, '_build'),
  SRC: path.resolve(__dirname, 'src'),
  JS: path.resolve(__dirname, 'src/js'),
  SCSS: path.resolve(__dirname, 'src/scss')
};

module.exports = {
  devtool: 'source-map',
  entry: path.join(paths.JS, 'app.js'),
  output: {
    path: paths.BUILD,
    filename: 'app.[hash].bundle.js'
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
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          // resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader?sourceMap', 'sass-loader?sourceMap'],
          publicPath: paths.BUILD,
        }),
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
      title: 'JS Modules',
      // minify: {
      //   collapseWhitespace: true // minify html
      // },
      // hash: true, // for build versioning and cache busting
      template: path.join(paths.SRC, 'index.html'),
    }),
    // extract css
    new ExtractTextPlugin({
      filename: 'css/style.[hash].css',
      allChunks: true
    }),
    new BundleAnalyzerPlugin(),
  ]
};
