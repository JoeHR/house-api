/*
 * @Author: rh
 * @Date: 2020-07-15 17:43:33
 * @LastEditTime: 2020-07-15 19:21:27
 * @LastEditors: rh
 * @Description: 命名规范
 * @变量: - 小驼峰式命名法（前缀应当是名词）
 * @常量: - 全大写（使用大写字母和下划线来组合命名，下划线用以分割单词）
 * @函数:  - 小驼峰式命名法（前缀应当为动词）
 * @这不是一个 bug，这只是一个未列出来的特性
 */ 
import Koa from 'koa'
import path from 'path'
import helmet from 'koa-helmet'
import statics from 'koa-static'
import router from './routes/routes'
import koaBody from 'koa-body'
import jsonutil from 'koa-json'
import cors from '@koa/cors'
import compose from 'koa-compose'
import compress from 'koa-compress'
import errorHandle from './common/ErrorHandle'


const app = new Koa()

// app.use(helmet())
// app.use(statics(path.join(__dirname, '../public')))
// app.use(router())

const middleware = compose([
  koaBody(),
  statics(path.join(__dirname,'../public')),
  cors(),
  jsonutil({pretty:false,param:'pretty'}),
  helmet(),
  errorHandle
])

if(process.env.NODE_ENV==='production'){
  app.use(compress())
}

app.use(middleware)
app.use(router())

app.listen(3000)