<template>
<footer id="global-footer">
    <h4>
      <router-link to="/">
        Honor.Software
      </router-link>
    </h4>
  <div class="row">



    <div class="col-6 col-md-4 col-lg-3">
      <p>
          <router-link to="/contact/">
          Contact
        </router-link>
      </p>
      <p>
          <router-link to="/legal/privacy/">
          Privacy
        </router-link>
      </p>
      <p>
          <router-link to="/legal/tos/">
          Terms of Service
        </router-link>
      </p>
    </div>
    <div class="col-6 col-md-4 col-lg-3">
      <p>
          <router-link to="/news/">
          Honor News
        </router-link>
      </p>
      <p>
          <router-link to="/customers/">
          Customers
        </router-link>
      </p>
      <p>
          <router-link to="/about/">
          About Us
        </router-link>
      </p>
    </div>
  </div>


  <div class="row justify-content-between align-content-center mt-4">
    <div class="col-12 col-sm-auto">
      <!-- <LanguageSelector :activeLanguage="activeLanguage" /> -->
    </div>
    <p class="col-12 col-sm-auto copyright order-sm-first">&copy;2020 – All rights reserved</p>
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
  background:var(--bg);
  border-top:6px solid var(--bg-text);
  margin:0 -15px;
  overflow:hidden;
  padding:5em 30px 2em;
  position:relative;

  &::before {
    background: url(../../images/bg/ring.svg) center no-repeat;
    background-position: 30% 50%;
    background-size: 240vw;
    content: '';
    display: block;
    opacity: .08;
    transform: rotate(24deg);
    width: 90%;
    position: absolute;
    top: -20vw;
    right: -22vw;
    bottom: -70%;
    @media($dark){opacity:.15;}
  }
}
p {
  margin:1.5em 0 0;
  @media($md) {margin:.5em 0;}
}
a[href] {
  color:var(--text);
}
.copyright {
  align-self:center;
  margin-bottom:0;
}
</style>
