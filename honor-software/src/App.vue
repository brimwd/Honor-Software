<template>
    <div id="app">
        <Toast :info="toast" />
        <SiteNav :navLinks="navLinks" />
        <router-view
            class="page-content"
        />
        <Footer
            class="footer"
        />
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
                { label: "Why Honor", path: "/about/", },
                { label: "Product", path: "/product/", },
                { label: "Services", path: "/services/", },
                { label: "Customers", path: "/customers/", },
                { label: "Resources", path: "/resources/", },
                { label: "Contact Us", path: "/contact/", },
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
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
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
    padding-bottom: 120px;
    min-height: $routerViewMinHeight;
}
</style>
