/*
 * @Author: rh
 * @Date: 2020-07-22 20:17:25
 * @LastEditTime: 2020-08-05 21:15:26
 * @LastEditors: rh
 * @Description: 命名规范
 * @变量: - 小驼峰式命名法（前缀应当是名词）
 * @常量: - 全大写（使用大写字母和下划线来组合命名，下划线用以分割单词）
 * @函数:  - 小驼峰式命名法（前缀应当为动词）
 * @这不是一个 bug，这只是一个未列出来的特性
 */
import mongoose from '../config/DBHelper'

const Schema = mongoose.Schema

const CategorySchema = new Schema({
  // 分类
  category: { type: String, default: '' },
  //合集名称
  category_desc: { type: String, default: '' },
  // 标题名称		
  category_code: { type: String, unique: true },
  // 描述		
  desc: { type: String, default: '' },
  // 标签		
  tag: { type: String, default: '' }
})


CategorySchema.statics = {
  getList:function(){
    return this.find()
  }
}

const Category = mongoose.model('Category',CategorySchema)

export default Category