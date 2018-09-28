/**
 * 此处维护该前端项目中的常量（自动根据版本控制设置实现）
 * 允许各个版本重写常量数据（由对象的深度合并工具执行）
 * 最终各个版本的常量、默认常量、指定合并继承的常量都会导出，可选择使用
 * created by liujiang
 */
import * as utils from '../util/utils'
import '../../.control-version'
console.log(window.control)
let controlVersion = window.control.controlVersion

const data = {
  // 默认
  constantsDefault: {
    userInfo: {
      name: 'lisi',
      age: '11'
    }
  },
  // AHWOSL
  constantsAHWOSL: {
    userInfo: {
      name: 'zhangsan'
    }
  },
  // WOYS
  constantsWOYS: {
    userInfo: {
      name: 'wanger'
    }
  }
}

// 导出默认常量库
export const constantsDefault = data.constantsDefault
// 导出AHWOSL常量库
export const constantsAHWOSL = data.constantsAHWOSL
// 导出WOYS常量库
export const constantsWOYS = data.constantsWOYS

// 指定版本常量数据合并（覆盖）到默认常量库，形成默认导出
const consts = utils.deepAssign(
  {},
  data.constantsDefault,
  data['constants' + controlVersion]
)
// 导出工程配置文件中指定版本与默认配置合并后常量库，默认导出
export default consts
