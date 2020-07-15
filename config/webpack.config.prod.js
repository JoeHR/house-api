/*
 * @Author: rh
 * @Date: 2020-07-15 19:05:38
 * @LastEditTime: 2020-07-15 19:10:24
 * @LastEditors: rh
 * @Description: 命名规范
 * @变量: - 小驼峰式命名法（前缀应当是名词）
 * @常量: - 全大写（使用大写字母和下划线来组合命名，下划线用以分割单词）
 * @函数:  - 小驼峰式命名法（前缀应当为动词）
 * @这不是一个 bug，这只是一个未列出来的特性
 */ 
const webpackMerge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.config.base')

const TerserWebpackPlugin = require('terser-webpack-plugin')

module.exports=webpackMerge(baseWebpackConfig,{
  mode:'production',
  stats:{children:false,warnings:false},
  optimization:{
    minimizer:[
      new TerserWebpackPlugin({
        terserOptions:{
          warnings:false,
          compress:{
            warnings:false,
            drop_console:false,
            dead_code:true,
            drop_debugger:true
          },
          output:{
            comments:false,
            beautify:false,
          },
          mangle:true
        },
        parallel:true,
        sourceMap:false
      })
    ],
    splitChunks:{
      cacheGroups:{
        commons:{
          name:'commons',
          chunks:'initial',
          minChunks:3,
          enforce:true
        }
      }
    }
  }
})