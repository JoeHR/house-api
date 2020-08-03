/*
 * @Author: rh
 * @Date: 2020-07-23 11:03:06
 * @LastEditTime: 2020-07-23 11:06:03
 * @LastEditors: rh
 * @Description: 命名规范
 * @变量: - 小驼峰式命名法（前缀应当是名词）
 * @常量: - 全大写（使用大写字母和下划线来组合命名，下划线用以分割单词）
 * @函数:  - 小驼峰式命名法（前缀应当为动词）
 * @这不是一个 bug，这只是一个未列出来的特性
 */ 
import Router from 'koa-router'
import collectController from '../../api/CollectController'

const router  = new Router()

router.prefix('/collect')

router.get('/list',collectController.getList)

router.post('/add',collectController.add)

router.post('/update',collectController.updated)

router.post('/delete',collectController.deleteCollect)

export default router