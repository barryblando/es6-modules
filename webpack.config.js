const webpack = require('webpack');
const nodeEnv = process.env.NODE_ENV || 'production';
const path = require('path');

// Constant with out paths
const paths = {
  DIST: path.resolve(__dirname, '_build'),
  JS: path.resolve(__dirname, 'src/js')
};

module.exports = {
  devtool: 'source-map',
  entry: {
    file: './app.js'
  },
  output: {
    filename: '_build/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    // uglify
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false },
      sourceMap: true
    }),
    // env plugin
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
    })
  ]
};
