<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <SiteNav links/>
    </div>
</template>

<script>
// @ is an alias to /src
import SiteNav from '@/components/SiteNav.vue'

export default {
    name: 'Home',
    components: {
        SiteNav,
    },
    data() {
        return {
            links: [
                { label: "Why Honor", path: "/about/", },
                { label: "Product", path: "/products/", },
                { label: "Services", path: "/services/", },
                { label: "Customers", path: "/customers/", },
                { label: "Resources", path: "/resources/", },
                { label: "Contact Us", path: "/contact/", },
            ]
        };
    },
}
</script>
