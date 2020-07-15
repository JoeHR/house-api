/*
 * @Author: rh
 * @Date: 2020-07-15 17:48:19
 * @LastEditTime: 2020-07-15 17:51:46
 * @LastEditors: rh
 * @Description: 命名规范
 * @变量: - 小驼峰式命名法（前缀应当是名词）
 * @常量: - 全大写（使用大写字母和下划线来组合命名，下划线用以分割单词）
 * @函数:  - 小驼峰式命名法（前缀应当为动词）
 * @这不是一个 bug，这只是一个未列出来的特性
 */ 
const path = require('path')

exports.resolve = function resolve(dir){
  return path.join(__dirname,'..',dir)
}

exports.APP_PATH = exports.resolve('src')
exports.DIST_PATH = exports.resolve('dist')


exports.getWebpackResolveConfig = function(customAlias = {}){
  const appPath = exports.APP_PATH

  return {
    modules:[appPath,'node_modules'],
    extensions:['.js','.json'],
    alias:{
      '@':appPath,
      ...customAlias
    }
  }
}