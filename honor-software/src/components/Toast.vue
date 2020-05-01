<template>
    <div class="alert alert-success alert-dismissible fade show" role="alert">
        <router-link :to="info.path">
            {{ info.message }}
        </router-link>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'Toast',
    props: {
        info: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style scoped lang="scss">
    .alert {
        text-align: center;
        margin-bottom: 5px;

        &:hover {
            text-decoration: none;
        }
    }
</style>
