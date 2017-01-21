var webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    './lib/qrauth-client.js'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    },{
      test: require.resolve("./lib/qrauth-client"),
      loader: "imports-loader?this=>window"
    }]
  },
  output: {
    path: __dirname + '/lib',
    publicPath: '/',
    filename: 'qrauth-client.min.js',
    library: ['qrauth']
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"development"'
      }
    })
  ],
  devtool: 'sourcemap'
};

