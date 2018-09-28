<template>
  <div>
    <img src="@/assets/logo.png">
    <p class="big">{{msg}}</p>
    <router-link to="/detailShow">to detailShow</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return { msg: 'welcome to qrcode demo' }
  }
}
</script>

<style scoped>
.big {
  font-size: 26px;
}
</style>
