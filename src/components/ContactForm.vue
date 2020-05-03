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
                type="tel"
                class="form-control"
                id="phoneInput"
                autocomplete="mobile tel">
		</div>
		<button
            class="send-btn btn btn-primary"
            type="submit"
        >
            Send
            <i class="fas fa-paper-plane ml-2" aria-hidden="true" />
        </button>
	</form>
</template>

<script>

export default {
    name: 'ContactForm',
    // props: {
    // },
}
</script>

<style scoped lang="scss">
.send-btn {
    height: 38px;
}
</style>
