import JSBridgeSuper from './JSBridgeSuper'
import JSBridgeWOYS from './JSBridgeWOYS'
import JSBridgeAHWOSL from './JSBridgeAHWOSL'
/**
 * @description 返回一个实例对象，该对象已经判断判断了对应环境
 * @author liujiang
 * @date 2018-09-22
 * @static
 * @param {string} targetEnv 非必传，手动指定对应环境；不传则自动判断
 * @returns JSBridgeSuper在对应env中的实例
 * @memberof JSBridgeSuper
 */
export default targetEnv => {
  // todo 暂时用于测试
  !targetEnv && (targetEnv = 'WOYS')

  let bridgeWOYS = new JSBridgeWOYS() // JSBridge实例-WOYS
  let bridgeAHWOSL = new JSBridgeAHWOSL() // JSBridge实例-AHWOSL
  switch (targetEnv) {
    case bridgeWOYS.env:
      return bridgeWOYS
    case bridgeAHWOSL.env:
      return bridgeAHWOSL
    default:
      return new JSBridgeSuper()
  }
}
