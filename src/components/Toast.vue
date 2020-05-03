<template>
<div class="row"><div class="col-12">
    <div class="alert alert-success alert-dismissible fade show" role="alert">
      <router-link :to="info.path">
        {{ info.message }}
      </router-link>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
</div></div>
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
.col-12 {
  padding: 0;
}
.alert {
  border-radius: 0;
  margin-bottom: 0;
  text-align: center;

  &:hover {
    text-decoration: none;
  }
}
</style>
