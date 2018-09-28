import axios from 'axios'
import Es6Promise from 'es6-promise'

Es6Promise.polyfill()

//  add request interceptors
axios.interceptors.request.use(
  function (config) {
    // 处理post请求格式，适配后台框架
    if (config.method.toUpperCase() === 'POST' && config.data) {
      config.data = { ROOT: { BODY: config.data, HEADER: {} } }
    }

    console.log('config', config)
    // before request
    // 20171120 update by shenjb
    // -> 1. add new method for debug(file|proxy). so the flag 'mocker' useless
    // config.url = process.env.NODE_ENV === 'production' ? config.url :
    //   ((config.url.indexOf('mocker')) !== -1) ? config.url : 'mocker/' + config.url
    return config
  },
  function (error) {
    console.log('error', error)
    // request error do something
    return Promise.reject(error)
  }
)

// add response interceptors
axios.interceptors.response.use(
  function (response) {
    console.log('response', response)
    // do something,etc login
    if (response.data.retCode === '009999') {
      // add sso login
    }
    // 返回数据节点收缩  add by liujiang
    if (response.ROOT && response.ROOT.BODY) {
      return response.ROOT.BODY
    }
    return response
  },
  function (error) {
    // error do something
    return Promise.reject(error)
  }
)

export default axios
