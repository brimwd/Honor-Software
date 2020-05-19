<template>
<article class="about-page honor-page team-page">
  <div class="row">
    <div class="col">
      <h1 class="purpose">Meet The Team</h1>
    </div>
  </div>

  <div class="row">
    <h1 class="col-12 my-5">Disciplines</h1>
    <ServiceOverview
      class="col-12"
      v-for="team in teams"
      :key="team.title"
      :service="team"
    />
  </div>

  <div class="row">
    <h1 class="col-12 mb-5">Employee Spotlight</h1>
    <Bio :content="employeeSpotlight[0]" />
    <Bio :content="employeeSpotlight[1]" />
    <Bio :content="employeeSpotlight[2]" />
  </div>

  <div class="row">
    <h1 class="col-12 my-5">Advisors</h1>
    <ServiceOverview
      class="col-12 col-md-6"
      v-for="associate in advisors"
      :key="associate.title"
      :service="associate"
      centered
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
      employeeSpotlight: [
        {
          name: `Brian`,
          title: `Product Design Lead`,
          imageAlt: `Photo of Brian`,
          imageUrl: ``,
          text: [
            `Honor.Software is Brian's fourth startup as a product designer. With over 15 years of experience in software design and development, Brian's passion for accessibility, economic-empowerment, and conservation-of-resources are evident in everything he does.`,
            `Brian is a seasoned leader and has worked for major brands including Amazon, Microsoft, Bluetooth, T-Mobile, Walmart, and ServiceNow, and many non-profit organizations.`,
          ],
          personalStatement: `I believe that technology can change the world, but only well-designed technology will make it better. At Honor.Software we believe we can harness technology to solve problems and make the world better – one project at a time.`,
        },
        {
          name: `Victoria`,
          title: `Product Manager`,
          imageAlt: `Photo of Victoria`,
          imageUrl: ``,
          text: [
            `Fluent in Mandarin and English, Victoria has experience managing multi-million dollar initiatives spanning months and oceans; conception through delivery.`,
            `Victoria leverages her logistics-background and business-acumen to guide our product strategy; Her unwavering focus and next-level work ethic carry us to success in every project she tackles.`,
            // `Publication: A Comparison of Methodologies for Measuring Transport Distance in Supply Chain Last Mile DeliveryPublished July 16, 2016 Proceedings of 36th International Business Research Conference 14, Ryerson University, Toronto, Canada. ISBN: 978-1-925488-10-4.`,
          ],
          personalStatement: `Honor.Software is more than a product or a timeline; This company represents not-only the opportunity to make an impact at a global scale, but also the possibility of reaching individuals - making lives easier in a real and tangible way.`,
        },
        {
          name: `Cameron`,
          title: `Senior UI Engineer`,
          imageAlt: `Photo of Cameron`,
          imageUrl: ``,
          text: [
            `With 11 years of experience as a software developer, Cameron has dedicated himself to engineering responsive, intuitive user interfaces and to writing scalable, maintainable code.`,
            `Having worked as a UI Engineer for organizations including Apple and the US Geological Survey, Cameron is an expert in crafting unparalleled experiences with industry-leading performance, modern design-principles, and extensible-systems.`,
          ],
          personalStatement: `Bringing the 'wow'-factor to new experiences while guaranteeing performance and reliablility across platforms is a relentless challenge. At Honor, we don't just say "uncompromising engineering"; we live it.`,
            // `Under Brian's leadership we continuously strive to balance building unparalleled experiences with uncompromising engineering.`
        },
      ],
      advisors: [
        {
          title: `Jessie Wang`,
          text: [`Investment and public relations`],
        },
        {
          title: `Hindley & Henderson Law Offices`,
          text: [`Legal Counsel (US)`],
        },
        {
          title: `Zhen Zhang (Jingshi Law Offices)`,
          text: [`Legal Counsel (China)`],
        },
        {
          title: `Michael Afrides`,
          text: [`Technical Advisor`],
        },
      ],
      teams: [
        {
          title: `Design Team`,
          icon: `fad fa-drafting-compass`,
          text: [
            `Usable design has been a lifelong pursuit for our UX specialists, many of whom have evangelized accessibility and usability for more than 15 years. From the beginning of each project, a UX specialist will partner with your team to understand requirements, define project goals, and plan our approach.`,
            `By partnering closely with our research and engineering teams, our designers ensure we make an impact by solving the right problems in sustainable ways.`,
            `To support the longevity and utility of our work, our designers will build or extend your brand system with mobile-first, responsive designs. We utilize industry-standard tools including Sketch, Photoshop, Illustrator, and Balsamiq.`,
          ],
        },
        {
          title: `Research Team`,
          icon: `fad fa-analytics`,
          text: [
            `Research is core to our mission at Honor. We ask open-ended questions and approach our analysis with humility so that we can stay true to our goals. Our expert team relies on many industry-standard methodologies to produce comprehensive analyses accounting for both quantitative and qualitative factors. Our researchers frequently partner with design to deliver A/B tests and drive definitive conclusions.`
          ],
        },
        {
          title: `Engineering Team`,
          icon: `fad fa-chart-network`,
          text: [
            `Our full-stack engineers carefully plan projects to maximize their utility while keeping each codebase light and flexible. We specialize in building versatile and easy-to-maintain ‘software as a service’ applications using standard JavaScript libraries. Our code is well-documented through code-comments and our diligent git-commit practices. Using GitHub, we can leverage Microsoft’s industry-leading security and enterprise-grade access controls to grant permission, control sharing, and transfer ownership.`,
            `Our core platform is built using modern standards on a Mongo-Express-Node stack, and utilizes AJAX, JSON, and either Vue or jQuery as appropriate.`,
          ]
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
