/*
 * @Author: rh
 * @Date: 2020-07-15 19:26:43
 * @LastEditTime: 2020-07-23 11:03:01
 * @LastEditors: rh
 * @Description: 命名规范
 * @变量: - 小驼峰式命名法（前缀应当是名词）
 * @常量: - 全大写（使用大写字母和下划线来组合命名，下划线用以分割单词）
 * @函数:  - 小驼峰式命名法（前缀应当为动词）
 * @这不是一个 bug，这只是一个未列出来的特性
 */ 
import combineRoutes from 'koa-combine-routers'
import HouseRouter from './modules/HouseRouter'
import CollectRouter from './modules/CollectRouter'
// import requireContext from 'require-context'
// console.log('requireContext', requireContext)



// const moduleFiles =require.context('./modules',true,/\.js$/)

// const modules = moduleFiles.keys().reduce((items,path)=>{
//   const value = moduleFiles(path)
//   items.push(value.default)
//   return items
// },[])

// export default combineRoute(modules)

export default combineRoutes(
  HouseRouter,
  CollectRouter
)