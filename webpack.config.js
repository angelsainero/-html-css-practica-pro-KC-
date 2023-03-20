const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      filename: 'index.html',
      template: 'src/templates/index.html',
      chunks: ['home'],
    }),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      filename: 'projects.html',
      template: 'src/templates/projects.html',
      chunks: ['projects'],
    }),
  ],
};
