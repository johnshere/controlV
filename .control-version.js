/**
 * 前端工程开发的项目发布版本配置文件
 * created by liujiang
 */
/**
 * @description 默认控制配置
 * @author liujiang
 * @date 2018-09-26
 * @class Control
 */
class Control {
  constructor() {
    // 分支版本标识符号，需要在constants和JSBridge中创建对应的实例
    this.controlVersion = 'DEFAULT'
    // 如果作为子工程，必须有一个路径识别，这里用于添加url前缀 -- add by liujiang
    // 生产版本发布时，指定地址路径的前缀
    // 即在页面路径和资源提取的路径中加上这个前缀
    this.urlPrefix = 'apptest' // 该访问路径为：“http://domain/apptest/xxx.html”
    /**
     * 是否指定生产发布某些单页应用（spa），
     * false：不指定；全部发布
     * Array：指定，如：['demo']
     */
    this.targetPages = ['demo']
  }
}
/**
 * @description 发布到AHWOSL
 * @author liujiang
 * @date 2018-09-26
 * @class ControlAHWOSL
 * @extends {Control}
 */
class ControlAHWOSL extends Control {
  constructor() {
    super()
    this.controlVersion = 'AHWOSL'
    this.urlPrefix = 'ahwosl'
  }
}
/**
 * @description 发布到WOYS
 * @author liujiang
 * @date 2018-09-26
 * @class ControlWOYS
 * @extends {Control}
 */
class ControlWOYS extends Control {
  constructor() {
    super()
    // 控制分支版本标识为“WOYS”，需要在constants和JSBridge创建对应的实例
    this.controlVersion = 'WOYS'
    // 指定发布后url为“http://domain/suggestion/xxx.html”
    this.urlPrefix = 'suggestion'
    // 仅发布APP这个单页应用
    this.targetPages = ['app']
  }
}

/**
 * 选择某个做配置
 */
const control = new ControlWOYS()

if (typeof window !== 'undefined') {
  console.log('window')
  //浏览器环境
  /**
   * 这里是特殊处理，正常该文件是在node环境运行，但是在判断省份常量数据时，这里
   * 会在浏览器上使用，用于区分省份数据
   */
  window.control = control
} else {
  console.log('node')
  //node环境
  module.exports = control
}
