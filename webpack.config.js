var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
      './examples/src/App.js'
    ],
    output: {
        publicPath: "/examples",
        filename: 'bundle.js'
    },

    devServer: {
        inline: true,
        host: '0.0.0.0',
        port: 4000,
        contentBase: __dirname
    },

    module: {
       rules: [
           {
               test: /\.(js)$/,
               loader: 'babel-loader',
               options: {
                   presets: ['es2015', 'react', 'stage-0'],
                   plugins: ['react-hot-loader/babel'],
               },
               exclude: /node_modules/,
           }
       ],
   },
};
