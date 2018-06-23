require('dotenv').config({silent: true})

const path = require('path'),
      webpack = require('webpack'),
      CleanupPlugin = require('webpack-cleanup-plugin'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      CopyWebpackPlugin = require('copy-webpack-plugin')

const package = path.resolve(__dirname, './'),
      build = path.resolve(package, 'build'),
      src = path.resolve(package, 'src')

const isProduction = process.env.NODE_ENV === 'production'

const rules = [{
    oneOf: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
            presets: [ ['@babel/preset-env', {loose: true}] ],
        }
    },{
        test: /\.less$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
                { loader: 'css-loader',
                  options: { sourceMap: !isProduction }},
                { loader: 'less-loader',
                  options: { sourceMap: !isProduction }},
            ]
        })
    }]
},{
    exclude: [/\.jsx?$/, /\.css$/, /\.less$/, /\.html$/, /\.json$/],
    loader: 'file-loader',
    options: {
        name: 'assets/[name].[hash:8].[ext]'
    }
}]

module.exports = {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? false : 'source-map',
    module: {rules},
    entry: {
        'scripts/app.js': path.resolve(src, 'index.js')
    },
    output: {
        path: build,
        filename: '[name]',
    },
    plugins: [
        new CleanupPlugin([ build ]),
        new ExtractTextPlugin({
            filename: 'styles/app.css',
            allChunks: true
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new CopyWebpackPlugin(
            [ 'template.conf', 'blocks/**', 'collections/**',
              'pages/**',
              { from: 'regions/**', flatten: true }],
            { context: src, copyUnmodified: true }
        )
    ]
}
