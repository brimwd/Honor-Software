<template>
<article class="about-page customer-story">

  <h1 class="purpose">Customer Story</h1>
  <h3>Mastering User Flow with ScheduleUX</h3>
  <Quote :content="statement"/>

  <div class="row my-5 py-5">
    <div class="col">
      <p class="px-3">ScheduleUX streamlines User Research, which is an important part of the software-design process. For over three years, ScheduleUX has relied on our Virtual Scheduling product to power their platform.</p>
      <p class="px-3">Coordinating scheduling with research participants is one of the most arduous aspects of conducting research; it can take hours of schedule-negotiation and follow-up communications to coordinate with each participant.</p>
      <p class="px-3">With ScheduleUX, researchers can dynamically generate schedules, track and engage with users, and manage registrations and notifications with fully automated workflows. Additionally, each study generates with ScheduleUX produces a private, self-service portal where research participants can sign up, get information, and change or cancel their registrations without needing any attention or support from the researchers.</p>
      <p class="px-3 pb-5">The ScheduleUX Support Team also uses a bespoke administrative portal from our Virtual Scheduling product to manage users, access records, and to process refunds or credits.</p>
      <p class="px-3 pt-3">Our product team at Honor.Software solves the right problem the right way. From choosing which components we leverage to evaluating how we manage our data, we build software in thoughtful and intentional ways. Get in touch using the form below to find out what we can do for you.</p>
    </div>
  </div>

  <ContactSection />

</article>
</template>

<script>
import ContactSection from '@/components/ContactSection.vue'
import Quote from '@/components/Quote.vue'

export default {
  name: "ScheduleUX",
  components: {
    ContactSection,
    Quote,
  },
  data() {
    return {
      statement: {
        quote: [
          "At scheduleUX we had a dream of making scheduling simple. In our case, 'simple' turned out to be really tricky.",
          "Partnering with the brilliant (and dapper) team at Honor.Software helped make our dream a reality. Honor has built a scheduling service that was perfect for our needs. Even as we worked through iterations, Honor was able to keep us on track and delivered our platform within the original timeline.",
          "The positive feedback from our customers and the ongoing maintenance and support we receive from Honor exceeds all of our expectations.",
          "Our results have been phenomenal with Honor's Virtual Scheduling platform. Leveraging their digital services has freed us to transform our business model and focus our efforts on solving new problems for our customers.",
        ],
        author: 'ScheduleUX Product Team',
      }
    };
  },
}
</script>

<style lang="scss" scoped>
.purpose {
  text-align: center;
  margin-top: 60px;
}
h3 {
  text-align: center;
  margin-bottom: 60px;
}
</style>
