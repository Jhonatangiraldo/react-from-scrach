const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const dist = path.resolve(__dirname, 'dist');
const src = path.resolve(__dirname, 'src');

const hwpConfig = new HTMLWebpackPlugin({
  template: src + '/app/index.html',
  filename: 'index.html',
  inject: 'body',
});

const config = {
  entry: src + '/app/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: src,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates style nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles sass to CSS
          'sass-loader',
        ],
      },
      { loader: 'url-loader', test: /\.gif$/ },
      { loader: 'file-loader', test: /\.(ttf|eot|svg)$/ },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: dist + '/app',
    filename: 'bundle.js',
    publicPath: '/app/',
  },
  plugins: [hwpConfig],
};

module.exports = config;
