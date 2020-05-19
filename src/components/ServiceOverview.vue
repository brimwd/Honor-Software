<template>
<div class="service-box" :class="{'text-center' : centered}">
  <div class="image-box" v-if="service.imageUrl || service.icon">
    <img  v-if="service.imageUrl"
      :src="service.imageUrl"
      :alt="service.alt"
    >
    <i v-if="service.icon"
      :class="service.icon"
      aria-hidden="true"
    />
  </div>
  <h2 class="service-title">{{ service.title }}</h2>
  <p v-for="paragraph in service.text"
    class="service-text"
    v-text="paragraph"
  />
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
    centered: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
i {
  float:left;
  font-size:2.8em;
  margin: -5px .5em .5em;
  &::after {
    opacity:.6;
    color:gold;
  }
}
</style>
