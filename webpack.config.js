// webpack的配置文件
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 需要暴露一个对象，注意，这里用的方式还是commonjs的方式
module.exports = {
    // 模式
    mode:"development" ,//有development（开发模式）和 production（生产模式）

    // 入口
    entry:'./src/index.js',

    //出口
    output:{
        // 出口的位置，绝对路径
        path:path.resolve(__dirname,'dist'),//项目根目录下的dist文件夹
        filename:'bundle.js',//打包之后文件夹的名字
    },

    //插件
    plugins:[
        new HtmlWebpackPlugin({
            title:'webpack-vue项目',
            filename:'index_a.html',
            template:'./index.html'
        })
    ]
}