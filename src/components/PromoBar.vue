<template>
<section class="row promo-bar py-5">
  <div
    v-for="(promo, index) in promosSliced"
    class="col-6 mb-5 col-md-3 mb-md-0"
  >
    <strong
      v-if="promo.strong"
      v-text="promo.strong"
    />
    <span :class="{'h5': promo.isHeader}"> {{ promo.text }}</span>
    <!-- <router-link
      v-if="promo.path"
      :key="promo+index"
      :to="promo.path"
    >
    </router-link> -->
  </div>
</section>
</template>

<script>
export default {
  name: 'PromoBar',
  props: {
    promos: {
      type: Array,
      required: true,
    }
  },
  computed: {
    promosSliced() {
      return this.promos.slice(0, 4);
    }
  },
}
</script>

<style scoped lang="scss">
* {
  text-align:center;
  font-size:26px;
}
strong {
  font-size:3em;
  display:block;
}

.h5 {
    font-size: 1.4em;
    margin-bottom: .5rem;
    font-weight: 500;
    line-height: 1.2;
}

</style>
