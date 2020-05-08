<template>
  <section class="row">
    <div class="quote-container col-12">
      <div class="text-center">
        <h2>What our customers are saying</h2>
        <p>We like to think our work speaks for itself</p>
      </div>

      <Quote />

    </div>

    <!-- Hide controls if only one quote -->
    <div class="controls col-12">
      <i class="control prev" aria-label="previous testimonial"></i>
      <div class="indicator">
        <i class="fas fa-quote-left"></i>
        <i class="fas fa-quote-left active"></i>
        <i class="fas fa-quote-left"></i>
      </div>
      <i class="control next" aria-label="next testimonial"></i>
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
    transition:all .15s;
    position:absolute;
    top:53%;
    &:hover {
      box-shadow:$shadow;
      color:var(--text);
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
