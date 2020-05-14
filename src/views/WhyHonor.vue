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
      <h2 class="purpose px-3">Six reasons leading enterprises work with Honor</h2>
      <ol>
        <li>
          <b>Successful outcomes</b>
          <p class="pr-3">Our cloud native technologies and modern practices have sparked major improvements in how companies design, develop, deliver, and operate software—and in how they run their business.</p>
        </li>
        <li>
          <b>A trusted partnership</b>
          <p class="pr-3">Honor has supported the leading companies in virtualizing their data centers, and changing how they run their business. Now, we're leading these same organizations through the next stage of their transformation.</p>
        </li>
        <li>
          <b>Happy teams</b>
          <p class="pr-3">We attract and keep top talent—and deliver better software, faster. Honor instills a culture of test-driven development, pair programming, user-centric design, and cloud native operations. Our friendly support staff would be happy to take on any manual workflows while we make the customizations.</p>
        </li>
        <li>
          <b>Embedded security and automation</b>
          <p class="pr-3">Achieve a 200:1 developer-to-operator ratio. Our products are highly automated and easy to use. Update components with no downtime, constantly rotate credentials, rebuild base infrastructure, and patch security.</p>
        </li>
        <li>
          <b>Cloud neutrality</b>
          <p class="pr-3">Run your applications where you want and scale them across infrastructure targets. Whatever your chosen architecture, get a reliable and consistent operational experience.</p>
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
          // strong:"73%",
          text:"Operational Efficiency",
        },
        {
          // strong:"52%",
          text:"Streamlined Workflows",
        },
        {
          // strong:"86%",
          text:"Accelerated Onboarding",
        },
        {
          // strong:"47%",
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
