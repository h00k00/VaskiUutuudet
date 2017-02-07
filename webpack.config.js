var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    './app/app.js'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
   path: __dirname,
   filename: './public/bundle.js'
  },
  resolve: {
    alias: {
      Main: path.resolve(__dirname, 'app/components/Main.js'),
      Nav: path.resolve(__dirname, 'app/components/Nav.js'),
      Aloitus: path.resolve(__dirname, 'app/components/Aloitus.js'),
      ResultList: path.resolve(__dirname, 'app/components/ResultList.js'),
      Items: path.resolve(__dirname, 'app/components/Items.js'),
      ErrorModal: path.resolve(__dirname, 'app/components/ErrorModal.js'),
      apiFinna: path.resolve(__dirname, 'app/api/apiFinna.js'),
      applicationStyles: path.resolve(__dirname, 'app/styles/app.css')
    },
    extensions: ['.js', '.jsx']
  },
  module: {
   loaders: [
     {
       loader: 'babel-loader',
       query: {
         presets: ['react', 'es2015', 'stage-0']
       },
       test: /\.jsx?$/,
       exclude: /(node_modules|bower_components)/
     }
   ]
  },
  devtool: 'cheap-module-eval-source-map'
};
