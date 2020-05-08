<template>
	<section class="contact-page honor-page">
    <Carousel />

		<ContactSection />
	</section>
</template>

<script>
import ContactSection from '@/components/ContactSection.vue'
import Carousel from '@/components/Carousel.vue'

export default {
	name: 'SiteNav',
	components: {
    Carousel,
		ContactSection,
	},
}

</script>

<style scoped lang="scss">

</style>
