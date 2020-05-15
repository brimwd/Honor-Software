<template>
	<section class="contact-page honor-page">
        <h1 class="pt-3 mt-5 text-center">Get in touch</h1>
        <h3 class="py-3 mb-5 text-center">Our expert team can handle projects big or small</h3>
        <!-- <Carousel /> -->

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
