const path = require('path');
const utils = require('lazynerd-devtools');

const commonConfig = {
  entry: [
    './src/main.js',
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};

module.exports = utils.isProduction()
  ? utils.webpack.mergeWithProdConfig(commonConfig)
  : utils.webpack.mergeWithDevConfig(commonConfig);
