import Vue from 'vue'
// 引入i18n国际化插件
import VueI18n from 'vue-i18n'
import zh from './assets/languages/zh.json' // 中文
import en from './assets/languages/en.json' // 英文

Vue.use(VueI18n)

// 注册i18n实例并引入语言文件，文件格式等下解析
export default new VueI18n({
  locale: 'zh',
  messages: {
    zh: zh,
    en: en
  }
})
