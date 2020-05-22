<template>
<section><div class="row justify-content-around">
  <div class="col-12 col-md-6">
    <h2>From conversation to collaboration</h2>
    <h4>Our first project starts here</h4>
  </div>
  <div class="col-12 col-md-6">
    <transition name="fadeInOut">
      <ContactForm
        v-if="!success"
        :class="{'hide': formSubmitted && !success}"
        @show-success-message="showSuccessMessage()"
        @show-error-message="showErrorMessage($event)"
      />
    </transition>

    <transition name="fadeUp">
      <FormSubmissionMessage
        v-if="formSubmitted"
        :success="success"
        @show-form="showForm()"
      />
    </transition>
  </div>

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
    showForm() {
      this.formSubmitted = false;
      this.success = false;
    },
    showErrorMessage() {
      this.success = false;
      this.formSubmitted = true;
    },
    showSuccessMessage() {
      this.success = true;
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
  min-height: 400px;

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

.hide {
  display: none;
}

.fadeUp-enter,
.fadeUp-leave-to {
    transform: translateY(160px);
    opacity: 0;
}
.fadeUp-enter-to,
.fadeUp-leave {
    transform: translateY(0);
    opacity: 1;
}

.fadeUp-enter-active,
.fadeUp-leave-active {
    position: absolute;
    transition: all 0.3s ease-out;
}
</style>
