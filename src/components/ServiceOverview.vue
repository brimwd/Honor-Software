<template>
<div class="service-box">
  <div class="image-box" v-if="service.imageUrl">
    <img
      :src="service.imageUrl"
      :alt="service.alt"
    >
  </div>
  <h2 class="service-title">{{ service.title }}</h2>
  <p class="service-text">{{ service.text }}</p>
</div>
</template>

<script>

export default {
  name: 'ServiceOverview',
  props: {
    service: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.service-box {
  text-align: center;

  .image-box {
    height: 200px;
  }
}
</style>
