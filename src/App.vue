<template>
  <div id="app">
  <bk-heande></bk-heande>
    <router-view/>
  <bk-foorer></bk-foorer>
  </div>
</template>

<script>
import Header  from '@/components/share/head'
import Foorer  from '@/components/share/foot'

export default {
  name: 'App',
  components:{
    "bk-heande":Header,
    "bk-foorer":Foorer
  }
}
</script>

<style>
#app {
  
}
</style>
