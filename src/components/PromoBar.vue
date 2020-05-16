<template>
<section class="row promo-bar py-5 justify-content-center">
  <div
    v-for="(promo, index) in promosSliced"
    class="col-6 col-md-3 mb-md-0"
  >
    <i
      v-if="promo.icon"
      :class="promo.icon"
    />
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
strong, i {
  display:block;
  font-size:2.4em;
  margin:.4em auto .1em;
  &::after{
    opacity:.6;
    color:var(--gold);
  }
}

.h5 {
    font-size: 1.4em;
    margin-bottom: .5rem;
    font-weight: 500;
    line-height: 1.2;
}

</style>
