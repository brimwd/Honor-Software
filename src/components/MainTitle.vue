<template>
  <header id="jumbotron" class="row jumbotron mb-0">
    <div class="col-12">
      <h1 id="honor" class="display-4">Honor.Software</h1>
      <p class="lead">Beautiful, usable software for the future.</p>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainTitle',
  // props: {
  //     headline: {
  //         type: String,
  //         required: true,
  //     }
  // }
}
</script>

<style scoped lang="scss">
#jumbotron {
  text-transform: uppercase;
}

.jumbotron {
  @include pseudo;

  background-image: $bg-l-2;
  box-shadow: $shadow;
  
  overflow: hidden;

  @media($dark){
      background-image: $bg-d-2;
  }

  &::before {
    background: url(../../images/bg/ring.svg) center no-repeat;
    background-size: 240%;
    content: '';
    display: block;
    opacity: .3;

    transform: rotate(24deg);
    width: 50%;

    position: absolute;

    top: -35%;
    right: -22%;
    bottom: -70%;
  }
}
</style>
