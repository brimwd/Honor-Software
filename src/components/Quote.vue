<template>
  <blockquote>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <h5>
      <strong>Name Name</strong>,
      <b>Company</b>
    </h5>
  </blockquote>
</template>

<script>
export default {
  name: 'Quote',
  // props: {
  //     headline: {
  //         type: String,
  //         required: true,
  //     }
  // }
}
</script>

<style scoped lang="scss">
blockquote {
  align-self:center;
  background-color:var(--bg);
  border:1px solid #ced4db;
  border-radius:5px;
  box-shadow:$shadow;
  display:block;

  max-width:70vw;
  margin:2em auto;
  padding:6vw 8vw;

  h5 {margin:2em 0 0;}
}
</style>
