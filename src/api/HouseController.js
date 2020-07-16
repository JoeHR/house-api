/*
 * @Author: rh
 * @Date: 2020-07-15 19:31:55
 * @LastEditTime: 2020-07-16 12:34:59
 * @LastEditors: rh
 * @Description: 命名规范
 * @变量: - 小驼峰式命名法（前缀应当是名词）
 * @常量: - 全大写（使用大写字母和下划线来组合命名，下划线用以分割单词）
 * @函数:  - 小驼峰式命名法（前缀应当为动词）
 * @这不是一个 bug，这只是一个未列出来的特性
 */ 
import House from '../model/House'

class HouseController {

  async getList (ctx) {
    const house  = new House({
      "loupan": "建发.金茂|与玺悦",
      "address":"3环外-黄家湖",
      "area":"110",
      "range": "",
      "decoration": "毛坯",
      "traffic": "无地铁",
      "totalPrice":"",
      "price": 1.27,
      "payNow":"",
      "edu": "",
      "life": "",
      "other": "",
      "tell": "",
      "type": "jiangxia",
      "list": []
    })

    const temp = await house.save()
    console.log('HouseController -> getList -> temp', temp)

    const result = await House.getList()
    ctx.body={
      code:200,
      data:result,
      msg:'success'
    }
  }
}

export default new HouseController()