<template>
<article class="about-page honor-page">
  <div class="row">
    <div class="col mb-5 pb-5">
      <h1 class="purpose">Open-Source Expertise</h1>

      <p class="px-3">We take mature open-source software (OSS) and embed it into commercial products that you can trust. We leverage many of the most trusted libraries, including: Node, Underscore, MongoDB, jQuery, Vue, and Express.</p>
      <p class="px-3">Open source is an essential part of our software strategy—from a developer's laptop to the data center. At Honor, we're committed to open source and their communities so that we can all deliver better solutions: software that's more secure, scalable, and innovative.</p>
      <p class="px-3">Our product team at Honor.Software solves the right problem the right way. From choosing which components we leverage to evaluating how we manage our data, we build software in thoughtful and intentional ways. Our strength is in building stand-alone web applications, which benefit greatly from being entirely operating-system and platform agnostic.</p>
    </div>
  </div>

  <ContactSection />

</article>
</template>

<script>
import ContactSection from '@/components/ContactSection.vue'

export default {
  name: "About",
  components: {
    ContactSection,
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
