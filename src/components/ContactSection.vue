<template>
<section class="row">
  <div class="col-12 col-md-6">
    <h3>From conversations to collaborations,</h3>
    <p>Our first project starts here</p>
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
    content: {
      type: Object,
      required: true,
    },
    flipped: {
      type: Boolean,
      default: false,
    }
  },
}
</script>

<style scoped lang="scss">
.row {
  margin-top: 40px;
}
</style>
