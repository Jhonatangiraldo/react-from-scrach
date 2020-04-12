const path = require('path');
const dist = path.resolve(__dirname, 'dist');
const src = path.resolve(__dirname, 'src');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const hwpConfig = new HTMLWebpackPlugin({
  template: src + '/app/index.html', 
  filename: 'index.html',
  inject: 'body'
})

const config = {
  entry: src + '/app/index.js',
  module: {
    rules: [
      {
        test: /\.js?/,
        include: src,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/react', '@babel/env']
          }
        }
      },
    ],
  },
  output: {
    path: dist + '/app',
    filename: 'bundle.js',
    publicPath: '/app/',
  },
  plugins: [hwpConfig]
};

module.exports = config;
