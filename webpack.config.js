var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'babel-polyfill',
    './lib/index.js'
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      include: path.resolve(__dirname, './lib'),
      query: {
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-runtime']
      }
    }]
  },
  output: {
    path: __dirname + '/lib',
    publicPath: '/',
    filename: 'qrauth-client-1.1.1.min.js',
    library: ['Qrauth']
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"development"'
      }
    })
  ],
  devtool: 'sourcemap'
};
