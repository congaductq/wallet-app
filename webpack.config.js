const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const path = require('path')

const config = {
  entry: {
    index: `${__dirname}/src/index.tsx`,
  },
  output: {
    path: `${__dirname}/build`,
    filename: '[name].[contenthash:6].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      '~': path.resolve('src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      title: 'Wallet App',
      favicon: 'src/assets/favicon.ico',
      template: 'src/assets/index.html',
    }),
  ],
}

if (process.env.NODE_ENV === 'production') {
  config.optimization = {
    minimizer: [new TerserWebpackPlugin()],
  }
} else {
  config.devServer = {
    port: 8000,
    open: true,
    hot: true,
    compress: true,
    stats: 'errors-only',
    overlay: true,
    historyApiFallback: true,
  }
}

module.exports = config
