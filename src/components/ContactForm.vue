<template>
  <div class="col-12 col-md-6">
    <form>
      <div
        :class="{'invalid': fieldIsInvalid('name')}"
        class="form-group"
      >
        <label for="nameInput">Name</label>
        <input
          v-model="form.name"
          type="text"
          class="form-control"
          id="nameInput"
          autocomplete="name"
        >
      </div>
      <div
        :class="{'invalid': fieldIsInvalid('company')}"
        class="form-group"
      >
        <label for="companyInput">Company</label>
        <input
          v-model="form.company"
          type="text"
          class="form-control"
          id="companyInput"
          autocomplete="company"
        >
      </div>
      <div
        :class="{'invalid': fieldIsInvalid('email')}"
        class="form-group"
      >
        <label for="emailInput">Email</label>
        <input
          v-model="form.email"
          type="email"
          class="form-control"
          id="emailInput"
          autocomplete="work email"
          aria-describedby="emailHelp"
        >
        <small id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div
        :class="{'invalid': fieldIsInvalid('phone')}"
        class="form-group"
      >
        <label for="phoneInput">Phone</label>
        <input
          v-model="form.phone"
          type="tel"
          class="form-control"
          id="phoneInput"
          autocomplete="mobile tel"
        >
      </div>
    </form>
    <button
      class="send-btn btn btn-lg btn-outline-light mt-2"
      @click="sendFormData()"
    >
      Send
      <i class="fas fa-paper-plane ml-1 d-inline-block" aria-hidden="true" />
    </button>
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
      },
      submitAttempts: 0,
    };
  },
  computed: {
    emptyFields() {
      // TODO: more specific validation?
      return this.formKeys.filter(key => this.form[key].trim() === "");
    },
    formIsInvalid() {
      return !!this.submitAttempts && !!this.emptyFields.length;
    },
    formKeys() {
        return Object.keys(this.form);
    },
  },
  methods: {
    fieldIsInvalid(key) {
      return this.formIsInvalid && this.emptyFields.includes(key);
    },
    sendFormData() {
      this.submitAttempts += 1;

      if (this.formIsInvalid) {
        console.log("valid: ", !this.formIsInvalid);
        return;
      }

      // TODO: send it
      console.log("valid: ", !this.formIsInvalid, this.form);
    },
  },
}
</script>

<style scoped lang="scss">
label {
  font-weight: bold;
}
.send-btn {
  font-weight: bold;

  i {
    @include FA;
    font-weight: bold;
    font-style: unset;

    &::before {
      content: '\f1d8';
    }
  }
}

.form-group.invalid {
    label {

    }

    input {

    }
}
</style>
