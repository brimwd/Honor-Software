<template>
<section><div class="row justify-content-around">
  <div class="col-12 col-md-6">
    <h2>From conversation to collaboration</h2>
    <h4>Our first project starts here</h4>
  </div>

  <transition name="fadeInOut">
      <ContactForm
        v-if="!success"
        :class="{'hide': formSubmitted && !success}"
        @show-success-message="showSubmissionMessage()"
        @show-error-message="showSubmissionMessage($event)"
      />
  </transition>

  <transition name="fadeInOut">
      <FormSubmissionMessage
        v-if="formSubmitted"
        :success="success"
        @clear-message="clearMessage()"
      />
  </transition>

</div></section>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue'
import FormSubmissionMessage from '@/components/FormSubmissionMessage.vue'

export default {
  name: 'ContactSection',
  components: {
    ContactForm,
    FormSubmissionMessage,
  },
  data() {
      return {
          formSubmitted: false,
          success: false,
      };
  },
  computed: {
  },
  methods: {
    clearMessage() {
        this.formSubmitted = false;
        this.success = false;
    },
    showSubmissionMessage(successBool) {
      this.success = successBool;
      this.formSubmitted = true;

    },
  },
}
</script>

<style scoped lang="scss">
section {
  background-color: var(--mid-gray);
  color: var(--bg);
  margin: 0 -15px;
  padding: 0 15px;

  @media($dark){
      background-color: var(--bg-soft);
      color: var(--text)
  }

  > .row {
    padding: 6em 15px 4em;
  }
}
h3 {
    margin: 1em 0 2em;
    font-weight: normal;
}
</style>
