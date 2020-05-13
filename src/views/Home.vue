<template>
  <!-- <div class="home">
  <PromoBar :promos="promos2"/> -->

  <div class="container-fluid">
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
      <ArticleBlurb
          :content="blurbs[3]"
      />

  <!-- <section class="headline row">
    <div class="col-12 col-md-6">
      // background graphic
    </div>
    <div class="col-12 col-md-6">
      <h3>Better Together</h3>
      <p>Open-source technologies power incredible projects around the world, from Google's Chrome browser and Android OS to Twitter and a majority of the world's websites.</p>
      <p>Learn more about how open-source makes the difference in our report.</p>
      <a class="btn btn-gold" href="">Read the report</a>
    </div>
</section> -->
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
          title: "Why Honor?",
          imageUrl: "",
          text: [
            "At Honor.Software we create solutions to help people work smarter and achieve more.",
            "By automating redundant work and menial tasks, we can free your employees to focus on the things that need their attention most."
          ],
          buttonText: "Get to know us",
          url: "/about",
        },
        {
          title: "ScheduleUX Hits Another Milestone",
          imageUrl: "",
          text: [
            // "We worked with ScheduleUX to take their scheduling service's complicated user flow and turn it into a delightful and intuitive user experience."
            "From scrappy beginnings, ScheduleUX has matured into a robust tool for scheduling sessions, managing participants, and (newly as of last month) coordinating remote interviews and follow-ups over videoconferencing services.",
            "We're proud to announce that we've recently launched a new dashboard to support the ScheduleUX Team in managing their growing user-base."
          ],
          buttonText: "See the outcome",
          url: "/customers/scheduleux",
        },
        {
          title: "Better Together",
          imageUrl: "",
          text: [
            "Open-source technologies power incredible projects around the world, from Google's Chrome browser and Android OS to Twitter and a majority of the world's websites.",
            "Learn more about how open-source makes the difference in our report.",
          ],
          buttonText: "Read the report",
          url: "/contact",
        },
        {
          title: "Accelerate your business",
          imageUrl: "",
          text: [
            "Honor specializes in building  websites, software services, and apps.",
            "We take pride in modernizing workflows, producing documentation, and our expert consultations.",
            "Find out how we can help you.",
          ],
          buttonText: "Get in touch",
          url: "/contact",
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
          text: "Learn how",
          path: "/news",
        },
        {
          text: "Customer Story: Hyperdrive Engineering",
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

.headline {
  margin-right:0;
  margin-left:0;
}

</style>
