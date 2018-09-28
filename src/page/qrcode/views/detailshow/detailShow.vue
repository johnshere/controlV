<template>
  <div>
    <img src="@/assets/logo.png">
    <p class="big black">{{msg}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return { msg: 'this is qrcode detail page.....' }
  }
}
</script>

<style scoped>
.big {
  font-size: 26px;
}
.black {
  color: black;
}
</style>
