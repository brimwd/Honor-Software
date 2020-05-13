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
        class="controls col-12 d-flex d-lg-block mt-lg-3"
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
            "At scheduleUX we had a dream of making scheduling simple. In our case, 'simple' turned out to be really tricky.",
            "Partnering with the brilliant (and dapper) team at Honor.Software helped make our dream a reality. Honor has built a scheduling service that was perfect for our needs. Even as we worked through iterations, Honor was able to keep us on track and delivered our platform within the original timeline.",
            "The positive feedback from our customers and the ongoing maintenance and support we receive from Honor exceeds all of our expectations.",
            "Our results have been phenomenal with Honor's Virtual Scheduling platform. Leveraging their digital services has freed us to transform our business model and focus our efforts on solving new problems for our customers.",
          ],
          author: 'ScheduleUX Product Team',
        },
        {
          quote: [
            "With well earned respect, I confidently recommend Honor.Software for future software projects, and programming services. The tech team's exceptional work was impressive and their hard work and dedication to the job was an integral part of the successful completion of the project.",
            "I had the good fortune of working with the tech team in January 2020, with the project on the system upgrade. With a number of requirements we've identified at that time, involving multiple confined access, detailed planning, implementation, and communication with the tech team members and contractors was critical. The key to our success was Honor's ability to work with one vision. Honor's efforts and talents were a significant contribution to the entire team in accomplishing great results considering some of the project setbacks."
            ],
          author: 'Private Client',
        },
        {
          quote: [
            "Micheal, Cameron, and the rest of the crew supported each other seamlessly, worked diligently, and communicated well together to successfully complete the system transformation. The product team managed their portion of the job planning process / procedures exceptionally well and were always prepared to proactively identify options and solutions to challenges that occurred during the project. The requirements were managed with prioritization, and Michael smoothly made those adjustments to enhance the flow of progress. The satisfying product was the result of the team's ability to communicate and work collaboratively and unselfishly towards the common goal."
          ],
          author: 'Non Profit Client',
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
