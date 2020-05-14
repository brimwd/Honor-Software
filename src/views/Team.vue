<template>
<article class="about-page honor-page team-page">
  <div class="row">
    <div class="col">
      <h1 class="purpose">Meet The Team</h1>
    </div>
  </div>

  <div class="row">
    <h1 class="col-12 mb-5">Leadership</h1>
    <Bio
      :content="leadership[0]"
    />
    <Bio
      :content="leadership[1]"
    />
    <Bio
      :content="leadership[2]"
    />
  </div>

  <div class="row">
    <h1 class="col-12 my-5">Advisors</h1>
    <ServiceOverview
      class="col-12 col-md-4"
      v-for="associate in threeAdvisors"
      :key="associate.title"
      :service="associate"
    />
  </div>

  <Partners class="mt-3 mb-5" />
</article>
</template>

<script>
import Bio from '@/components/Bio'
import Partners from '@/components/Partners.vue'
import ServiceOverview from '@/components/ServiceOverview'

export default {
  name: "About",
  components: {
    Bio,
    Partners,
    ServiceOverview,
  },
  data() {
    return {
      leadership: [
        {
          title: "Brian Donahue, CEO",
          imageAlt: "Picture of Brian Donahue",
          imageUrl: "",
          text: [
            "Honor.Software is Brian's fourth startup as a tech-entrepreneur. With over 15 years of experience in software design and development, Brian's passion for accessibility, economic-empowerment, and conservation-of-resources are evident in everything he does.",
            "Brian is a seasoned leader and has worked for major brands including Amazon, Microsoft, Bluetooth, T-Mobile, Walmart, and ServiceNow, and many non-profit organizations.",
          ],
          personalStatement: "I believe that technology can change the world, but only well-designed technology will make it better. At Honor.Software we believe we can harness technology to solve problems and make the world better – one project at a time.",
        },
        {
          title: "Victoria Cai, COO",
          imageAlt: "Picture of Victoria Cai",
          imageUrl: "",
          text: [
            "As our COO, Victoria is the public face for Honor.Software. Internally, Victoria leverages her logistics-background and business-acumen to guide our investments, manage relationships, and keep us on track.",
            "Victoria graduated from Kent State University with MBAs in International Business, and Supply Chain Management. Fluent in Mandarin and English, Victoria has experience managing multi-million dollar initiatives spanning months and oceans; conception through delivery.",
            "Publication: A Comparison of Methodologies for Measuring Transport Distance in Supply Chain Last Mile DeliveryPublished July 16, 2016 Proceedings of 36th International Business Research Conference 14, Ryerson University, Toronto, Canada. ISBN: 978-1-925488-10-4.",
          ],
          personalStatement: "Honor.Software is more than a product or a timeline; This company represents not-only the opportunity to make an impact at a global scale, but also the possibility of reaching individuals - making lives easier in a real and tangible way.",
        },
        {
          title: "Cameron Donahue, CTO",
          imageAlt: "Picture of Cameron Donahue",
          imageUrl: "",
          text: [
            "With 11 years of experience as a software developer, Cameron has dedicated himself to engineering responsive, intuitive user interfaces and to writing scalable, maintainable code.",
            "Having worked as a UI Engineer for organizations including Apple and the US Geological Survey, Cameron is an expert in crafting unparalleled user-experiences, with industry-leading performance, modern design-principles, and extensible-systems. ",
          ],
          personalStatement: "Leading Technology for Honor.Software is a relentless challenge and non-stop personally rewarding. Under Brian's leadership we continuously strive to balance building unparalleled experiences with uncompromising engineering.",
        },
      ],
      threeAdvisors: [
        {
          title: "Jessie Wang",
          text: "Investment and public relations",
        },
        {
          title: "Hindley & Henderson Law Offices",
          text: "Legal Counsel (US)",
        },
        {
          title: "Zhen Zhang (Jingshi Law Offices)",
          text: "Legal Counsel (China)",
        },
      ],
      threeDisciplines: [
        {
          title: "Tech Team",
          text: "We build with on dependable tools and leverage reliable, industry-standard tools and open-source libraries including: Vue, Angular, Node and NPM, Express, and Git/Github.",
        },
        {
          title: "UX Team",
          text: "We provide designs for the engineering team to guide them as they craft our pixel-perfect UIs. Our designers care about accessibility and prioritize usability and mobile-ready 'responsive' design as part of all of our projects. We create wireframes, mockups, and custom icons using Sketch, Photoshop, Illustrator, Affinity, Figma, InVision, Balsamiq, and other industry-standard tools.",
        },
        {
          title: "Research, Analysis Team",
          text: "We drive informed design decisions through UX testing and web traffic analysis. The complete understandings we garner through our research helps us drive Honor and turn abstract data into actionable plans.",
        },
      ],
    };
  },
}
</script>

<style lang="scss" scoped>
h1 {text-align:center;}

.purpose {
  text-align: center;
  margin-top: 60px;
  margin-bottom: 60px;
}
</style>
