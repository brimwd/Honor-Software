<template>
<section class="row feature py-3 mb-3 justify-content-center">
  <div
    v-if="content.imageUrl"
    :class="{'order-last' : flipped}"
    class="col-12 col-md-3 col-lg-2">

    <img :src="content.imageUrl" :alt="content.imageAlt" />

  </div>
  <div class="col-12 col-md-9 col-lg-10">

    <h3>{{ content.name }} <span>{{ content.title }}</span></h3>
    <p
        v-for="paragraph in content.text"
        :key="paragraph.slice(0,20)"
    >{{ paragraph }}</p>

    <blockquote class="mt-4" v-if="content.personalStatement">
      <p v-text="content.personalStatement" />
    </blockquote>
  </div>
</section>
</template>

<script>
export default {
  name: 'Bio',
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
h3 span {
  font-weight:normal;
  color:var(--gold);
}
.feature {
  margin-right:0;
  margin-left:0;
}
blockquote {
  &::before {
    content:'Personal Statement:';
    display:block;
    font-size:1.3em;
    font-weight:bold;
  }
}
</style>
