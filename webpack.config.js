const TerserPlugin = require("terser-webpack-plugin");
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/background.js',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
};
