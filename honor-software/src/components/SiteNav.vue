<template>
    <nav class="global-nav row">

        <div class="col-12">
	        <img src="public/honor-logo.png" alt="Honor Software" />
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

</style>
