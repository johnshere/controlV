<template>
  <div>
    <p>多页面入口目录:</p>
    <a class="a"
       v-for="item in items"
       :key="item.url"
       :href="item.url">
      {{item.txt}}
    </a>
  </div>
</template>

<script>
import entries from './entry.json'

export default {
  name: 'App',
  data () {
    let items = []
    for (let key in entries) {
      items.push({ url: key + '.html', txt: key + '.html' })
    }
    return { items: items }
  }
}
</script>

<style scoped>
.p {
  font-size: 2rem;
}
.a {
  font-size: 2rem;
  display: block;
  margin-left: 6rem;
}
</style>
