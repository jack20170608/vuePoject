// this is a normal js file, thougth the node 's module operation, export a config object to webpack

const path = require('path');

module.exports = {
    //need to set up the entrance and exit
    // 入口 表示 要使用webpack 打包哪个文件
    entry: path.join(__dirname, './src/main.js') ,
    output: {
        // 指定打包好的文件输出到哪个目录中去
        path: path.join(__dirname, './dist'),
        // 指定输出的文件名称
        filename: 'bundle.js'
    }
}

