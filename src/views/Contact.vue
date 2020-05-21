<template>
<section class="contact-page honor-page">

  <h1 class="pt-3 mt-5 text-center">Get in touch</h1>
  <h3 class="py-3 mb-5 text-center">Our expert team can handle projects big or small</h3>
  <!-- <Carousel /> -->

  <Quote :content="purposeStatement"/>

  <PromoBar class="mb-5" :promos="promos"/>

  <ContactSection />

</section>
</template>

<script>
import ContactSection from '@/components/ContactSection.vue'
import PromoBar from '@/components/PromoBar.vue'
import Quote from '@/components/Quote.vue'

export default {
  name: 'SiteNav',
  components: {
    ContactSection,
    PromoBar,
    Quote
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
      purposeStatement: {
        quote: [
          "We make great products.",
          "We solve the right problems by asking the right questions.",
          "We believe software should be easy.",
          "We make systems work.",
        ],
        author: 'Honor.Software',
        centered: true,
      }
    };
  },
}
</script>

<style lang="scss" scoped>
.purpose {
  text-align:center;
  margin-top:60px;
  margin-bottom:60px;
}
ol {list-style:none;counter-reset:counter;}
li {
  counter-increment:counter;
  position:relative;

  &::before {
    content:counter(counter) ". ";
    font-size:1.5em;
    font-weight:bold;
    position:absolute;
    right:calc(100% + .3em);
  }
  b {font-size:1.5em;}
}
</style>
