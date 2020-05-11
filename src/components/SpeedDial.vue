<template>
<nav class="d-sm-none">
  <div id="speedDial">
    <ul class="links">
      <li>
        <span class="label">
          <router-link to="/">Home</router-link>
        </span>
        <!-- <span class="icon"><i class="fas fa-fw {{ link.icon }}"></i></span> -->
      </li>
      <li v-for="link in navLinks">
        <span class="label">
          <router-link :to="link.path">
            {{ link.label }}
          </router-link>
        </span>
        <!-- <span class="icon"><i class="fas fa-fw {{ link.icon }}"></i></span> -->
      </li>
    </ul>

    <a id="speedDialTrigger">
      <i class="fas fa-fw fa-bars"></i>
    </a>
  </div>

  <div id="overlay"></div>
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
  }
}

// $(document).ready(function () {
//   $('#speedDialTrigger').on('click', function(){
//     if ($(this).parent().hasClass('open')) {
//       // close speed dial
//       $('#speedDial').removeClass('open');
//       $('#speedDialTrigger > i').removeClass('fa-times').addClass('fa-plus');
//       $('#speedDial li').removeClass('show');
//       return;
//     }

//     $(this).parent().addClass('open');
//     $('#speedDial li').toArray().reverse().forEach(function(li, i) {
//       window.setTimeout(function(){
//         $(li).addClass('show');
//       }, (i+1)*30 );
//     });
//     $('#speedDialTrigger > i').removeClass('fa-plus').addClass('fa-times');
//   });

//   $('#overlay, #dismiss').on('click', function(){
//     if ($('#speedDial').hasClass('open')) {
//       $('#speedDialTrigger').click();
//     }
//   });
// });

</script>

<style scoped lang="scss">
#speedDial {
  text-align:right;
  position:fixed;
  bottom:15px;
  right:10px;
  z-index:5;

  ul {
    display:none;
    margin-bottom:8px;
  }
  li {
    cursor:pointer;
    list-style:none;
    margin-left:auto;
    max-width:-webkit-fit-content;
    max-width:fit-content;
    opacity:0;
    transform:translateY(4px);
    transition:all 300ms;
    transition-delay:100ms;
    span.label {
      background-color:var(--bg);
      border-radius:4px;
      display:inline-block;
      padding:5px 10px;
    }
    span.icon {
      background-color:#E8A679;
      border-radius:30px;
      color:var(--bg);
      display:inline-block;
      font-size:1.55em;
      margin:6px 2px 6px 6px;
      padding:6px 8px 3px;
      vertical-align:middle;
      &.shift-up {
        padding:5px 8px 4px;
      }
    }
  }
  a {
    color:inherit;
    text-decoration:none;
  }
  #speedDialTrigger {
    background-color:var(--text);
    border:2px solid black;
    border-color: #ceae74 #bb9b61 #bb9b61 #ceae74;
    border-radius:30px;
    color:var(--bg);
    cursor:pointer;
    display:inline-block;
    font-size:22px;
    padding:11px 12px 7px 13px;
    &:hover, &.open #speedDialTrigger {
      background-color:var(--bg-intense);
      @include shadow;
    }
    &.open ul {
      display:block;
    }
    &.open li.show {
      opacity:1;
      transform:translateY(0);
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
