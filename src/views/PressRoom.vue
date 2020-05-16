<template>
<article class="news-page honor-page">
  <h1 class="mt-5">Press Room</h1>
  <h3>The latest news and announcements</h3>
  <div class="row">
    <div class="col my-5 pb-5">
      <p class="px-3">
        <time datetime="2020-04-23 12:00">April 23, 2020</time>
        <a href="https://docs.google.com/document/d/1PAuoQwJsO4380lxl_nMJns1_GSVoQi-SPTLb9rUltuM/edit?usp=sharing" target="_blank" v-text="'Transforming software research'"/>
      </p>
      <p class="px-3">
        <time datetime="2020-03-06 12:00">March 6, 2020</time>
        <routerLink to="/customers/scheduleux" v-text="'Mastering User Flow with ScheduleUX'"/>
      </p>
      <p class="px-3">
        <time datetime="2020-03-06 12:00">December 17, 2019</time>
        <a href="https://docs.google.com/document/d/1N7s2jN-DZ1iKp2mxtCFzixithrfwI2EFZ2mKkj0X9Lw/edit?usp=sharing" target="_blank" v-text="'Learn about 7 Myths on Alpha and Beta Testing'"/>
      </p>
    </div>
  </div>

  <ContactSection />
</article>
</template>

<script>
import ContactSection from '@/components/ContactSection.vue'
export default {
  name: "PressRoom",
  components: {
    ContactSection,
  },
}
</script>

<style lang="scss" scoped>
h1, h3 {text-align:center;}
time {
  display:block;

  @media($md) {
    display:inline-block;
    margin-right:6px;
    min-width:190px;
    text-align:right;
    &::after {content:' - ';}
  }
}
</style>
