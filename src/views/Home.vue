<!-- <template>
  <div class="home">
    <Marquee class="jumbotron"/>
    <Headline
      :content="headlines[0]"
      flipped
    />
    <Partners />
    <PromoBar
      :content="promos"
    />
    <Headline
      :content="headlines[1]"
    />
    <Headline
      :content="headlines[2]"
      flipped
    />
    <ContactSection />
  </div>
</template> -->

<template>
  <div>
  <header id="marquee" class="row jumbotron mb-0">
    <div class="col-12">
      <h1 id="honor" class="display-4">Honor.Software</h1>
      <p class="lead">Beautiful, usable software for the future.</p>
    </div>
  </header>
  <section class="row py-5" id="news-featured">
    <div class="col-12 col-md-6">
      <!-- background graphic -->
    </div>
    <div class="col-12 col-md-6">
      <h3>News Content</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <a class="btn btn-primary" href="">Read the article</a>
    </div>
  </section>
  <section class="row py-5">
    <div class="col-12 col-md-6">
      <h3>Why Honor.Software?</h3>
      <p>Honor provides software solutions to help people work smart and achieve more.</p>
      <p>By automating redundant work and menial tasks, we free your employees to focus on the things that need their attention most.</p>
      <a class="btn btn-primary" href="/services/#process">Our Process</a>
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
  <section class="row">
    <div class="col-12 col-md-6">
      <!-- background graphic -->
    </div>
    <div class="col-12 col-md-6">
      <h3>Better Together</h3>
      <p>Open-source technologies power incredible projects around the world, from Google's Chrome browser and Android OS to Twitter and a majority of the world's websites.</p>
      <p>Learn more how open-source makes the difference in our report.</p>
      <a class="btn btn-primary" href="">Read the report</a>
    </div>
  </section>
  <section class="row py-5">
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
  <footer id="global-footer" class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
    <div class="col">
      <a href="">Contact</a>
      <a href="">Honor News</a>
      <a href="">Careers</a>
      <a href="">Terms of Service</a>
      <a href="">Privacy</a>
      <a id="language"><span>English</span><i class="far fa-angle-down" aria-label="language selector"></i></a>
    </div>
    <div class="alert">Honor.Software &copy;2020 – All rights reserved</div>
  </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import ContactSection from '@/components/ContactSection.vue'
import Headline from '@/components/Headline.vue'
import Marquee from '@/components/Marquee.vue'
import Partners from '@/components/Partners.vue'
import PromoBar from '@/components/PromoBar.vue'

export default {
  name: 'Home',
  components: {
    ContactSection,
    Headline,
    Marquee,
    Partners,
    PromoBar,
  },
  data() {
    return {
      headlines: [
        {
          title: "News Content",
          text: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
          imageUrl: "",
        },
        {
          title: "Accelerate your business",
          text: ["Automating workflows Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam..."],
          imageUrl: "",
        },
        {
          title: "Better Together",
          text: [
            "Open-source technologies power incredible projects around the world, from Google's Chrome browser and Android OS to Twitter and a majority of the world's websites.",
            "Learn more about how open-source makes the difference in our report.",
          ],
          imageUrl: "",
        },
        {
          title: "From conversations to collaborations",
          text: ["Our first project starts here"],
          imageUrl: "",
        },
      ],
      promos: [
        {
          label: "Latest Updates",
          path: "/news/",
        },
        {

          label: "Transforming software research",
          path: "/stories/scheduleux.html",
        },
        {
          label: "Learn how",
          path: "/news/",
        },
        {
          label: "Customer Story: Hyperdrive Engineering",
          path: "/news/",
        }
      ],
    };
  },
}
</script>

<style type="scss" scoped>
.jumbotron {
    margin: 120px inherit;
}
</style>
