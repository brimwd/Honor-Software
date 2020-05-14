<template>
<section class="row partners-box">
  <div class="col-12">
    <h4>Our team has worked with</h4>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
      <div
        v-for="partnerName in partners"
        :key="partnerName"
        class="partner col-auto col-sm"
      >
        {{ partnerName }}
      </div>
    </div>
    <div class="row mt-4 justify-content-end">
      <div class="col-12, col-sm-6, col-md-3">
        <router-link to="/contact" class="btn btn-gold">Work With Us</router-link>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'Partners',
  data() {
    return {
      partners: [
        "Amazon",
        "Apple",
        "Bluetooth",
        "Bob Books",
        "Microsoft",
        "Seattle Pride",
        "T-Mobile",
        "U.S. Government",
        "Walmart",
      ]
    };
  },
}
</script>

<style scoped lang="scss">
.partners-box {
  font-size:1.3rem;
  font-weight:bold;
  margin-top:4rem;
  margin-bottom:4rem;

  .partner {
    margin:10px 0;
    text-align:center;
  }
}
</style>
