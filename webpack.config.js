const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader']
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
    },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
      contentBase: './dist',
    }
  };