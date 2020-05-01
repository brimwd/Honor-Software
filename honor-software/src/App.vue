<template>
    <div id="app">
        <Toast :info="toast"/>
        <SiteNav :navLinks="navLinks"/>
        <router-view/>
    </div>
</template>

<script>
import SiteNav from '@/components/SiteNav.vue'
import Toast from '@/components/Toast.vue'

export default {
    components: {
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
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
