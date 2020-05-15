<template>
<nav class="global-nav row">
  <div class="col-12 d-none d-sm-block d-md-flex justify-content-between">
    <router-link to="/" type="logo">
      <img src="../../images/honor-logo-long.png" alt="Honor.Software" class="d-block d-md-none"/>
      <img src="../../images/honor-logo.png" alt="Honor.Software" class="d-none d-md-block"/>
    </router-link>
    <ul class="d-sm-flex justify-content-center align-items-center">
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
  max-width:70vw;
  margin:1em auto;
  @media($md) {
    margin-left:15px;
    max-height:3em;
  }
}

a {
  color: var(--text);

  &:hover {
    text-decoration: none;
    color: var(--link-hover);
  }

  &.router-link-exact-active {
    color: var(--link-hover);
  }
}

[type="logo"] {
  display:none;
  @media($sm) {display:block;}
  @media($md) {display:inline-block;}

  &.router-link-exact-active {
    display:none;
    @media($md) {
      display:inline-block;
      visibility:hidden;
    }
  }
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
