const path = require('path');

module.exports = {
  entry: {
    home: './src/home.js',
    projects: './src/projectsPage.js',
  },
  mode: 'development',
  devtool: 'inline-source-map', // 'source-map'
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
