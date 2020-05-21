<template>
  <div class="col-12 col-md-6">
    <h3>{{ message.heading }}</h3>
    <p
      v-for="paragraph in messageBody"
    />
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  props: {
    success: {
      required: true,
      type: Boolean,
    },
  },
  data() {
      return {
          errorMessage = {
              heading: "Something's wrong on our end",
              body: [
                  "There was an error submitting your message.",
                  "Please feel free to try sending your message again or email us directly mailto:team@honor.software",
              ],
          },
          successMessage = {
              heading: "Message received",
              body: [
                  "We’ll be in touch soon. You should receive a confirmation shortly.",
                  "If you need to provide additional information, you can reply to the confirmation email",
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

</style>
