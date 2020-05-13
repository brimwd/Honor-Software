<template>
  <section>
    <div class="row">
      <div class="quote-container col-12">
        <div class="text-center">
          <h2>What our customers are saying</h2>
          <p>(Even though we think our work speaks for itself)</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-auto d-none d-lg-flex align-items-center" v-if="showControls">
        <i
          class="control prev"
          aria-label="previous testimonial"
          @click="changeSlide(-1)"
        />
      </div>
      <div class="col"> <!-- only 'col-8' if="showControls" -->
        <Quote :content="slides[currentSlide]" />
      </div>
      <div class="col-auto d-none d-lg-flex align-items-center" v-if="showControls">
        <i
          class="control next"
          aria-label="next testimonial"
          @click="changeSlide(1)"
        />
      </div>
    </div>
    <div class="row">
      <div
        v-if="showControls"
        class="controls col-12 d-flex d-md-block"
      >
        <i
          class="control prev d-lg-none"
          aria-label="previous testimonial"
          @click="changeSlide(-1)"
        />
        <div class="indicator">
          <i
            v-for="(slide, index) in slides"
            class="fas fa-quote-left"
            :class="{'active': index === currentSlide}"
            @click="currentSlide = index"
          />
        </div>
        <i
          class="control next d-lg-none"
          aria-label="next testimonial"
          @click="changeSlide(1)"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Quote from '@/components/Quote.vue'

export default {
  name: 'Carousel',
  components: {
    Quote,
  },
  data() {
    return {
      currentSlide: 0,
      slides: [
        {
          quote: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          ],
          author: 'Some Latin-major',
          company: 'A real business'
        },
        {
          quote: [
            "HEYYY ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          ],
          author: 'Some Latin-major',
          company: 'A real business'
        },
        {
          quote: [
            "HI ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          ],
          author: 'Some Latin-major',
          company: 'A real business'
        },
      ],
    };
  },
  computed: {
    showControls() {
      return this.slides.length > 1;
    },
  },
  methods: {
    changeSlide(addend) {
      let sum = this.currentSlide + addend;
      let max = this.slides.length - 1;
      if (sum < 0) {
          this.currentSlide = max;
          return;
      }
      if (sum > max) {
        this.currentSlide = 0;
        return;
      }
      this.currentSlide = sum;
    }
  }
}
</script>


<style scoped lang="scss">
section {
  // background:$bg-l-5; // 5, 10, 12
  // @media($dark){background:$bg-d-5;}
  background-position:center;
  margin: 0 -30px;
  // overflow:hidden;
  padding-top:2em;
  padding-bottom:4em;
  position:relative;

  &::before { // shadow
    box-shadow: 0px 0 500px 65px rgba(0, 0, 0, 0.15);
    content:'';
    display:block;

    position:absolute;
    right:0;
    bottom:0;
    left:0;
    z-index:0;
    @media($dark){box-shadow: 0px 0 500px 65px rgba(255, 255, 255, 0.15);}
  }

  .controls {
    align-items: center;
    justify-content:space-evenly;
    position:unset;
    text-align:center;
  }
  i.control {
    @include FA;
    background-color:var(--bg);
    border:2px solid var(--text);
    border-radius:50px; // arbitrary
    box-shadow:0 0 0 0 rgba(0,0,0,0);
    color:var(--text);
    cursor:pointer;
    font-size:42px;
    font-weight:500;
    line-height:1em;
    width:1.1em;
    text-align: center;
    transition:all .15s;
    &:hover {
      @include shadow;
      background-color:var(--text);
      color:var(--bg);
    }

    &.prev::before {
      content:'\f104';
      position:relative;
      left:-.05em;
    }
    &.next::before {
      content:'\f105';
      position:relative;
      right:-.05em;
    }
  }

  .indicator {
    color:var(--gold-light);
    cursor:pointer;

    i {
      @include FA;
      border:1px solid var(--bg);
      border-radius:50px; // arbitrary
      margin:0 12px;
      &:hover {
        color:var(--bg-intense);
        font-weight:bold;
        transition:all .15s;
      }
      &.active {
        font-weight: bold;
        color: var(--bg-intense);
      }

      &::before {content:'\f111';}
    }
  }

  .quote-container {
    display:flex;
    flex-flow:column;
    justify-content:space-between;
  }
}
</style>
