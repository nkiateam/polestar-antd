var webpack = require('webpack');
var path = require('path');


module.exports = {
    entry: [
        './examples/src/index.js'
    ],
    output: {
        publicPath: "/",
        filename: 'bundle.js'
    },

    devServer: {
        inline: true,
        host: '0.0.0.0',
        port: 4000,
        hot: true,
        historyApiFallback: {
            index: 'index.html'
        },
        contentBase: path.join(__dirname, './examples')
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
            },
            {
                test: /\.css$/,
                use: [
                    require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                        },
                    },
                ]
            }
        ],
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
};
