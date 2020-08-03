/*
 * @Author: rh
 * @Date: 2020-07-15 19:21:45
 * @LastEditTime: 2020-07-23 16:17:32
 * @LastEditors: rh
 * @Description: 命名规范
 * @变量: - 小驼峰式命名法（前缀应当是名词）
 * @常量: - 全大写（使用大写字母和下划线来组合命名，下划线用以分割单词）
 * @函数:  - 小驼峰式命名法（前缀应当为动词）
 * @这不是一个 bug，这只是一个未列出来的特性
 */ 
export default (ctx,next)=>{
  return next().catch(err=>{
    if(err.status===401){
      ctx.status = 401
      ctx.body = {
        code:401,
        msg:'Protected resource,use Authorization header to get access'
      }
    }else {
      ctx.status = err.status || 500
      ctx.body = Object.assign(
        {
          code: 500,
          msg: err.message
        },
        process.env.NODE_ENV === 'development'
          ? {
            stack: err.stack
          }
          : {}
      )
    }
  })
}