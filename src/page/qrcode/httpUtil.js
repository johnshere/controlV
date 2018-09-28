import axios from '../../api/httpCore'

class httpUtil {
  sendMsg (data) {
    return axios({
      url:
        '/o2o/wsg/def/com_sitech_o2o_base_service_IBaseSendMsgCodeServiceSvc_verifyingShortMessageSend',
      data: { ROOT: { BODY: { serialNumber: '15555139680' }, HEADER: {} } },
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
    return axios({ url: 'v1/login/checklogin', params: data })
  }
  getDatapanel (data) {
    return axios({ url: 'v1/report/datapanel', params: data })
  }
  getSearchInfo (data) {
    return axios({ url: 'v1/index/search', params: data })
  }
  getTimeData (data) {
    return axios({ url: 'v1/report/paneltime', params: data })
  }
  getPhoneLoseData (data) {
    return axios({ url: 'v1/detail/phonelose', params: data })
  }

  // demo post
  postSearchInfo (data) {
    return axios.post({ url: 'v1/index/search', data })
  }
}

export default httpUtil
