<template>
<footer id="global-footer">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
    <div class="col">
      <router-link to="/contact/">
        Contact
      </router-link>
    </div>
    <div class="col">
      <router-link to="/news/">
        Honor News
      </router-link>
    </div>
    <div class="col">
      <router-link to="/careers/">
        Careers
      </router-link>
    </div>
    <div class="col">
      <router-link to="/legal/tos.html">
        Terms of Service
      </router-link>
    </div>
    <div class="col">
      <router-link to="/legal/privacy.html">
        Privacy
      </router-link>
    </div>
    <div class="col">
      <LanguageSelector />
    </div>
  </div>
  <div class="row"><div class="col-12">
    <p>Honor.Software &copy;2020 – All rights reserved</p>
  </div></div>
</footer>
</template>

<script>
import LanguageSelector from '@/components/LanguageSelector.vue'

export default {
  name: 'Footer',
  components: {
    LanguageSelector,
  },
  // data() {
  //     return {
  //         partners: [
  //             "U.S. Government",
  //             "Amazon",
  //             "Apple",
  //             "Bluetooth",
  //             "Microsoft",
  //             "Walmart",
  //             "T-Mobile",
  //             "Seattle Pride",
  //         ]
  //     };
  // },
}
</script>

<style scoped lang="scss">
.name-drop {
  margin: 80px 0;

  .partner {
    margin: 10px 0;
  }
}
</style>
