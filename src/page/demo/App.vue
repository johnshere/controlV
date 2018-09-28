<template>
  <div>
    <img src="@/assets/logo.png">
    <div>test sdhfashdu</div>
    <transition :enter-active-class="roll"
                :leave-active-class="rollOut">
      <!-- enter-active-class="bounceInRight"
                mode="out-in" -->
      <!-- leave-active-class="bounceOutLeft" -->
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return { roll: 'bounceInLeft', rollOut: 'bounceOutRight' }
  },
  mounted () {
    console.log(this)
  },
  watch: {
    $route (to, from) {
      let fromDepth = from.path.split('/').length
      let toDepth = to.path.split('/').length
      if (toDepth === fromDepth) {
        this.roll = ''
      } else if (toDepth > fromDepth) {
        this.roll = 'bounceInRight'
        this.rollOut = 'bounceOutLeft'
      } else {
        this.roll = 'bounceInLeft'
        this.rollOut = 'bounceOutRight'
      }
      console.log(this.roll)
    }
  }
}
</script>

<style scoped>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
.left-enter {
  transform: translateX(100%);
}
.left-enter-to {
  transform: translateX(0);
}
.left-enter-active {
  transition: 0.2s;
}
.left-leave {
  transform: translateX(0);
}
.left-leave-to {
  transform: translateX(-100%);
}
.left-leave-active {
  transition: 0.2s;
}
.right-enter {
  transform: translateX(-100%);
}
.right-enter-to {
  transform: translateX(0);
}
.right-enter-active {
  transition: 0.2s;
}
.right-leave {
  transform: translateX(0);
}
.right-leave-to {
  transform: translateX(100%);
}
.right-leave-active {
  transition: 0.2s;
}
.container {
  overflow: hidden;
}
</style>
