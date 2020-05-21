<template>
<section class="row feature py-3 mb-3 justify-content-center">
  <div
    :class="{'order-last' : flipped}"
    class="col-12 col-md-4 d-flex align-items-end">

    <img
      v-if="content.imageUrl"
      :src="content.imageUrl"
      :alt="content.imageAlt" />

  </div>
  <div class="col-12 col-md-8">

    <h3>{{ content.name }} <span>{{ content.title }}</span></h3>
    <p
        v-for="paragraph in content.text"
        :key="paragraph.slice(0,20)"
    >{{ paragraph }}</p>

    <blockquote v-if="content.personalStatement">
      <p v-text="content.personalStatement" class="mb-0"/>
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
img {
  @include gold-ring(2px);
  display:block;
  max-width:80%;
  margin:0 auto;
}
blockquote {
  @include pseudo;
  @include gold-ring;
  border-radius:0;

  background-color:var(--bg-soft);
  padding:15px;
  margin:4em -15px 0;

  &::before {
    content:'Personal Statement:';
    display:block;
    font-size:1.3em;
    font-weight:bold;
    position:absolute;
    top:-2em;
  }
  &::after {
    border:14px solid #ceae74;
    border-bottom-color:transparent;
    border-left-color:transparent;
    content:'';
    display:block;
    position:absolute;
    top:1em;
    left:-28px;
  }
}
</style>
