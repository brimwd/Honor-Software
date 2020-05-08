<template>
  <div
    class="dropdown"
    id="language"
  >
    <span>English</span>
    <!-- <span>中文</span> -->
    <i class="far fa-fw fa-angle-down" aria-label="language selector" />
  </div>
</template>

<script>
import LanguageSelector from '@/components/LanguageSelector.vue'

export default {
  name: 'Footer',
  components: {
    LanguageSelector,
  },
}
</script>

<style scoped lang="scss">
.dropdown {
  border:1px solid transparent;
  border-radius:4px;
  cursor:pointer;
  padding:.5em .75em;
  transition:all .15s;

  &:hover {border-color:var(--mid-gray)}

  i {
    @include FA;
    text-align:center;
    min-width:1.2em;
    margin-left:.75em;
    &::before {content:'\f0ac';}
  }
  &:hover i::before {content:'\f107';}
}

</style>
