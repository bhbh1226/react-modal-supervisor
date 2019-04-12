const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    entry: {
        index: './examples/index.js'
    },
    output: {
        path: __dirname + "/dist/dev",
        publicPath: "/public/",
        filename: "bundle.js",
    },
    devServer: {
        historyApiFallback: true
    }
})