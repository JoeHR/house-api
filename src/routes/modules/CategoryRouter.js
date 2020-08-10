/*
 * @Author: rh
 * @Date: 2020-07-23 11:03:06
 * @LastEditTime: 2020-08-10 09:47:03
 * @LastEditors: rh
 * @Description: 命名规范
 * @变量: - 小驼峰式命名法（前缀应当是名词）
 * @常量: - 全大写（使用大写字母和下划线来组合命名，下划线用以分割单词）
 * @函数:  - 小驼峰式命名法（前缀应当为动词）
 * @这不是一个 bug，这只是一个未列出来的特性
 */ 
import Router from 'koa-router'
import categoryController from '../../api/CategoryController'

const router  = new Router()

router.prefix('/category')

router.get('/list',categoryController.getList)

router.post('/add',categoryController.add)

router.post('/update',categoryController.updated)

router.post('/delete',categoryController.deleteCategory)

export default router