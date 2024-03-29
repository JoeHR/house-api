/*
 * @Author: rh
 * @Date: 2020-07-15 19:33:57
 * @LastEditTime: 2020-07-16 12:18:10
 * @LastEditors: rh
 * @Description: 命名规范
 * @变量: - 小驼峰式命名法（前缀应当是名词）
 * @常量: - 全大写（使用大写字母和下划线来组合命名，下划线用以分割单词）
 * @函数:  - 小驼峰式命名法（前缀应当为动词）
 * @这不是一个 bug，这只是一个未列出来的特性
 */
import path from 'path'
const DB_URL = 'mongodb://shroom:11aaBBCC@121.5.130.129:27017/shroomdb'
// const uploadPath = process.env.NODE_ENV === 'production' ? '/app/public' : path.join(path.resolve(__dirname), '../../public')
const uploadPath = path.join(path.resolve(__dirname), '../../public')

const REDIS = {
  host:'121.5.130.129',
  port:15001,
  password:'11aaBBCC'
}

export default{
  DB_URL,
  REDIS,
  uploadPath
}
