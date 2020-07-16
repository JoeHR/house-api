/*
 * @Author: rh
 * @Date: 2020-07-16 11:27:18
 * @LastEditTime: 2020-07-16 12:32:36
 * @LastEditors: rh
 * @Description: 命名规范
 * @变量: - 小驼峰式命名法（前缀应当是名词）
 * @常量: - 全大写（使用大写字母和下划线来组合命名，下划线用以分割单词）
 * @函数:  - 小驼峰式命名法（前缀应当为动词）
 * @这不是一个 bug，这只是一个未列出来的特性
 */
import mongoose from '../config/DBHelper'
import moment from 'dayjs'

const Schema = mongoose.Schema

const HouseSchema = new Schema({
  // 房子楼盘名称
  loupan: { type: String, index: { unique: true }, sparse: true },
  // 楼盘位置信息
  address: { type: String, default:null },
  // 房子面积
  area: { type: String,default:null },
  // 房子户型
  areaType: { type: String,default:null },
  // 房子装修情况
  decoration: { type: String,default:null },
  // 交通情况
  traffic: { type: String,default:null },
  // 总价
  totalPrice: { type: String ,default:null},
  // 单价
  price: { type: Number,default:0 },
  // 首付
  payNow: { type: String,default:null },
  // 教育情况
  edu: { type: String ,default:null},
  // 电梯
  lift: { type: String,default:null },
  // 其它
  other: { type: String,default:null },
  // 评价
  tell: { type: String ,default:null},
  // 所在行政区划
  regName: { type: String ,default:null},
  // 
  list: { type: Array ,default:[]},
  //开盘时间,
  saleTime: { type: Date,default:null },
  // 记录时间
  createdTime:{type:Date}
})

HouseSchema.pre('save',function (next){
  this.createdTime = moment().format('YYYY-MM-DD HH:mm:ss')
  next()
})

HouseSchema.statics = {
  getList:function(){
    return this.find()
  }
}

const House = mongoose.model('house',HouseSchema)

export default House