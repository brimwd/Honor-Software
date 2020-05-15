<template>
<article class="customers-page honor-page">
  <h1 class="pt-3 mt-5 text-center">Customer Stories</h1>

  <Carousel />

  <div class="row">
    <div class="col-12 col-md-10 mt-3 mb-2 mx-auto">
      <h3 class="px-3">Honor.Software is proud to support causes including literacy, equality, agriculture, education, economic-empowerment, government, and environmental initiatives.</h3>
    </div>
  </div>

  <Partners class="mb-5" />
  <ContactSection />

</article>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import ContactSection from '@/components/ContactSection.vue'
import Partners from '@/components/Partners.vue'
export default {
  name: 'Customers',
  components: {
    Carousel,
    ContactSection,
    Partners,
  },
  // data() {
  //   return {
  //     currentSlide: 0,
  //     slides: [
  //       {
  //         quote: [
  //           "At scheduleUX we had a dream of making scheduling simple. In our case, 'simple' turned out to be really tricky.",
  //           "Partnering with the brilliant (and dapper) team at Honor.Software helped make our dream a reality. Honor has built a scheduling service that was perfect for our needs. Even as we worked through iterations, Honor was able to keep us on track and delivered our platform within the original timeline.",
  //           "The positive feedback from our customers and the ongoing maintenance and support we receive from Honor exceeds all of our expectations.",
  //           "Our results have been phenomenal with Honor's Virtual Scheduling platform. Leveraging their digital services has freed us to transform our business model and focus our efforts on solving new problems for our customers.",
  //         ],
  //         author: 'ScheduleUX Product Team',
  //       },
  //       {
  //         quote: [
  //           "With well earned respect, I confidently recommend Honor.Software for future software projects, and programming services. The tech team's exceptional work was impressive and their hard work and dedication to the job was an integral part of the successful completion of the project.",
  //           "I had the good fortune of working with the tech team in January 2020, with the project on the system upgrade. With a number of requirements we've identified at that time, involving multiple confined access, detailed planning, implementation, and communication with the tech team members and contractors was critical. The key to our success was Honor's ability to work with one vision. Honor's efforts and talents were a significant contribution to the entire team in accomplishing great results considering some of the project setbacks."
  //           ],
  //         author: 'Private Client',
  //       },
  //       {
  //         quote: [
  //           "Micheal, Cameron, and the rest of the crew supported each other seamlessly, worked diligently, and communicated well together to successfully complete the system transformation. The product team managed their portion of the job planning process / procedures exceptionally well and were always prepared to proactively identify options and solutions to challenges that occurred during the project. The requirements were managed with prioritization, and Michael smoothly made those adjustments to enhance the flow of progress. The satisfying product was the result of the team's ability to communicate and work collaboratively and unselfishly towards the common goal."
  //         ],
  //         author: 'Non Profit Client',
  //       },
  //     ],
  //   };
  // }
}

</script>
