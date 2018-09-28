/**
 * 因为单页应用可能部署在不同系统中，所以可能够需要化修改配置，在该文件中配置即可
 * 公共：
 * var instance = axios.create({
 *    baseURL: 'https://api.example.com'
 * });
 * 单独：
 * instance(config)
 */
import axios from '../../api/httpCore'
// 创建实例，可在实例中配置单页应用中给的公共配置
// let instance = axios.create()
let instance = axios

class httpUtil {
  testReq (data) {
    return instance({ url: 'v1/index/search', data, method: 'put' })
  }
  sendMsg (data) {
    return instance({
      url:
        '/o2o/wsg/def/com_sitech_o2o_base_service_IBaseSendMsgCodeServiceSvc_verifyingShortMessageSend',
      data: data,
      method: 'post',
      config: {
        headers: {
          referer: 'http://test.wzt.169ol.com'
        }
      }
    })
  }
  // userinfo httpRequest
  getUserInfo (data) {
    return instance({ url: 'v1/login/checklogin', params: data })
  }
  getDatapanel (data) {
    return instance({ url: 'v1/report/datapanel', params: data })
  }
  getSearchInfo (data) {
    return instance({ url: 'v1/index/search', params: data })
  }
  getTimeData (data) {
    return instance({ url: 'v1/report/paneltime', params: data })
  }
  getPhoneLoseData (data) {
    return instance({ url: 'v1/detail/phonelose', params: data })
  }

  // demo post
  postSearchInfo (data) {
    return instance.post({ url: 'v1/index/search', data })
  }
}

export default httpUtil
