const path = require('path')
const src = path.resolve(__dirname, 'src')
module.exports = {
  // 必须得定义context，否则的话，会在__dirname下
  // 生成assets
  context: src,
  entry: {
    // home: path.join(src,'scripts/home'),
    // detail: path.join(src,'scripts/detail')
    home: 'scripts/home',
    detail: 'scripts/detail'
  },
  output: {
    // path: 'assets', // 这个不行
    path: path.join(src,'assets'),
    publicPath: '/static/build/',
    filename: '[name].js',
    chunkFilename: 'bundle-[id].js'
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
