<template>
  <div>
    <h2>{{ message.heading }}</h2>
    <p
      v-for="paragraph in messageBody"
      v-html="paragraph"
    />
    <button
        v-if="!success"
        class="send-btn btn btn-lg btn-outline-light mt-2"
        @click="$emit('show-form')"
    >
        Try Again
    </button>
  </div>
</template>

<script>
export default {
  name: 'FormSubmissionMessage',
  props: {
    success: {
      default: true,
      type: Boolean,
    },
  },
  data() {
      return {
          errorMessage: {
              heading: "We're so sorry!",
              body: [
                  "There was an error submitting your message.",
                  "Please feel free to try sending your message again or email us directly at <a href='mailto:team@honor.software'>team@honor.software</a>",
              ],
          },
          successMessage: {
              heading: "Message received",
              body: [
                  "We’ll be in touch soon. You should receive a confirmation shortly.",
                  "If you need to provide additional information, you can reply to the confirmation email.",
              ],
          },
      };
  },
  computed: {
      message() {
          return this.success ? this.successMessage : this.errorMessage;
      },
      messageBody() {
          return [].concat(this.message.body);
      },
  },
}
</script>

<style scoped lang="scss">
h2 {
  margin-bottom: 1.25rem;
}
</style>
