/*
 * @Author: rh
 * @Date: 2020-07-22 20:17:25
 * @LastEditTime: 2020-08-10 19:35:57
 * @LastEditors: rh
 * @Description: 命名规范
 * @变量: - 小驼峰式命名法（前缀应当是名词）
 * @常量: - 全大写（使用大写字母和下划线来组合命名，下划线用以分割单词）
 * @函数:  - 小驼峰式命名法（前缀应当为动词）
 * @这不是一个 bug，这只是一个未列出来的特性
 */
import mongoose from '../config/DBHelper'

const Schema = mongoose.Schema

const CollectSchema = new Schema({
  // 分类
  en: { type: String, default: '' },
  //合集名称
  name: { type: String, default: '' },
  // 标题名称		
  title: { type: String, default: '' },
  // 描述		
  desc: { type: String, default: '' },
  // 标签		
  tag: { type: String, default: '' },
  // 合集分类
  category_code: { type: Schema.Types.String, ref: 'Category' }
})


CollectSchema.statics = {
  getList:function(options){
    return this.find(options)
  }
}

const Collect = mongoose.model('Collect',CollectSchema)

export default Collect