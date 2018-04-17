const { setupPath } = require('./helpers');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  entry: './src/Main.jsx',

  resolve: {
    alias: {
      'styles$': setupPath('../src/assets/scss/styles.scss'),
    },
    extensions: ['.js', '.jsx']
  },

  module: {
    // rules for modules (configure loaders, parser options, etc.)
    rules: [
      {
        test: /\.jsx?$/, // both .js and .jsx
        loader: 'eslint-loader',
        enforce: 'pre',
        options: {
          fix: false
        }
      },
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test:/\.(s*)css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'sass-loader',
            'postcss-loader'
          ]
        })
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader?name=assets/img/[name].[ext]'
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({filename:'aj.bundle.css'}),
    new HtmlWebpackPlugin({
      template: setupPath('../src/index.html')
    })
  ]
};