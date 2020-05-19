<template>
<div class="about-page honor-page">
  <div class="row">
    <div class="col">
      <h1 class="purpose">About Us</h1>
      <p class="px-3">At Honor, we provide software solutions to help people work smarter and achieve more.</p>
      <p class="px-3">By automating redundant work and menial tasks, we can free your employees to focus on the things that need their attention most.</p>
      <p class="px-3"><router-link class="btn btn-gold" to="/about/why-honor" v-text="'Why Honor?'" /></p>
    </div>

  </div>

  <div class="row px-3 py-5 my-5">
    <ServiceOverview
      class="col-12 col-md-4"
      v-for="service in services"
      :key="service.title"
      :service="service"
    />
  </div>

  <Partners class="my-5" />

</div>
</template>

<script>
import Partners from '@/components/Partners.vue'
import ServiceOverview from '@/components/ServiceOverview'

export default {
  name: "About",
  components: {
    Partners,
    ServiceOverview,
  },
  data() {
    return {
      services: [
        {
          imageAlt: ``,
          imageUrl: ``,
          title: `Mobile Applications`,
          text: [
            `We build top-of-the-line mobile apps`
          ],
        },
        {
          imageAlt: ``,
          imageUrl: ``,
          title: `Web Applications`,
          text: [
            `We build top-of-the-line web apps`
          ],
        },
        {
          imageAlt: ``,
          imageUrl: ``,
          title: `Mac Native Apps`,
          text: [
            `We build top-of-the-line native apps`
          ],
        },
      ],
    };
  },
}
</script>

<style lang="scss" scoped>
h1 {text-align:center;}

.purpose {
  text-align: center;
  margin-top: 60px;
  margin-bottom: 60px;
}
</style>
