<template>
<section class="contact-page honor-page">

  <h1 class="pt-3 mt-5 text-center">Get in touch</h1>
  <h3 class="py-3 mb-5 text-center">Our expert team can handle projects big or small</h3>
  <!-- <Carousel /> -->

  <PromoBar class="mb-5" :promos="promos"/>

  <ContactSection />

</section>
</template>

<script>
import ContactSection from '@/components/ContactSection.vue'
import PromoBar from '@/components/PromoBar.vue'

export default {
  name: 'SiteNav',
  components: {
    ContactSection,
    PromoBar,
  },
  data() {
    return {
      promos: [
        {
          icon: 'fad fa-user-chart',
          text:"Operational Efficiency",
        },
        {
          icon: 'fad fa-cogs',
          text:"Streamlined Workflows",
        },
        {
          icon: 'fad fa-tachometer-fast',
          text:"Accelerated Onboarding",
        },
        {
          icon: 'fad fa-users-crown',
          text:"Improved Productivity",
        }
      ],
    };
  },
}
</script>

<style lang="scss" scoped>

</style>
