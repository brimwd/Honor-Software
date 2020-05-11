<template>
  <!-- <div class="home">
  <MainTitle />
  <ArticleBlurb
    id="news-featured"
    :content="blurbs[0]"
    flipped
  />
  <ArticleBlurb
    :content="blurbs[1]"
  />
  <PromoBar :promos="promos"/>

  <Partners />

  <ArticleBlurb
    :content="blurbs[2]"
    flipped
  />
  <PromoBar :promos="promos2"/> -->

  <div class="container-fluid">
  <header id="marquee" class="row jumbotron">
    <div class="col-12">
      <h1 id="honor" class="display-4">Honor.<br/>Software</h1>
      <p class="lead">Beautiful, usable software for the future.</p>
    </div>
  </header>
  <section class="headline row py-5" id="news-featured">
    <div class="col-12 col-md-6">
      <!-- background graphic -->
    </div>
    <div class="col-12 col-md-6">
      <h3>News Content</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <a class="btn btn-gold" href="">Read the article</a>
    </div>
  </section>
  <section class="headline row py-5">
    <div class="col-12 col-md-6">
      <h3>Why Honor.Software?</h3>
      <p>Honor provides software solutions to help people work smart and achieve more.</p>
      <p>By automating redundant work and menial tasks, we free your employees to focus on the things that need their attention most.</p>
      <a class="btn btn-gold" href="/services/#process">Our Process</a>
    </div>
    <div class="col-12 col-md-6">
      <!-- background graphic -->
    </div>
  </section>
  <section class="row promo-bar">
    <a class="col-12 col-md-3" href="">
      <h5>Latest Updates</h5>
    </a>
    <a class="col-12 col-md-3" href="">
      <span>Transforming software research</span>
    </a>
    <a class="col-12 col-md-3" href="">
      <span>Learn how</span>
    </a>
    <a class="col-12 col-md-3" href="">
      <span>Customer Story: Hyperdrive Engineering</span>
    </a>
  </section>
  <section class="row" id="honor-powered">
    <div class="col-12">
      <h5>Our team has worked with</h5>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        <div class="col">U.S. Government</div>
        <div class="col">Amazon</div>
        <div class="col">Apple</div>
        <div class="col">Bluetooth</div>
        <div class="col">Microsoft</div>
        <div class="col">Walmart</div>
        <div class="col">T&#8209;Mobile</div>
        <div class="col">Seattle Pride</div>
        <div class="col col-sm-6 col-md col-lg-6">Bob Books</div>
        <div class="col col-sm-6 col-md col-lg-6"><a href="">Work With Us</a></div>
      </div>
    </div>
  </section>
  <section class="row promo-bar">
    <a class="col-12 col-md-3">
      <strong>##%</strong>
      <span>detail</span>
    </a>
    <a class="col-12 col-md-3">
      <strong>##%</strong>
      <span>detail</span>
    </a>
    <a class="col-12 col-md-3">
      <strong>##%</strong>
      <span>detail</span>
    </a>
    <a class="col-12 col-md-3">
      <strong>##%</strong>
      <span>detail</span>
    </a>
  </section>
  <section class="headline row">
    <div class="col-12 col-md-6">
      <!-- background graphic -->
    </div>
    <div class="col-12 col-md-6">
      <h3>Better Together</h3>
      <p>Open-source technologies power incredible projects around the world, from Google's Chrome browser and Android OS to Twitter and a majority of the world's websites.</p>
      <p>Learn more how open-source makes the difference in our report.</p>
      <a class="btn btn-gold" href="">Read the report</a>
    </div>
  </section>
  <section class="headline row py-5">
    <div class="col-12 col-md-6">
      <h3>Accelerate your business</h3>
      <p>Honor specializes in building  websites, software services, and apps.</p>
      <p>We take pride in modernizing workflows, producing documentation, and our expert consultations.</p>
      <p>Find out how we can help you. <a class="" href="/contact/">Get in touch</a></p>
    </div>
    <div class="col-12 col-md-6">
      <!-- background graphic -->
    </div>
  </section>
  </div>
</template>

<script>
// @ is an alias to /src
import ContactSection from '@/components/ContactSection.vue'
import ArticleBlurb from '@/components/ArticleBlurb.vue'
import MainTitle from '@/components/MainTitle.vue'
import Partners from '@/components/Partners.vue'
import PromoBar from '@/components/PromoBar.vue'

export default {
  name: 'Home',
  components: {
    ContactSection,
    ArticleBlurb,
    MainTitle,
    Partners,
    PromoBar,
  },
  data() {
    return {
      blurbs: [
        {
            buttonText: "Get to know us",
            imageUrl: "",
            url: "/about/",
            text: [
                "Honor provides software solutions to help people work smart and achieve more.",
                "By automating redundant work and menial tasks, we free your employees to focus on the things that need their attention most."
            ],
            title: "Why Honor.Software?",
        },
        {
            buttonText: "See the outcome",
            imageUrl: "",
            url: "/stories/scheduleux.html",
            text: ["We worked with ScheduleUX to take their complicated user flow and turn it into a web application with a delightful and intuitive user experience."],
            title: "Mastering User Flow with ScheduleUX",
        },
        {
            buttonText: "Read the report",
            url: "/contact/",
            imageUrl: "",
            text: [
                "Open-source technologies power incredible projects around the world, from Google's Chrome browser and Android OS to Twitter and a majority of the world's websites.",
                "Learn more about how open-source makes the difference in our report.",
            ],
            title: "Better Together",
        },
      ],
      promos: [
        {
          text: "Latest Updates",
          path: "/news",
          isHeader: true,
        },
        {

          text: "Transforming software research",
          path: "/stories/scheduleux.html",
        },
        {
          label: "Learn how",
          path: "/news",
        },
        {
          label: "Customer Story: Hyperdrive Engineering",
          path: "/news",
        }
      ],
      promos2: [
        {
          text: "detail",
          path: "/",
          strong: "##%",
        },
        {

          text: "detail",
          path: "/",
          strong: "##%",
        },
        {
          text: "detail",
          path: "/",
          strong: "##%",
        },
        {
          text: "detail",
          path: "/",
          strong: "##%",
        }
      ],
    };
  },
}
</script>

<style lang="scss" scoped>
#honor {
  text-transform:uppercase;
  font-family:'Marcellus', serif;
}
.jumbotron {
  @include pseudo;
  @include shadow;

  background:var(--bg);
  border-radius:unset;
  margin:0 -30px 8vw;
  padding:4rem 80px 4rem 2rem;
  overflow:hidden;

  @media($sm) {
    border-radius:.3rem;
    margin:3vw 0 8vw;
  }

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
.headline {
  margin-right:0;
  margin-left:0;
}

#honor-powered {
  font-size:1.3rem;
  font-weight:bold;
  padding:4rem 0;
  @media($sm) {padding:4rem 15px;}
}

</style>
