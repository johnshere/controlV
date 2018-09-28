<template>
  <div>
    <p class="big black">{{msg}}</p>
    <p class="big black">store -- $store.state.demo.remarkText : {{remarkText}};;;;;</p>
    <p class="big black">repeat -- $store.state.demo.remarkText : {{remarkText}};;;;;</p>
    <blockquote class="cursor"
                @click="goBack">go history back</blockquote>

    <p>{{$t(" test ")}}
    </p>
    <input @click="changeLang"
           value="改变语言"
           type="button">
    <blockquote class="cursor"
                v-on:click="testHttp1">test req</blockquote>
    <blockquote class="cursor"
                v-on:click="testHttp">点击发送短信验证码</blockquote>
    <input v-model="phone"><br/>
    <textarea class="ta"
              v-model="resp"></textarea>
    <img :src="imgurl">
  </div>
</template>

<script>
import { DEMO } from '../../store/modules/mutation-types'

// import { mapGetters } from 'vuex'

export default {
  data () {
    return { msg: 'this is detail page.....', phone: '15555139680', resp: '', imgurl: '' }
  },
  computed: {
    remarkText () {
      let r = this.$store.getters.remark + 21423
      console.log('computed', r)
      return r
    },
    phoneNo () {
      return '86' + this.phone
    }
  },
  mounted () {
    window.testVue = this
    console.log('mounted this.$route.params', this.$route.params)
    console.log('mounted this.$consts', this.$consts)
    console.log('mounted', this.remarkText, this)
    setInterval(() => {
      this.imgurl = Math.random() > 0.5 ? require('../../assets/images/timg2.png') : require('../../assets/images/tis.png')
    }, 1000)
    let i = this.remarkText
    let index = setInterval(() => {
      this.$store.commit(DEMO.UPDATE_REMARK, i++)
    }, 2000)
    setTimeout(() => {
      console.log('mounted', this.remarkText)

      window.clearInterval(index)
      // alert('阻断显示')
      upRemark()
    }, 6000)

    let upRemark = () => {
      let index = setInterval(() => {
        this.$store.dispatch('upRemark', --i)
      }, 2000)
      setTimeout(() => {
        window.clearInterval(index)
      }, 10000)
    }
  },
  methods: {
    changeLang () {
      this.$i18n.locale = this.$i18n.locale === 'zh' ? 'en' : 'zh'
    },
    goBack () {
      this.$router.go(-1)
    },
    testHttp1 (event, item) {
      this.$http.testReq({ ttt: '33' })
    },
    testHttp (event, item) {
      console.log(event, item)
      console.log(this)
      this.$http.sendMsg({ serialNumber: '15555139680' })
        .then((resp) => {
          this.resp = JSON.stringify(resp)
        }).catch((resp) => {
          this.resp = JSON.stringify(resp)
        })
    }
  }
}
</script>

<style scoped>
.ta {
  height: 250px;
  width: 700px;
}
.cursor {
  cursor: pointer;
}
.big {
  font-size: 26px;
}
.black {
  color: black;
}
</style>
