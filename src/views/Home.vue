<template>
  <div class="home">
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
  <PromoBar :promos="promos2"/>

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
          path: "/news/",
          isHeader: true,
        },
        {

          text: "Transforming software research",
          path: "/stories/scheduleux.html",
        },
        {
          text: "Learn how",
          path: "/news/",
        },
        {
          text: "Customer Story: Hyperdrive Engineering",
          path: "/news/",
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

</style>
