<template>
<div class="row">
    <div class="col-12">
        <div
            :to="content.path"
            class="toggle-toast alert"
            :class="{'alert-dismissible': content.dismissable,
                     'expanded': expanded}"
            role="alert"
            @click="toggleMessage"
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
.col-12 {
  padding: 0;
}

.toggle-toast {
	background-color:var(--bg-text);
	border:none;
  	border-radius:0;
	display:block;
  	margin-bottom:0;
  	text-align:center;

	color: var(--bg-soft);

    &:hover {
        cursor: pointer;
        color:var(--bg);
    }

    &.expanded {
    }
}
.close {
    position: absolute;
    right: 15px;
}
</style>
