const webpackMerge = require('webpack-merge');
const path = require('path');
const commonConfig=require('./webpack.common');
module.exports=webpackMerge(commonConfig,{
    output:{
        path: path.join(process.cwd(), 'dist'),
        publicPath: 'http://192.168.30.93:8085/',    
        filename: '[name].bundle[hash:7].js',
        chunkFilename: '[id].chunk[hash:7].js',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    devServer:{
        contentBase:path.join(process.cwd(), 'dist'),
        host:'192.168.30.93',
        hot: true,
        historyApiFallback: true,
        quiet: false,
        noInfo: false,
        stats: {
            // Config for minimal console.log mess.
            assets: false,
            colors: true,
            version: false,
            hash: false,
            timings: false,
            chunks: false,
            chunkModules: false
        },
        proxy:[
            {
                context:['/user'],
                target:'http://172.17.177.60:8084/',
                changeOrigin:true,
                secure:false
            }
        ],
    }
})
//http://ci.fabigbig.com:8090/
//http://192.168.189.9:8080/
//http://172.17.177.60:8084/