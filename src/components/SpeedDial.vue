<template>
<nav class="d-block d-sm-none">
  <div
    id="speedDial"
    :class="{'open': isOpen}"
  >
    <ul class="links">
      <li>
        <router-link to="/">
          <span class="label">
            Home
          </span>
          <span class="icon">
              <i class="fas fa-fw" />
          </span>
        </router-link>
      </li>
      <li v-for="link in navLinks">
        <router-link :to="link.path">
          <span class="label">
            {{ link.label }}
          </span>
          <span class="icon">
              <i class="fas fa-fw" />
          </span>
        </router-link>
      </li>
    </ul>

    <div
      id="speedDialTrigger"
      @click="isOpen = !isOpen"
    >
      <i class="fas fa-fw fa-bars fa-plus" />
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
      isOpen: false,
    };
  },
  computed: {
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

  ul {
    display: none;
    margin-bottom: 8px;

    li {
        cursor: pointer;
        list-style: none;
        margin-left: auto;
        max-width: -webkit-fit-content;
        max-width: max-content;
        opacity: 0;
        transform: translateY(4px);
        transition: all 300ms;
        transition-delay: 100ms;

        span.label {
            background-color: var(--bg);
            border-radius: 4px;
            display: inline-block;
            padding: 5px 10px;
        }

        span.icon {
            background-color: #E8A679;
            border-radius: 30px;
            color: var(--bg);
            display: inline-block;
            font-size: 1.55em;
            margin: 6px 2px 6px 6px;
            padding: 6px 8px 3px;
            vertical-align: middle;

            &.shift-up {
                padding: 5px 8px 4px;
            }
        }
    }
  }


  #speedDialTrigger {
    background-color: var(--text);
    border: 2px solid black;
    border-color: #ceae74 #bb9b61 #bb9b61 #ceae74;
    border-radius: 30px;
    color: var(--bg);
    cursor: pointer;
    display: inline-block;
    font-size: 22px;
    padding: 11px 12px 7px 13px;

    i {
        transform: rotateY(0);
        transition: .2s transform ease-out;
    }

    &:hover {
      background-color: var(--bg-intense);
      @include shadow;
    }
  }

  &.open {
      ul {
          display: block;

          li {
              opacity: 1;
              transform:translateY(0);
          }
      }

      #speedDialTrigger {
          background-color: var(--bg-intense);
          @include shadow;

          i {
              transform: rotateZ(45deg);
          }
      }
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
</style>
