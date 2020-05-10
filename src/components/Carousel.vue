<template>
  <section class="row">
    <div class="quote-container col-12">
      <div class="text-center">
        <h2>What our customers are saying</h2>
        <p>(Although we like to think our work speaks for itself)</p>
      </div>

      <Quote :content="slides[currentSlide]" />

    </div>

    <div
        v-if="showControls"
        class="controls col-12 d-flex d-md-block"
    >
        <i
            class="control prev"
            aria-label="previous testimonial"
            @click="changeSlide(-1)"
        />
        <div class="indicator">
            <i
                v-for="(slide, index) in slides"
                class="fas fa-quote-left"
                :class="{'active': index === currentSlide}"
            />
        </div>
        <i
            class="control next"
            aria-label="next testimonial"
            @click="changeSlide(1)"
        />
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
                    // author: "NAME",
                    // company: "WORKPLACE",
                    quote: "",
                },
            ],
        };
    },
    computed: {
        showControls() {
            return this.slidesText.length > 1;
        },
    },
    methods: {
        changeSlide(summand) {
            let sum = this.currentSlide + summand;
            let max = this.slides.length - 1;
            if (sum > max) {
                this.currentSlide = 0;
            }
            if (sum < 0) {
                this.currentSlide = max;
            }
            this.currentSlide = sum;
        }
    }
}
</script>


<style scoped lang="scss">
section {
  background:$bg-l-5; // 5, 10, 12
  @media($dark){background:$bg-d-5;}
  background-position:center;
  margin: 0 -30px;
  overflow:hidden;
  padding-top:5em;
  padding-bottom:3.5em;
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
    border-radius:50px; // arbitrary
    box-shadow:0 0 0 0 rgba(0,0,0,0);
    color:var(--mid-gray);
    cursor:pointer;
    font-size:42px;
    font-weight:lighter;
    letter-spacing:-1px;
    line-height:1em;
    text-align: center;
    transition:all .15s;
    &:hover {
      box-shadow:$shadow;
      color:var(--text);
    }
    @media($md) {
      position:absolute;
      top:53%;
    }

    &.prev {
      left:5.5vw;
      &::before {content:'\f137';}
    }
    &.next {
      right:5.5vw;
      &::before {content:'\f138';}
    }
  }

  .indicator {
    color:var(--mid-gray);
    cursor:pointer;

    i {
      @include FA;
      margin:0 12px;
      &:hover {
        color:var(--text);
        font-weight:bold;
        transition:all .15s;
      }
      &.active {
        font-weight:bold;
      }

      &::before {content:'\f111';}
    }
  }

  .quote-container {
    display:flex;
    flex-flow:column;
    justify-content:space-between;
    min-height:280px;
  }
}
</style>
