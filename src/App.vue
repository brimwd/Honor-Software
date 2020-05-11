<template>
  <div id="app" class="container-fluid">
    <Toast :content="toast" />
    <SiteNav :navLinks="navLinks" />
    <router-view
      class="page-content"
    />
    <Footer class="footer" />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import SiteNav from '@/components/SiteNav.vue'
import Toast from '@/components/Toast.vue'

export default {
  components: {
    Footer,
    SiteNav,
    Toast,
  },
  data() {
    return {
      toast: {
        message: "Our response to Covid-19",
        path: "news/covid-19.html",
      },
      navLinks: [
        { label: "News", path: "/news/", },
        { label: "Customers", path: "/customers/", },
        { label: "Contact", path: "/contact/", },
        { label: "About", path: "/about/", },
        // { label: "Products", path: "/products/", },
        // { label: "Services", path: "/services/", },
        // { label: "Resources", path: "/resources/", },
      ]
    };
  },
}
</script>

<style lang="scss">
$headerHeight: 60px;
$footerHeight: 120px;
$headerPlusFooterHeight: calc(#{$headerHeight} + #{$footerHeight});
$routerViewMinHeight: calc(100vh - #{$headerPlusFooterHeight});

#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &:hover {
            text-decoration: none;
        }

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}

.page-content {
    min-height: $routerViewMinHeight;
}
</style>
