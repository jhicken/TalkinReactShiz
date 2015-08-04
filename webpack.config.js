var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:9090',
    './app/app.jsx'
  ],
  output: {
    path: path.resolve('./build'),
    filename: 'bundle.js'
  },
  devtool: '#inline-source-map',
  debug: true,
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx$|\.js$/,
      exclude: /(__tests__|node_modules)\//,
      loaders: ['babel-loader']
    },
    {test: /\.json$/, loader: 'json-loader'}]
  },
  devServer: {
    contentBase: "./build",
    noInfo: true, //  --no-info option
    inline: true,
    colors: true,
    port: 9090
  }
};
