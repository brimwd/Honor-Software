<template>
<section class="row promo-bar"><div class="col-12">
  <router-link
    v-for="(promo, index) in promos"
    :key="promo+index"
    class="col-12 col-md-3"
    :to="promo.path"
  >
    <h5>{{ promo.label }}</h5>
  </router-link>
</div></section>
</template>

<script>
export default {
  name: 'PromoBar',
  props: {
    content: {
      type: Array,
      required: true,
    }
  },
  computed: {
    promos() {
      return this.content.slice(0, 4);
    }
  },
}
</script>

<style scoped lang="scss">
.promo-bar {
  margin: 80px 0;
}
</style>
