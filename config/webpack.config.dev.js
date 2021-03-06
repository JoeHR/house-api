/*
 * @Author: rh
 * @Date: 2020-07-15 18:55:27
 * @LastEditTime: 2020-07-16 12:42:28
 * @LastEditors: rh
 * @Description: 命名规范
 * @变量: - 小驼峰式命名法（前缀应当是名词）
 * @常量: - 全大写（使用大写字母和下划线来组合命名，下划线用以分割单词）
 * @函数:  - 小驼峰式命名法（前缀应当为动词）
 * @这不是一个 bug，这只是一个未列出来的特性
 */ 
const {merge} =require('webpack-merge')

const baseWebpackConfig = require('./webpack.config.base')
console.log('baseWebpackConfig', baseWebpackConfig)

module.exports = merge(baseWebpackConfig,{
  mode:'development',
  devtool:'eval-source-map',
  stats:{children:false}
})