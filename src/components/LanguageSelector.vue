<template>
  <div
    class="dropdown"
    id="language"
  >
    <ul>
      <li data-language="English">English</li>
      <li data-language="中文">中文</li>
    </ul>
    <a class="d-flex justify-content-between">
      <span class="language">{{ activeLanguage }}</span>
      <span>Close</span>
      <i class="far fa-fw fa-angle-down" aria-label="language selector" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'LanguageSelector',
  props: {
    activeLanguage: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.dropdown ul {
  border:1px solid var(--mid-gray);
  border-bottom:none;
  list-style:none;
  margin:0;
  padding:0;
  li {
    border-bottom:1px solid var(--mid-gray);
    &:last-child {border:none;}
  }
}
.dropdown a {
  border:1px solid var(--mid-gray);
  border-radius:4px;
  cursor:pointer;
  padding:.5em .75em;
  transition:background .15s;

  .open & {border-radius:0 0 4px 4px;}

  span {
    display:none;
    &.language {display:inline-block;}
  }

  @media($md) {
    border-color:transparent;
    &:hover {border-color:var(--mid-gray)}
  }

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
