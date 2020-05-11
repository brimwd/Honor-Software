<template>
<section class="row promo-bar py-5">
    <div
        v-for="(promo, index) in promosSliced"
        class="col-3 col-med-6"
    >
      <router-link
        :key="promo+index"
        :to="promo.path"
      >
        <strong
            v-if="promo.strong"
            v-text="promo.strong"
        />
        <span :class="{'h5': promo.isHeader}"> {{ promo.text }}</span>
      </router-link>
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
.h5 {
    font-size: 1.25rem;
    margin-bottom: .5rem;
    font-weight: 500;
    line-height: 1.2;
    padding-left: 15px;
}
</style>
