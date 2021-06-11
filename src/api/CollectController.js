/*
 * @Author: rh
 * @Date: 2020-07-15 19:31:55
 * @LastEditTime: 2020-08-10 19:34:20
 * @LastEditors: rh
 * @Description: 命名规范
 * @变量: - 小驼峰式命名法（前缀应当是名词）
 * @常量: - 全大写（使用大写字母和下划线来组合命名，下划线用以分割单词）
 * @函数:  - 小驼峰式命名法（前缀应当为动词）
 * @这不是一个 bug，这只是一个未列出来的特性
 */
import Collect from '../model/collect';
import qs from 'qs'

class CollectController {
  async getList (ctx) {
    const body = qs.parse(ctx.query)
    const options = {}
    if(body.category_code && typeof body.category_code === 'string'){
      options.category_code = body.category_code
    }
    const result = await Collect.getList(options)
    ctx.body={
      code:200,
      data:result,
      msg:'success'
    }
  }

  async add(ctx){
    const {body} = ctx.request
    const collect = new Collect(body)
    const result  = await collect.save()
    const collectObj = result.toJSON()
    if(result){
      ctx.body={
        code:200,
        data:collectObj,
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
    const collect  = await Collect.findOne({_id:body._id})
    if(!collect){
      ctx.body = {
        code: 500,
        msg: '合集不存在或者id信息错误！'
      }
      return
    }
    const result  = await Collect.updateOne({_id:body._id},body)
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


  async deleteCollect(ctx){
    const {body} = ctx.request
    const result = await Collect.deleteOne({_id:body._id})
    ctx.body = {
      code: 200,
      msg: '删除成功',
      data: result
    }
  }
}

export default new CollectController()
