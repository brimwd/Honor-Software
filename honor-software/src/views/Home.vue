<template>
    <div class="home-page honor-page">
        <Toast :info="toast"/>
        <SiteNav :navLinks="navLinks"/>
    </div>
</template>

<script>
// @ is an alias to /src
import SiteNav from '@/components/SiteNav.vue'
import Toast from '@/components/Toast.vue'

export default {
    name: 'Home',
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
