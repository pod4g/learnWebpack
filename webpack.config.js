const path = require('path')
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'src')
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
module.exports = {
  // 必须得定义context，否则的话，会在__dirname下
  // 生成assets
  context: APP_PATH,
  entry: {
    // home: path.join(src,'scripts/home'),
    // detail: path.join(src,'scripts/detail')
    home: 'scripts/home',
    detail: 'scripts/detail'
  },
  output: {
    // path: 'assets', // 这个不行
    path: path.join(APP_PATH,'assets'),
    publicPath: '/static/build/',
    filename: '[name].js',
    chunkFilename: 'bundle-[id].js'
  },
  module: {
    loaders: [{
        test: /\.scss$/,
        loaders: ['style','css','sass']
      }, {
          test: /\.jsx?$/,
          loader: 'babel',
          include: APP_PATH,
          query: {
            presets: ['es2015']
          }
      }],
    plugins: [
      new ExtractTextPlugin("[name].css")
    ]
  },
  resolve: {
    // 告诉webpack所有模块的启始目录由当前目录开始，再执行下webpack就可以正常输出了：
    modulesDirectories: ['.']
  },
  devServer: {
    historyApiFallback: true,
    hot: false,
    inline: true,
    progress: true
  },
}
