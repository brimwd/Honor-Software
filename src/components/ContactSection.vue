<template>
<section class="row justify-content-around">
  <div class="col-12 col-md-6">
    <h1>From conversation to collaboration</h1>
    <h3>Our first project starts here</h3>
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
  background-color:var(--mid-gray);
  color:var(--bg);
  margin:0 -30px;
  padding:6em 15px 4em;
  @media($dark){background-color:var(--bg-soft);color:var(--text)}
}
h1 {margin-top:.5em;}
h3 {margin-top:1em;font-weight:normal;}
</style>
