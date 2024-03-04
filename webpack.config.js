const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const basePath = '/';

module.exports = {
  performance : {
    hints : false
  },
  stats: {
    children: true,
  },
  entry: {
    index: {
      import:'./src/js/index.js',
      filename: 'js/index.js'
    },
    about:{
      import:'./src/js/about.js',
      filename: 'js/about.js'
    },
    test:{
      import:'./src/js/test.js',
      filename: 'js/test.js'
    },
    services:{
      import:'./src/js/services.js',
      filename: 'js/services.js'
    },
     price:{
      import:'./src/js/price.js',
      filename: 'js/price.js'
    },
    recommend:{
      import:'./src/js/recommend.js',
      filename: 'js/recommend.js'
    },
    contact:{
      import:'./src/js/contact.js',
      filename: 'js/contact.js'
    },
    topic:{
      import:'./src/js/topic.js',
      filename: 'js/topic.js'
    },
  },
  output: {
    publicPath: basePath,
    path: path.join(__dirname, "/build"), 
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
      {
        test: /\.(sass|scss|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: "image/[name][ext]",
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [
       new HtmlMinimizerPlugin(),
       new CssMinimizerPlugin(),
       new TerserWebpackPlugin({
        extractComments: false,
      }),
    ],
  },
  plugins: [
    new webpack.BannerPlugin('Name: Web-demo ; Version-Deployment : v1.0; Version-Test: v1.0'),
    new webpack.ProvidePlugin({
      $: "jquery",
      jquery: "jQuery",
      "window.jQuery": "jquery"
    }),
    
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/views/index.html',
      inject: "body",
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: './src/views/about.html',
      inject: "body",
      chunks: ['about'],
    }),
    new HtmlWebpackPlugin({
      filename: 'test.html',
      template: './src/views/test.html',
      inject: "body",
      chunks: ['test'],
    }),
    new HtmlWebpackPlugin({
      filename: 'services.html',
      template: './src/views/services.html',
      inject: "body",
      chunks: ['services'],
    }),
    new HtmlWebpackPlugin({
      filename: 'price.html',
      template: './src/views/price.html',
      inject: "body",
      chunks: ['price'],
    }),
    new HtmlWebpackPlugin({
      filename: 'recommend.html',
      template: './src/views/recommend.html',
      inject: "body",
      chunks: ['recommend'],
    }),
    new HtmlWebpackPlugin({
      filename: 'contact.html',
      template: './src/views/contact.html',
      inject: "body",
      chunks: ['contact'],
    }),
    new HtmlWebpackPlugin({
      filename: 'topic.html',
      template: './src/views/topic.html',
      inject: "body",
      chunks: ['topic'],
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].min.css",
    }),
    
  ],    
  mode: 'development',
  devServer: {
      static: {
        directory: path.resolve(__dirname, "src"),
      },
      port: 1700,
      hot: true,
  },
};