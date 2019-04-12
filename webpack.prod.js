const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const webpack = require('webpack')

module.exports = merge(common, {
    mode: 'production',
    entry: {
        index: './src'
    },
    output: {
        path: __dirname + "/dist/public",
        publicPath: "/public/",
        filename: "bundle.js",
        libraryTarget: 'commonjs2' // THIS IS THE MOST IMPORTANT LINE! :mindblow: I wasted more than 2 days until realize this was the line most important in all this guide.
    },
    plugins: [
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],
    externals: {
      'react': 'commonjs react' // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
    }
})