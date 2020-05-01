<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <SiteNav msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import SiteNav from '@/components/SiteNav.vue'

export default {
  name: 'Home',
  components: {
    SiteNav,
  }
}
</script>
