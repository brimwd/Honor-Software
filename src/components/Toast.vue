<template>
<div class="row">
    <div class="col-12">
        <router-link
            :to="content.path"
            class="toast-link"
        >
            <div
                class="alert alert-success fade show"
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
            </div>
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

.alert {
  border-radius: 0;
  margin-bottom: 0;
  text-align: center;

  .toast-link:hover {
    text-decoration: none;
  }
}
</style>
