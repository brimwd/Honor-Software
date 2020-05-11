<template>
<section class="row justify-content-around">
  <div class="col-12 col-md-6">
    <h2>From conversation to collaboration</h2>
    <h4>Our first project starts here</h4>
  </div>

  <ContactForm />
</section>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue'

export default {
  name: 'ContactSection',
  components: {
    ContactForm,
  },
  props: {
  },
}
</script>

<style scoped lang="scss">
section {
  // background-color:var(--mid-gray);
  color:var(--bg);
  margin:0 -30px;
  padding:6em 15px 4em;
  @media($dark){
      // background-color:var(--bg-soft);
      color:var(--text)
  }
}
h2 {margin-top:.5em;}
h4 {margin:1em 0 2em;font-weight:normal;}
</style>
