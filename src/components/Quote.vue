<template>
  <blockquote>
    <transition
      appear
      name="slide"
    >
      <div
        class="quote"
        :key="content.quote[0]"
      >
        <p v-for="paragraph in quote">{{ paragraph }}</p>
        <h5>
          <strong>{{ content.author || "Industry Expert" }}</strong>,
          <b>{{ content.company || "Tech Consulting Firm" }}</b>
        </h5>
      </div>
    </transition>
  </blockquote>
</template>

<script>
export default {
  name: 'Quote',
  props: {
      content: {
          type: Object,
          required: true,
      }
  },
  data() {
      return {
          lorem: [
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          ],
      };
  },
  computed: {
      quote() {
          if (!this.content.quote || !this.content.quote.length) {
              return this.lorem;
          }
          // [].concat returns an array whether supplied arg is a string or an array
          return [].concat(this.content.quote);
      },
  },
}
</script>

<style scoped lang="scss">
blockquote {
  @include shadow;

  align-self: center;
  background-color: var(--bg);
  border: 1px solid #ced4db;
  border-radius: 5px;
  display: block;
  overflow: hidden;

  max-width: 85vw;
  margin: 2em auto;
  padding: 6vw 8vw;

  @media($md) {
      max-width: 70vw;
  }

  h5 {
      margin: 2em 0 0;
  }
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-50vw);
  opacity: 0;
}

.slide-enter-to,
.slide-leave {
  transform: translateX(0);
  opacity: 1;
}

.slide-enter-active,
.slide-leave-active {
  transition: 0.4s all ease-in-out;
}
</style>
