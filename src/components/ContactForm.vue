<template>
  <div class="col-12 col-md-6">
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="nameInput">Name</label>
        <input
          v-model="form.name"
          type="text"
          class="form-control"
          id="nameInput"
          autocomplete="name"
          required
        >
      </div>
      <div class="form-group">
        <label for="companyInput">Company</label>
        <input
          v-model="form.company"
          type="text"
          class="form-control"
          id="companyInput"
          autocomplete="company"
        >
      </div>
      <div class="form-group">
        <label for="emailInput">Email</label>
        <input
          v-model="form.email"
          type="email"
          class="form-control"
          id="emailInput"
          autocomplete="work email"
          aria-describedby="emailHelp"
          required
        >
        <small id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div class="form-group">
        <label for="phoneInput">Phone</label>
        <input
          v-model="form.phone"
          type="tel"
          class="form-control"
          id="phoneInput"
          autocomplete="mobile tel"
          required
        >
      </div>
      <div class="form-group">
        <label for="messageInput">Message</label>
        <textarea
          v-model="form.message"
          type="tel"
          class="form-control"
          id="messageInput"
          required
        />
      </div>
      <button
          class="send-btn btn btn-lg btn-outline-light mt-2"
          type="submit"
      >
          Send
          <i class="fas fa-paper-plane ml-1 d-inline-block" aria-hidden="true" />
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      form: {
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      },
      submitAttempts: 0,
    };
  },
  computed: {
  },
  methods: {
    clearForm() {
      let formKeys = Object.keys(this.form);
      for (let i = 0; i < formKeys.length; i++) {
          this.form[formKeys[i]] = ""
      }
    },
    handleSubmit() {
      const success = () => {
        this.clearForm();
        this.$emit('show-success-message');
      }
      const failure = () => {
        this.$emit('show-error-message');
      }
      this.axios.post('https://cors-anywhere.herokuapp.com/https://scheduleux.herokuapp.com/api/contact/mailer', this.form, {crossdomain: true})
      .then(function (response) {
        success(true);
      })
      .catch(function (error) {
        failure();
      });
    },
  },
}
</script>

<style scoped lang="scss">
label {
  font-weight:bold;
}
.send-btn {
  font-weight:bold;

  i {
    @include FA;
    font-weight:bold;
    font-style:unset;

    &::before {content:'\f1d8';}
  }
}
</style>
