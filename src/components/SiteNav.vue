<template>
<nav class="global-nav row">
  <div class="col-12 d-none d-sm-flex justify-content-between">
    <router-link to="/" type="logo" class="d-none d-sm-inline-block">
      <img src="../../images/honor-logo.png" alt="Honor.Software" />
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
  padding:0;
  @media($sm) {
    padding:1em 0;
  }
}

img {
  max-height:3em;
  margin-left:15px;
  @media($md) {margin-left:15px;}
}

a {
  color: var(--text);

  &:hover {
    text-decoration: none;
    color: var(--link-hover);
  }

  &.router-link-exact-active {
    color: #0056b3;
  }
}

.router-link-exact-active[type="logo"] {
  visibility:hidden;
}

ul {
  justify-self:flex-end;
  margin:0;
  padding:0;
  @media($sm) {margin-right:15px;}
  @media($md) {margin-right:30px;}

  li {
    display: inline-block;
    margin-left: 20px;
    list-style-type: none;
    line-height:3em;
  }
}
</style>
