/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

/**
 * 获取localStorage
 */
export const getStore = name => {
  if (!name) return
  return window.localStorage.getItem(name)
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
  if (!name) return
  window.localStorage.removeItem(name)
}
/**
 * 单位换算
 */
export const formateData = (data, inx, fla) => {
  if (typeof data === 'undefined' || data == null) return
  var tep = data.indexOf('.')
  if (tep !== -1) {
    data = data.substring(0, tep)
  }
  // 超过5位数换算成万
  // 超过8位，换算成亿
  var len = data.toString().length
  var flag
  if (fla === 1) {
    flag = len > 4 ? 1 : 1
  } else {
    flag = len > 8 ? 2 : (len > 4 ? 1 : 0)
  }
  var retData = data
  switch (flag) {
    case 1:
      if (inx === 1) {
        retData = (parseFloat(data) / 10000).toFixed(1) + '<span>万</span>'
      } else if (inx === 2) {
        retData = (parseFloat(data) / 10000).toFixed(1)
      } else if (inx === 3) {
        retData = (parseFloat(data) / 10000).toFixed(1) + '万'
      } else if (inx === 4) {
        retData = (parseFloat(data) / 10000).toFixed(1) + '\n   万次'
      }

      break
    case 2:
      if (inx === 1) {
        retData = (parseFloat(data) / 100000000).toFixed(1) + '<span>亿</span>'
      } else if (inx === 2) {
        retData = (parseFloat(data) / 100000000).toFixed(1)
      } else if (inx === 3) {
        retData = (parseFloat(data) / 100000000).toFixed(1) + '亿'
      } else if (inx === 4) {
        retData = (parseFloat(data) / 100000000).toFixed(1) + '\n   亿次'
      }
      break
    default:
      retData = data
      break
  }
  return retData
}
