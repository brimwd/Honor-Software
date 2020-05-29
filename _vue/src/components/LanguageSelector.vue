<template>
  <div
    class="dropdown mb-4 mb-sm-0"
    v-on="{ 'click' : toggleExpand }"
    :class="{ 'open' : isExpanded }"
    id="language"
  >
    <ul>
      <li data-language="English">English</li>
      <li data-language="中文">中文</li>
    </ul>
    <a class="d-flex justify-content-between align-content-center">
      <span class="language">{{ activeLanguage.name }}</span>
      <span class="expand-string">{{ activeLanguage.expand }}</span>
      <span class="collapse-string">{{ activeLanguage.collapse }}</span>
      <i class="far fa-fw fa-angle-down" aria-label="language selector" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'LanguageSelector',
  props: {
    activeLanguage: {
      type: Object,
      required: true,
    },
    isExpanded: true,
  },
  methods: {
    toggleExpand: function () {
       this.isExpanded = !this.isExpanded;
    }
  }
}
</script>

<style scoped lang="scss">
.dropdown {
  position:relative;
}

ul {
  background-color:var(--bg);
  border:1px solid var(--mid-gray);
  border-bottom:none;
  border-radius:4px 4px 0 0;
  display:none;
  list-style:none;
  margin:0;
  padding:0;
  position:absolute;
  right:0;
  bottom:calc(3em + 2px);
  left:0;
  z-index:10;

  .open & {display:block;}

  li {
    border-bottom:1px solid var(--mid-gray);
    cursor:pointer;
    padding:.5em;
    &:hover {background-color:var(--bg-soft);}
    &:last-child {border:none;}
  }
}

a {
  border:1px solid var(--mid-gray);
  border-radius:4px;
  cursor:pointer;
  min-width:12em;
  padding:.5em .75em;
  position:relative;
  line-height:2em;
  transition:background .15s;

  .language {display:inline-block;}
  .expand-string {display:none;}
  .collapse-string {display:none;}
  &:hover {
    background-color:var(--bg-soft);
    .language {display:none;}
    .expand-string {display:inline;}
  }
  .open & {
    background-color:var(--bg-soft);
    border-radius:0 0 4px 4px;
    .language {display:none;}
    .expand-string {display:inline;visibility:hidden;}
    .collapse-string {
      display:inline;
      position:absolute;
      top:.5em;
      left:.75em;
    }
  }



  @media($md) {
    border-color:transparent;
    min-width:unset;
    &:hover, .open & {border-color:var(--mid-gray)}
  }

  i {
    @include FA;
    font-size:22px;
    line-height:2rem;
    margin-left:.75em;
    min-width:1.2em;
    text-align:center;
    &::before {content:'\f0ac';}
  }
  &:hover i::before {content:'\f106';}
  .open & i::before {content:'\f107';}
}

</style>
