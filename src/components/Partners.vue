<template>
<section class="row partners-box">
  <div class="col-12">
      <h5>Our team has worked with</h5>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        <div
          v-for="partnerName in partners"
          :key="partnerName"
          class="partner col"
        >
          {{ partnerName }}
        </div>

        <div class="partner col col-sm-6 col-md col-lg-6">
            Bob Books
        </div>
        <div class="partner col col-sm-6 col-md col-lg-6">
            <router-link to="/contact/">Work With Us</router-link>
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
        "U.S. Government",
        "Amazon",
        "Apple",
        "Bluetooth",
        "Microsoft",
        "Walmart",
        "T-Mobile",
        "Seattle Pride",
      ]
    };
  },
}
</script>

<style scoped lang="scss">
.partners-box {
  font-size:1.3rem;
  font-weight:bold;
  padding:4rem 0;

  @media($sm) {
      padding:4rem 15px;
  }

  .partner {
    margin: 10px 0;
  }
}
</style>
