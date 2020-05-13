<template>
  <header id="marquee" class="row jumbotron">
    <div class="col-12">
      <h1 id="honor" class="display-4">Honor.<br/>Software</h1>
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
#honor {
  text-transform:uppercase;
  font-family:'Marcellus', serif;
}
.jumbotron {
  @include pseudo;
  @include shadow;

  background:var(--bg);
  border-radius:unset;
  margin:0 -30px 5em;
  padding:4rem 80px 4rem 2rem;
  overflow:hidden;

  @media($sm) {
    border-radius:.3rem;
    margin:3vw 0 6vw;
  }
  @media($sm) {margin-bottom:9vw;}

  &::before {
    background:url('../../images/bg/ring-gold-tilted.png') center no-repeat;
    background-position:100% 50%;
    background-size:contain;
    content:'';
    display:block;
    opacity:.3;

    width:100%;
    height:120%;

    position:absolute;
    top:-10%;
    right:-3vw;
    // if un-cropped
    // top:-1vw;
    // left:50vw;
    // bottom:-8vw;
    @media($sm) {opacity:.7;}
    @media($md) {
      opacity:unset;
      top:-30px;
      right:3vw;
      width:260px;
      height:320px;
  }
  }

  @media($md) {
    overflow:unset;
    h1 br {display:none;}
  }
}
</style>
