var webpack = require('webpack')
var path = require('path')

process.traceDeprecation = true
// process.noDeprecation = true

module.exports = {
    entry: [
        'script-loader!jquery/dist/jquery.min.js',
        'script-loader!foundation-sites/dist/js/foundation.min.js',
        './app/app.jsx'
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
            applicationStyles: 'app/styles/app.scss'
        },
        extensions: ['.js', '.jsx'],
        modules: [
            __dirname,
            'node_modules',
            './app/components',
            './app/api'
        ]
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
            },
            {
                test: /\.css$/,
                include: [
                    path.join(__dirname, 'app', 'styles')
                ],
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                include: [
                    path.join(__dirname, 'app', 'styles')
                ],
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
}

