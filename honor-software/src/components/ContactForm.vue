<template>
    <form class="col-12 col-md-6">
		<div class="form-group">
			<label for="nameInput">Name</label>
			<input
                type="text"
                class="form-control"
                id="nameInput"
                autocomplete="name"
            >
		</div>
		<div class="form-group">
			<label for="companyInput">Company</label>
			<input
                type="text"
                class="form-control"
                id="companyInput"
                autocomplete="company"
            >
		</div>
		<div class="form-group">
			<label for="emailInput">Email</label>
			<input
                type="email"
                class="form-control"
                id="emailInput"
                autocomplete="work email"
                aria-describedby="emailHelp"
            >
			<small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
            </small>
		</div>
		<div class="form-group">
			<label for="phoneInput">Phone</label>
			<input
                type="email"
                class="form-control"
                id="phoneInput"
                autocomplete="mobile tel">
		</div>
		<button
            class="btn btn-primary"
            type="submit"
        >
            Send
            <i class="fas fa-paper-plane ml-2" aria-hidden="true" />
        </button>
	</form>
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
.feature {
    margin-right: 0;
    margin-left: 0;
}

.cta-btn {

}
</style>
