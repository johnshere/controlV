<template>
  <div>
    <p class="big">{{msg}}</p>
    <a @click="toDetailShow"
       href="javascript:;">to detailShow</a>
  </div>
</template>

<script>
// 引入运行平台能力
import JSBridge from '@/api/JSBridgeCore'

export default {
  data () {
    return { msg: 'welcome to demo' }
  },
  mounted () {
    console.log(JSBridge())
    JSBridge().openCamera({ param: '2132' })
      .then(response => {
        console.log(response)
      }).catch(msg => {
        console.log(msg)
      })
  },
  methods: {
    toDetailShow () {
      console.log(this)
      this.$router.push({
        name: 'detailShow',
        params: { params: 'params' },
        query: { query: 'query' } })
    }
  }
}
</script>

<style scoped>
.big {
  font-size: 26px;
}
</style>
