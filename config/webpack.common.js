const { setupPath } = require('./helpers');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const prodMode = process.env.ENV = 'production';

module.exports = {

  entry: './src/Main.js',

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
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: prodMode ? MiniCssExtractPlugin.loader : 'style-loader',
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader', // Run post css actions
            options: {
              ident: 'postcss',
              plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
              ],
            },
          },
          {
            loader: 'sass-loader'
          }
        ],
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
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: prodMode ? '[name].[hash].css' : '[name].css',
      chunkFilename: prodMode ? '[id].[hash].css' : '[id].css',
    }),
    new HtmlWebpackPlugin({
      template: setupPath('../src/index.html')
    })
  ]
};