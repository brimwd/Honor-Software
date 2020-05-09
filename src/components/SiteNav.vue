<template>
<nav class="global-nav row">
  <div class="col-12 d-flex justify-content-between">
    <router-link to="/">
      <img src="public/honor-logo.png" alt="Honor.Software" />
    </router-link>
    <ul>
      <li v-for="link in navLinks">
        <router-link :to="link.path">
          {{ link.label }}
        </router-link>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
  name: 'SiteNav',
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

ul {
  margin:0;
  justify-self:flex-end;

  li {
    display: inline-block;
    margin-left: 20px;
    list-style-type: none;
  }
}
</style>
