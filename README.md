# learnWebpack
webpacl + npm script 实例项目

# 启动项目

`npm start`

# 一个坑

`ERROR in multi home
Module not found: Error: Cannot resolve module 'webpack/hot/dev-server' in /Users/liyanfeng/study/learnWebpack/src`

解决这个问题的办法是在`webpack.config.js`中

```javascript
devServer: {
  historyApiFallback: true,
  hot: false, // 注意这个一定要设置成false，否则就报上述错误
  inline: true,
  progress: true
},
```
