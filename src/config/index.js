/*
 * @Author: rh
 * @Date: 2020-07-15 19:33:57
 * @LastEditTime: 2020-07-15 19:36:24
 * @LastEditors: rh
 * @Description: 命名规范
 * @变量: - 小驼峰式命名法（前缀应当是名词）
 * @常量: - 全大写（使用大写字母和下划线来组合命名，下划线用以分割单词）
 * @函数:  - 小驼峰式命名法（前缀应当为动词）
 * @这不是一个 bug，这只是一个未列出来的特性
 */ 
const DB_URL = 'mongodb://test:123456@116.62.114.170:27017/housedb'

const REDIS = {
  host:'116.62.114.170',
  port:15001,
  password:'123456'
}

export default{
  DB_URL,
  REDIS
}