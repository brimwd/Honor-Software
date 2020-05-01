<template>
    <nav class="global-nav row">
        <div class="col-12">
	        <img src="img/honor-logo.png" alt="Honor Software" />
            <ul>
			    <li v-for="link in links">
                    <a :href="link.path">
                        {{ link.label }}
                    </a>
                </li>
            </ul>
    	</div>
    </nav>
</template>

<script>
export default {
    name: 'SiteNav',
    props: {
        links: {
            type: Array,
            required: true,
        }
    }
}
</script>

<style scoped lang="scss">
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
