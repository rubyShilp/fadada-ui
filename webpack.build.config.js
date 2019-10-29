const webpack = require('webpack');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const uglifyjsPlugin=require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
module.exports={
    entry:{
        'index': ['./scripts/package/index.js']
    },
    context: path.join(process.cwd(), 'app'),
    output: {
        path: path.join(__dirname, './lib'),
        publicPath:'/',
        filename: '[name].js',
        library: 'fadada-ui',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    resolve:{
        modules: [
            'node_modules',
            path.resolve(process.cwd(), 'app')
        ],
        alias: {
            'vue':path.resolve(process.cwd(), './node_modules/vue/dist/vue.min.js'),
        },
        extensions: ['.vue','.js','.less','.css']
    },
    module:{
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico|swf)$/,
                use: 'url-loader?limit=10000&name=images/[name].[ext]?[hash]'
            },
            {
                test:/\.less$/,
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader,
                        options:{
                            publicPath:'./'
                        }  
                    },
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader:MiniCssExtractPlugin.loader,
                        options:{
                            publicPath:'./'
                        }  
                    },
                  "css-loader"
                ]
            }
        ]
    },
    performance: {
        hints: false
    },
    //压缩js
    optimization: {
        minimizer: [
            new uglifyjsPlugin({
                uglifyOptions: {
                    compress: false
                }
            })
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
        new webpack.ProgressPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.CommonsChunkPlugin({
        //     name:'init'
        // }),
        new MiniCssExtractPlugin({
            filename: "main-blue.css",
        }),
        new OptimizeCssAssetsPlugin()
    ]
}