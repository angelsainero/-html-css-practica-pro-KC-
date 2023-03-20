const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    main: './src/app.js',
  },
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
