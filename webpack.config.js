const HtmlWebpackPlugin = require('html-webpack-plugin');
const Validate = require('webpack-validator');

module.exports = Validate({
  entry: './src/index.js',
  output: {
      path: 'dist',
      filename: "bundle.[hash].js",
      publicPath: 'assets/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'dist/index.html',
      // favicon: 'favicon.ico',
      template: '!!pug!html!index.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'dist/about.html',
      // favicon: 'favicon.ico',
      template: '!!pug!html!about.html',
    }),
  ],
});
