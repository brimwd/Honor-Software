<template>
    <nav class="global-nav row">
        <div class="col-12 flex">
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
.flex {
    display: flex;
    margin: 10px 20px;
}

ul {
    display: flex;

    li {
        margin-left: 20px;
        list-style-type: none;
    }
}
</style>
