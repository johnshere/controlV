import Es6Promise from 'es6-promise'

Es6Promise.polyfill()
/**
 * @description 父类；用于封装运行环境提供的能力，如：微信等等
 * @author liujiang
 * @date 2018-09-21
 * @class JSBridgeSuper
 */
class JSBridgeSuper {
  /**
   * @description 返回所有环境的名称常量
   * @author liujiang
   * @date 2018-09-25
   * @static
   * @returns string，大写的环境唯一名称标识
   * @memberof JSBridgeSuper
   */
  static get ENVS_CONSTS () {
    return { DEFAULT: 'DEFAULT', WOYS: 'WOYS' }
  }
  /**
   * @description 用于判断当前运行环境
   * @author liujiang
   * @date 2018-09-21
   * @static
   * @returns string
   * @memberof JSBridgeSuper
   */
  static judgeEnv () {
    if (Math.random() > 0.5) {
      return this.ENVS_CONSTS.WOYS
    }
    return this.ENVS_CONSTS.DEFAULT
  }
  /**
   * @description 子类必须重写，当前类用于什么环境下使用
   * @readonly
   * @memberof JSBridgeSuper
   */
  get env () {
    return this.ENVS_CONSTS.DEFAULT
  }
  /**
   * @description 调用照相机，返回promise对象
   * @author liujiang
   * @date 2018-09-21
   * @param {*} { param }
   * @memberof JSBridgeSuper
   */
  openCamera ({ param }) {
    return new Promise((resolve, reject) => {
      if (Math.random() > 0.3) {
        let response = { param: param, random: Math.random() }
        resolve(response)
      } else {
        reject(new Error('error'))
      }
    })
  }
  /**
   * @description 打开相册，返回promise对象
   * @author liujiang
   * @date 2018-09-25
   * @param {*} { param }
   * @returns Promise
   * @memberof JSBridgeSuper
   */
  openAlbum ({ param }) {
    return new Promise((resolve, reject) => {})
  }
}

export default JSBridgeSuper
