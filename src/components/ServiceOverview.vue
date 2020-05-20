<template>
<section class="row mb-3" :class="{'text-center align-content-center' : centered}">

  <div class="image-box col-12 col-md-4 text-center" v-if="service.imageUrl || service.icon">
    <img  v-if="service.imageUrl"
      :src="service.imageUrl"
      :alt="service.alt"
    >
    <i v-if="service.icon"
      :class="service.icon"
      class="mb-4" aria-hidden="true"
    />
  </div>

  <div class="col-12 mb-5 col-md-8">
    <h2 class="px-3">{{ service.title }}</h2>
    <p v-for="paragraph in service.text"
      class="px-3"
      v-text="paragraph"
    />
  </div>

</section>
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
section {
  position:relative;
}

i {
  font-size:14em;

  &::after {
    opacity:.6;
    color:gold;
  }

  opacity:.25;
  position:absolute;
  top:0;
  right:0;
  bottom:0;
  left:0;

  @media($md) {
    font-size:10em;
    opacity:1;
    position:unset;
    transform:unset;
  }
}
</style>
