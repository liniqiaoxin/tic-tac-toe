const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');  
const TerserPlugin = require('terser-webpack-plugin');

module.exports = function(env, argv) {
  const isEnvDevelopment = argv.mode === "development" || !argv.mode;
  const isEnvProduction = argv.mode === "production";

  return {
    mode: isEnvProduction ? "production" : isEnvDevelopment && "development",
    devtool: isEnvProduction
      ? "source-map"
      : isEnvDevelopment && "cheap-module-source-map",
    entry: "./src/index.js",
    output: {
      filename: "[name].[contenthash:8].js",
      path: path.resolve(__dirname, "dist")
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          include: [path.resolve(__dirname, 'src/styles'), /node_modules/],
          use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
        },
        {
          test: /\.css$/,
          exclude: [path.resolve(__dirname, 'src/styles'), /node_modules/],
          use: [MiniCssExtractPlugin.loader, "css-loader?modules", "postcss-loader"]
        },
        {
          test: /\.scss$/,
          include: [path.resolve(__dirname, 'src/styles'), /node_modules/],
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
        },
        {
          test: /\.scss$/,
          exclude: [path.resolve(__dirname, 'src/styles'), /node_modules/],
          use: [MiniCssExtractPlugin.loader, "css-loader?modules", "sass-loader"]
        },
        {
          test: /\.less$/,
          include: [path.resolve(__dirname, 'src/styles'), /node_modules/],
          use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "less-loader"]
        },
        {
          test: /\.less$/,
          exclude: [path.resolve(__dirname, 'src/styles'), /node_modules/],
          use: [MiniCssExtractPlugin.loader, "css-loader?modules", "postcss-loader", "less-loader"]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          enforce: "pre",
          use: "eslint-loader"
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: "babel-loader"
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ["file-loader"]
        },
        {
          test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
          loader: "url-loader",
          options: {
            limit: 10000
          }
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'Github热门项目',
        favicon: 'public/favicon.png',
        template: "public/index.html",
                     
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash:8].css',
        chunkFilename: '[name].[contenthash:8].chunk.css',
      }), 
    ],
    resolve: {
      alias: {
        '@': path.resolve('src')
      }
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin(),
        new OptimizeCSSAssetsPlugin(),
      ],
      // Automatically split vendor and commons
      // https://twitter.com/wSokra/status/969633336732905474
      // https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366
      splitChunks: {
        chunks: 'all',
        name: true,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        },
      },
    }
  };
};
