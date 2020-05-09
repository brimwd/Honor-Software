<template>
<section class="row feature py-5">
  <div :class="{'order-last' : flipped}"
    class="col-12 col-md-6">

    <h3>{{ content.title }}</h3>
    <p
        v-for="paragraph in content.text"
        :key="paragraph.slice(0,20)"
    >{{ paragraph }}</p>
    <router-link
      class="btn btn-primary"
      to="/news/"
    >
      {{ content.buttonText || "Read the article" }}
    </router-link>

  </div>
  <div class="col-12 col-md-6">
    <!-- {{ info.imageUrl }} -->
  </div>
</section>
</template>

<script>
export default {
  name: 'ArticleBlurb',
  props: {
    content: {
      type: Object,
      required: true,
    },
    flipped: {
      type: Boolean,
      default: false,
    }
  },
}
</script>

<style scoped lang="scss">
.feature {
  margin-right: 0;
  margin-left: 0;
}
</style>
