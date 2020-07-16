/*
 * @Author: rh
 * @Date: 2020-07-15 19:36:49
 * @LastEditTime: 2020-07-16 10:25:08
 * @LastEditors: rh
 * @Description: 命名规范
 * @变量: - 小驼峰式命名法（前缀应当是名词）
 * @常量: - 全大写（使用大写字母和下划线来组合命名，下划线用以分割单词）
 * @函数:  - 小驼峰式命名法（前缀应当为动词）
 * @这不是一个 bug，这只是一个未列出来的特性
 */ 
import mongoose from 'mongoose'
import config from './index'


mongoose.set('useCreateIndex',true)

mongoose.connect(config.DB_URL,{
  useNewUrlParser:true,
  useUnifiedTopology:true
})

mongoose.connection.on('connected',()=>{
  console.log(`Mongoose connection open to ${config.DB_URL}`)
})


mongoose.connection.on('error',(err)=>{
  console.log(`Mongoose connection error: ${err}`)
})

mongoose.connection.on('disconnected',()=>{
  console.log('Mongoose connection disconnected')
})

export default mongoose