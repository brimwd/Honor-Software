<template>
  <article class="about-page honor-page">
  <div class="row">
    <div class="col">
      <h1 class="purpose">Why Choose Us?</h1>
      <p class="px-3">Honor.Software helps businesses conserve resources. We help smooth out the "snags" in your process through our expert analysis of incorporated tools and resources, and can dramatically accelerate the effectiveness of your business.</p>
      <p class="px-3">We provide software solutions to help people work smarter and achieve more. By automating redundant work and menial tasks, we can free your employees to focus on the things that need their attention most.</p>
      <p class="px-3">Honor.Software consists of a passionate team of designers, developers, engineers, analysts, product managers, writers, editors, and other specialists.</p>
      <p class="px-3">Our team specializes in building websites, software services, modernizing user interfaces, optimizing application workflows, producing documentation, and design consultation.</p>
      <p class="px-3">Honor is a multicultural company, based in Silicon Valley. We offer service in English and Chinese. We're invested in continuous education, employees are encouraged to mentor others in tech, participate in the creative commons, and to volunteer their talents in ways which support their personal philanthropic aims.</p>
    </div>
  </div>

  <PromoBar :promos="promos"/>
  <Quote :content="purposeStatement"/>

  <div class="row mb-5 pb-5">
    <div class="col">
      <h2 class="purpose px-3">Four reasons leading enterprises work with Honor</h2>
      <ol>
        <li>
          <b>Successful outcomes</b>
          <p class="pr-3">Our cloud native technologies and modern practices have sparked major improvements in how companies design, develop, deliver, and operate software—and in how they run their business.</p>
        </li>
        <li>
          <b>Happy teams</b>
          <p class="pr-3">We attract and keep top talent—and deliver better software, faster. Honor instills a culture of test-driven development, pair programming, user-centric design, and web-native operations.</p>
        </li>
        <li>
          <b>Cloud neutrality</b>
          <p class="pr-3">Our independent web-stack can run on any public or private cloud-hosting or a private server of your choosing. By building fully-integrated applications, our platform-independence will never waver and our customers remain free to choose the hosting that works best for them.</p>
        </li>
        <li>
          <b>Open-source expertise</b>
          <p class="pr-3">We take mature open-source software (OSS) and embed it into commercial products that you can trust. We leverage many of the most trusted libraries, including: Node, Underscore, MongoDB, jQuery, Vue, and Express.</p>
        </li>
      </ol>
    </div>
  </div>

  <ContactSection />

</article>
</template>

<script>
import ContactSection from '@/components/ContactSection.vue'
import PromoBar from '@/components/PromoBar.vue'
import Quote from '@/components/Quote.vue'

export default {
  name: "WhyHonor",
  components: {
    ContactSection,
    PromoBar,
    Quote,
  },
  data() {
    return {
      promos: [
        {
          icon: 'fad fa-user-chart',
          text:"Operational Efficiency",
        },
        {
          icon: 'fad fa-cogs',
          text:"Streamlined Workflows",
        },
        {
          icon: 'fad fa-tachometer-fast',
          text:"Accelerated Onboarding",
        },
        {
          icon: 'fad fa-users-crown',
          text:"Improved Productivity",
        }
      ],
      purposeStatement: {
        quote: [
          "We make great products.",
          "We solve the right problems by asking the right questions.",
          "We believe software should be easy.",
          "We make systems work.",
        ],
        author: 'Honor.Software',
        centered: true,
      }
    };
  },
}
</script>

<style lang="scss" scoped>
.purpose {
  text-align:center;
  margin-top:60px;
  margin-bottom:60px;
}
ol {list-style:none;counter-reset:counter;}
li {
  counter-increment:counter;
  position:relative;

  &::before {
    content:counter(counter) ". ";
    font-size:1.5em;
    font-weight:bold;
    position:absolute;
    right:calc(100% + .3em);
  }
  b {font-size:1.5em;}
}
</style>
