const webpack = require('webpack');
const path = require('path');

var config = {
    entry: {
        scripts: [
            './scripts/ajax.js',
            './scripts/navigation.js',
            './scripts/main.js',
        ],
    },
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    plugins: [
        // new webpack.optimize.CommonsChunkPlugin(['scripts', 'vendor'], 'bundle--[name].js'),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};

module.exports = config;