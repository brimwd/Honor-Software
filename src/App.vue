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
        headline: "Our response to Covid-19",
        message: "Honor.Software is committed to investing in continuing education and giving back to the community. By hiring out tasks that we typically handle in-house, Honor is creating temporary jobs and opportunities to replace income for individuals who have lost income due to COVID-19. Additionally, Honor is proud to continue supporting our community-education partners during this difficult time. If you have job opportunities we can share or if you would like to inquire about partnership, you can reach us by email at Team@Honor.Software.",
      },
      navLinks: [
        { label: "Press Room", path: "/news", },
        { label: "Customers", path: "/customers", },
        { label: "Contact", path: "/contact", },
        { label: "About", path: "/about", },
        { label: "Team", path: "/about/team", },
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
$bg-l-2: url('assets/bg/light/so-white.png');
$bg-d-2: url('assets/bg/dark/ep_naturalblack.png');


#app {
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  overflow-x:hidden;
  position:relative;

  &::before, &::after {
    background-attachment:auto, fixed;
    background-image:linear-gradient(110deg, #f5e9d300, #d4be96), $bg-l-2;
    background-color:#fff8d6;
    background-blend-mode:multiply;
    border-right:13px solid #ceae74;
    border-bottom:4px solid #bb9b61;
    @media($dark){
      background-image:linear-gradient(110deg, #f5e9d300, #d4be96), $bg-d-2;
      background-blend-mode:hard-light;
    }

    border-radius:30vw;
    content:'';
    display:block;

    transform:rotate(25deg);
    width:130vw;
    height:130vw;

    position:absolute;
    top:-50vw;
    left:-10vw;
    z-index:0;
    transition:top 250ms;
    // transition:top .4s;
    @media($md) {top:-60vw;}
    @media($lg) {top:-70vw;}
    @media($xl) {top:-90vw;}
  }
  &::after {
    border-radius:92vw;
    transform:rotate(66deg);
    width:100vw;
    height:100vw;
    max-width:500px;
    top:unset;
    right:20vw;
    bottom:430px;
    left:unset;
    z-index:-1;
    @media($md) {bottom:0;}
  }
}

#nav {
  padding:30px;

  a {
    font-weight:bold;
    color:#2c3e50;

    &:hover {
      text-decoration:none;
    }

    &.router-link-exact-active {
      color:#42b983;
    }
  }
}

.page-content {
  min-height:$routerViewMinHeight;
  position:relative;
  z-index:1;
}
</style>
