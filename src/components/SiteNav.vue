<template>
<nav class="global-nav row">
  <div class="col-12 d-none d-sm-flex justify-content-between">
    <router-link to="/" type="logo" class="d-none d-sm-inline-block">
      <img src="public/honor-logo.png" alt="Honor.Software" />
    </router-link>
    <ul>
      <li class="d-sm-none"><router-link to="/">Home</router-link></li>
      <li v-for="link in navLinks">
        <router-link :to="link.path">
          {{ link.label }}
        </router-link>
      </li>
    </ul>
  </div>
  <SpeedDial :navLinks="navLinks" />
</nav>
</template>

<script>
import SpeedDial from '@/components/SpeedDial.vue'
export default {
  name: 'SiteNav',
  components: {
    SpeedDial,
  },
  props: {
    navLinks: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped lang="scss">
nav {
  padding: 1em 0;
  @media($sm) {
    margin-top:1em;
    margin-bottom:1em;
  }
}

.router-link-exact-active[type="logo"] {
  visibility:hidden;
}

a {color:var(--text);}

ul {
  justify-self:flex-end;
  margin:0 30px 0 0;
  padding:0;

  li {
    display: inline-block;
    margin-left: 20px;
    list-style-type: none;
  }
}
</style>
