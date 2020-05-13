<template>
<aside @click="toggleMessage">
<div class="row">
  <div class="col-12">
    <div class="toggle-toast alert"
      :class="{'alert-dismissible': content.dismissable,
               'expanded': expanded}"
      role="alert"
    >
      {{ expanded ? content.message : content.headline }}
      <!-- <p
        v-if="expanded"
        v-text="content.message"
      /> -->
      <!-- class="pre-formatted" -->
    </div>
    <button
      v-if="content.dismissable"
      type="button"
      class="close"
      :data-dismiss="alert"
      aria-label="Close"
    >
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</div>
</aside>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  data() {
      return {
          expanded: false,
      };
  },
  methods: {
    toggleMessage() {
      this.expanded = !this.expanded;
    },
  },
}
</script>

<style scoped lang="scss">
aside {
  background-color:var(--bg-text);
  cursor:pointer;
  margin:0 -15px 1em;
  position:relative;
  z-index:100;
  &:hover {background-color:var(--bg-intense);}
}
.col-12 {padding:0;}

.toggle-toast {
  border:none;
  border-radius:0;
  color:var(--bg-soft);
  display:block;
  margin-bottom:0;
  text-align:center;

  &:hover {color:var(--bg);}
  &.expanded {text-align:left;}
}
.alert {margin-bottom:0;}
.close {
    position:absolute;
    right:15px;
}
</style>
