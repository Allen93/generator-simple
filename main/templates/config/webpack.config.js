//  TODO: 需要做的是对所有文件的加载支持es6, 对webpack使用不熟悉 暂时放弃webpack的方案。
var path = require('path');
module.exports = {
    entry: './test/test.js',
    output: {
        path: path.join(__dirname, 'temp/'),
        filename: "main.js"
    },    module: {
      loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['es2015']
        }
      }]
    }
  };