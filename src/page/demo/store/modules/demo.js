import * as types from './mutation-types'

// keep some variable，same as data in vue
const state = {
  userInfo: 1, // 用户信息
  shopid: null, // 商铺id
  remarkText: 19, // 可选备注内容
  Localkey: null,
  searchHis: [],
  searchFlag: 0
}
// get something
const getters = {
  getUserInfo: state => state.userInfo,
  getShopid: state => state.shopid,
  remark: state => {
    return state.remarkText
  },
  getLocalStorage: state => {
    return localStorage.getItem(state.Localkey) === ''
      ? localStorage.getItem(state.Localkey)
      : null
  }
}

// commit something
const mutations = {
  [types.DEMO.CLEAR_REMARK] (state) {
    state.remarkText = null
  },
  [types.DEMO.UPDATE_REMARK] (state, res) {
    state.remarkText = res
  },
  [types.DEMO.UPDATE_REMARK_F] (state, res) {
    state.remarkText = res
  },
  [types.DEMO.UPDATE_LOCAL] (state, res) {
    state.Localkey = res
  },
  [types.DEMO.UPDATE_USERINFO] (state) {
    state.userInfo++
  }
}

const actions = {
  upRemark ({ state, commit }, remark) {
    // 备份
    const remarkBackup = state.remark
    // 清理
    commit(types.DEMO.CLEAR_REMARK)

    test(
      remark,
      () => commit(types.DEMO.UPDATE_REMARK, remark), // 成功更新
      () => commit(types.DEMO.UPDATE_REMARK_F, remarkBackup)
    ) // 回复备份
  }
}

function test (data, successFn, failFn) {
  if (Math.random() > 0.1) {
    successFn()
  } else {
    failFn()
  }
}

export default {
  state,
  actions: actions,
  getters,
  mutations
}
