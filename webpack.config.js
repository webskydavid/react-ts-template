const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  devtool: 'cheap-module-source-map',

  entry: path.resolve(__dirname, './src/index.tsx'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
    ],
  },
  devServer: {
    contentBase: path.join(process.cwd(), 'dist'),
    historyApiFallback: true,
    transportMode: 'ws',
    noInfo: false,
    hot: true,
    clientLogLevel: 'info',
    port: 3001,
    open: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
