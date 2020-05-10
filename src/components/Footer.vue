<template>
<footer id="global-footer">
    <h4>Honor.Software</h4>
  <div class="row">



    <div class="col-6 col-md-4 col-lg-3">
      <router-link to="/contact/">
        Contact
      </router-link>
      <router-link to="/legal/privacy.html">
        Privacy
      </router-link>
      <router-link to="/legal/tos.html">
        Terms of Service
      </router-link>
    </div>
    <div class="col-6 col-md-4 col-lg-3">
      <router-link to="/news/">
        Honor News
      </router-link>
      <router-link to="/customers/">
        Customers
      </router-link>
      <router-link to="/about/">
        About Us
      </router-link>
    </div>
  </div>


  <div class="row justify-content-between mt-4">
    <div class="col-12 col-sm-auto order-md-last">
      <LanguageSelector :activeLanguage="activeLanguage" />
    </div>
    <p class="col-12 col-sm-auto copyright">&copy;2020 – All rights reserved</p>
  </div>
</footer>
</template>

<script>
import LanguageSelector from '@/components/LanguageSelector.vue'

export default {
  name: 'Footer',
  components: {
    LanguageSelector
  },
  data() {
    return {
      activeLanguage: {
        name: 'English',
        expand: 'Select Language',
        collapse: 'Dismiss',
      },
    };
  },
}
</script>

<style scoped lang="scss">
footer {
  border-top:6px solid var(--bg-invert);
  margin:0 -15px;
  padding:5em 30px 2em;
}
a[href] {
  color:var(--text);
  display:block;
}
.copyright {
  align-self:center;
  margin-bottom:0;
}
</style>
