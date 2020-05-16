<template>
<nav class="d-block d-sm-none">
  <div
    id="speedDial"
    :class="{'open': isOpen}"
  >
    <transition-group
      name="staggered-fade"
      tag="ul"
      :style="{ '--total': allNavLinks.length - 1 }"
    >
      <li
        v-for="(link, index) in allNavLinks"
        v-if="isOpen"
        :key="link.label"
        :style="{ '--i': index }"
        @click="isOpen = false"
      >
        <router-link :to="link.path">
          <span class="label">
            {{ link.label }}
          </span>
          <span class="icon">
            <i class="fas fa-fw" />
          </span>
        </router-link>
      </li>
    </transition-group>

    <div
      id="speedDialTrigger"
      @click="isOpen = !isOpen"
    >
      <i class="fas fa-fw"
        :class="{ 'fa-bars' : !isOpen, 'fa-plus' : isOpen }"
        aria-label="toggle navigation"
      />
    </div>
  </div>

  <div
    id="overlay"
    @click="isOpen = false"
  />
</nav>
</template>

<script>
export default {
  name: 'SpeedDial',
  props: {
    navLinks: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      homeLinkData: {
          label: "Home",
          path: "/",
      },
      isOpen: false,
    };
  },
  computed: {
      allNavLinks() {
          return this.navLinks.concat(this.homeLinkData);
      },
      linkIcon() {
          return this.isOpen ? 'fa-times' : 'fa-bars';
      },
  },
  methods: {
  },
}

</script>

<style scoped lang="scss">
#speedDial {
  text-align:right;
  position:fixed;
  bottom:15px;
  right:10px;
  z-index:5;

  li {
    cursor:pointer;
    list-style:none;
    margin-left:auto;
    max-width:-webkit-fit-content;
    max-width:max-content;
  }

  #speedDialTrigger {
      background-color:var(--text);
      border:2px solid black;
      border-color:#ceae74 #bb9b61 #bb9b61 #ceae74;
      border-radius:30px;
      color:var(--bg);
      cursor:pointer;
      display:inline-block;
      font-size:22px;
      padding:11px 12px 7px 13px;

      i {
          transform:rotateZ(0);
          transition:.2s transform ease-out;
      }

      &:hover {
          background-color:var(--bg-intense);
          @include shadow;
      }

  }
  &.open #speedDialTrigger i {
      transform:rotateZ(45deg);
  }
}


span {
  &.label {
    background-color:white;
    border-radius:4px;
    color:black;
    display:inline-block;
    padding:5px 10px;
    // .router-link-exact-active & {
    //   @media($dark) {}
    // }
  }

  &.icon {
    border-radius:30px;
    color:white;
    display:inline-block;
    font-size:1.55em;
    margin:6px 2px 6px 6px;
    padding:6px 8px 3px;
    text-shadow:$shadow-text, $shadow-text, $shadow-text;
    vertical-align:middle;

    .router-link-exact-active & i::before {
      content:'\f104';
      position:relative;
      left:-.05em;
    }

    &.shift-up {padding:5px 8px 4px;}

  }
}

#overlay {
  background-color:black;
  opacity:0;
  transition:opacity 300ms;
  position:fixed;
  top:0;
  right:0;
  bottom:0;
  left:0;
  z-index:-1;

  #speedDial.open ~ & {
    opacity:0.5;
    z-index:3;
  }
}

.staggered-fade {
  &-leave-active {
    transition: opacity 0.2s linear, transform 0.2s cubic-bezier(.5,0,.7,.4); //cubic-bezier(.7,0,.7,1);
    transition-delay: calc( 0.04s * var(--i) );
  }

  &-enter-active {
    transition: opacity .3s linear, transform .3s cubic-bezier(.2,.5,.1,1);
    transition-delay: calc( 0.1s * (var(--total) - var(--i)) );
  }

  &-enter,
  &-leave-to {
    opacity: 0;
    transform: translateX(100px);
  }
}
</style>
