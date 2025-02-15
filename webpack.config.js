const webpack = require('webpack');
const path = require('path');

var config = {
    entry: {
        scripts: [
            './scripts/options.js',
            './scripts/ajax.js',
            './scripts/templateCache.js',
            './scripts/preloader.js',
            './scripts/navigation.js',
            './scripts/main.js',
        ],
    },
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};

module.exports = config;