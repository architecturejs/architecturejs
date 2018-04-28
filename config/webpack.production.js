const Webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const { productionPath } = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = (env) => {

  return webpackMerge(commonConfig, {

    mode: 'production',

    devtool: 'source-map',

    output: {
      path: productionPath(env),
      publicPath: '/',
      filename: '[name].[hash].js',
      chunkFilename: '[id].[hash].chunk.js',
      libraryTarget: 'umd'
    },

    performance: {
      hints: 'warning', // enum
      maxAssetSize: 200000, // int (in bytes),
      maxEntrypointSize: 400000, // int (in bytes)
      assetFilter: (assetFilename) => {
        // Function predicate that provides asset filenames
        return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
      }
    },

    plugins: [
      new ExtractTextPlugin('[name].[hash].css'),
      /*,
       new ScriptExtHtmlWebpackPlugin({
       defaultAttribute: 'defer'
       })*/
    ],
    /* externals: {
      // Use external version of React
      'react': 'React',
      'react-dom': 'ReactDOM'
    }*/

  });

};