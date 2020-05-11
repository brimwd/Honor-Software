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

/* LIGHT */
$bg-l-1: url('../images/bg/light/brickwall_@2X.png');
  $bg-l-1s: url('../images/bg/light/brickwall.png');
/* match */ $bg-l-2: url('../images/bg/light/so-white.png');
$bg-l-3: url('../images/bg/light/cheap_diagonal_fabric.png');
$bg-l-4: url('../images/bg/light/concrete_seamless.png');
$bg-l-5: url('../images/bg/light/dot-grid.png');
$bg-l-6: url('../images/bg/light/gravel.png');
/* match */ $bg-l-7: url('../images/bg/light/hotel-wallpaper.png');
$bg-l-8: url('../images/bg/light/interlaced.png');
$bg-l-9: url('../images/bg/light/old_moon_@2X.jpg');
  $bg-l-9s: url('../images/bg/light/old_moon.png');
$bg-l-10: url('../images/bg/light/papyrus.png');
$bg-l-11: url('../images/bg/light/positive.png');
$bg-l-12: url('../images/bg/light/tic-tac-toe.png');
$bg-l-13: url('../images/bg/light/topography.png');
$bg-l-14: url('../images/bg/light/wet_snow_@2X.png');
  $bg-l-14s: url('../images/bg/light/wet_snow.png');

/* DARK */
$bg-d-1: url('../images/bg/dark/debut_dark_@2X.png');
  $bg-d-1s: url('../images/bg/dark/debut_dark.png');
/* match */ $bg-d-2: url('../images/bg/dark/ep_naturalblack.png');
$bg-d-3: url('../images/bg/dark/stardust_@2X.png');
  $bg-d-3s: url('../images/bg/dark/stardust.png');
$bg-d-4: url('../images/bg/dark/navy_blue_@2X.png');
  $bg-d-4s: url('../images/bg/dark/navy_blue.png');
$bg-d-5: url('../images/bg/dark/dot-grid-dark.png');
$bg-d-6: url('../images/bg/dark/prism.png');
/* match */ $bg-d-7: url('../images/bg/dark/hotel-wallpaper-black.png');
$bg-d-8: url('../images/bg/dark/webb-dark.png');
$bg-d-9: url('../images/bg/dark/y-so-serious.png');
$bg-d-10: url('../images/bg/dark/oriental-tiles.png');

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
