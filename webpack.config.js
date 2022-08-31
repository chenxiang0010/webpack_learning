const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()]
    },
    devServer: {
        static: 'dist'
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            'utils': path.resolve(__dirname, 'src/utils')
        }
    },
    // loader
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }, {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    // plugins
    plugins: [
        new HtmlWebpackPlugin({
            title: '博客列表'
        }),
        new BundleAnalyzerPlugin()
    ]

}
