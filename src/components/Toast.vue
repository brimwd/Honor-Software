<template>
<div class="row">
    <div class="col-12">
        <router-link
            :to="content.path"
            class="toast-link alert"
            :class="{'alert-dismissible': content.dismissable}"
            role="alert"
        >
            {{ content.message }}
            <button
                v-if="content.dismissable"
                type="button"
                class="close"
                data-dismiss="alert"
                aria-label="Close"
            >
                <span aria-hidden="true">&times;</span>
            </button>
        </router-link>
    </div>
</div>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    content: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped lang="scss">
.col-12 {
  padding: 0;
}
.toast-link:hover {
  text-decoration:none;
}
</style>
