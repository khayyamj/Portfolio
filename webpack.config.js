var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var isProd = process.env.NODE_ENV === "production"; // true or false
var cssDev = ['style-loader','css-loader','sass-loader'];
var cssProd = ExtractTextPlugin.extract({
      fallback: "style-loader",
      use: ["css-loader", "sass-loader"],
      publicPath: "/dist"
    });
var cssConfig = isProd ? cssProd : cssDev;

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: [
          /node_modules/,
          path.resolve(__dirname, 'src/assets/')
        ],
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src'),
        use: cssConfig // changes based on production or development
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico|pdf)$/i,
        use: 'file-loader?images/name=[name].[ext]&outputPath=images/'
      },
      { test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    // port: 9000,
    hot: true,
    stats: "errors-only",
    open: true
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "app.css",
      // disable: false // doesn't work with hot module replacement
      disable: !isProd
    }),
    new HtmlWebpackPlugin({
      title: 'Khayyam Jones - Portfolio',
      // minify: {
      //   collapseWhitespace: true
      // },
      hash: true,
      template: './src/index.html', // Load a custom template (ejs by default see the FAQ for details)
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}
