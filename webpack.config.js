var webpack = require('webpack');
var path = require('path');
var APP_DIR = path.resolve(__dirname, 'src');
var DIST_DIR = path.resolve(__dirname, 'dist');
module.exports = {
    entry: [APP_DIR + '/index.js' ],
    output: {
        path:DIST_DIR + '/js',
        filename: 'app.js'
    },
    devServer: {
        inline: true,
        contentBase: './dist',
        port: 8100
    }
}