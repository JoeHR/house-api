/*
 * @Author: rh
 * @Date: 2020-07-15 19:31:55
 * @LastEditTime: 2020-08-10 19:07:21
 * @LastEditors: rh
 * @Description: 命名规范
 * @变量: - 小驼峰式命名法（前缀应当是名词）
 * @常量: - 全大写（使用大写字母和下划线来组合命名，下划线用以分割单词）
 * @函数:  - 小驼峰式命名法（前缀应当为动词）
 * @这不是一个 bug，这只是一个未列出来的特性
 */ 
import Category from '../model/Category';

class CategoryController {
  async getList (ctx) {
    const result = await Category.getList()
    ctx.body={
      code:200,
      data:result,
      msg:'success'
    }
  }

  async add(ctx){
    const {body} = ctx.request
    const category = new Category(body)
    const result  = await category.save()
    const CategoryObj = result.toJSON()
    if(result){
      ctx.body={
        code:200,
        data:CategoryObj,
        msg:'success'
      }
    }else{
      ctx.body = {
        code: 500,
        msg: '服务接口异常'
      }
    }
  }

  async updated (ctx) {
    const {body} = ctx.request
    const category  = await Category.findOne({category_code:body.category_code})
    if(!category){
      ctx.body = {
        code: 500,
        msg: '合集不存在或者分类标识category_code错误！'
      }
      return
    }
    const result  = await category.updateOne({category_code:body.category_code},body)
    if(result.ok===1&& result.nModified===1){
      ctx.body = {
        code: 200,
        msg: '更新成功'
      }
    } else {
      ctx.body = {
        code: 500,
        msg: '服务异常，更新失败'
      }
    }
  }


  async deleteCategory(ctx){
    const {body} = ctx.request
    const result = await Category.deleteOne({_id:body._id})
    ctx.body = {
      code: 200,
      msg: '删除成功',
      data: result
    }
  }
}

export default new CategoryController()