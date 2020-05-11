<template>
  <div class="about-page honor-page">
    <h1 class="purpose">Why Honor.Software?</h1>
    <p class="col-sm-12 col-md-8 col-lg-6">Honor helps businesses conserve resources. We help smooth out the “snags” in your process through our expert analysis of incorporated tools and resources, and can dramatically accelerate the effectiveness of your business.</p>
    <p class="col-sm-12 col-md-8 col-lg-6">We provide software solutions to help people work smarter and achieve more. We solve problems by eliminating redundant work and menial tasks. We free the most valuable asset which is the people, and bring them to work on the things that need their attention most.</p>
    <p class="col-sm-12 col-md-8 col-lg-6">Honor.Software consists of a passionate team of designers, developers, engineers, BSA, product managers, writers, editors, and other specialists.</p>
    <p class="col-sm-12 col-md-8 col-lg-6">Our team specializes in building websites, software services, modernizing user interfaces, optimizing application workflows, producing documentation, and design consultation.</p>
    <p class="col-sm-12 col-md-8 col-lg-6">Honor is a multicultural company, based in Silicon Valley. We offer service in English and Chinese. We’re invested in continuous education, employees are encouraged to mentor others in tech, participate in the creative commons, and to volunteer their talents in ways which support their personal philanthropic aims.</p>

    <div class="row">
        <ServiceOverview
            class="col-4"
            v-for="service in threeServices"
            :key="service.title"
            :service="service"
        />
    </div>
    <div class="row">
        <ServiceOverview
            class="col-3"
            v-for="associate in fourAssociates"
            :key="associate.title"
            :service="associate"
        />
    </div>
    <Partners />
  </div>
</template>

<script>
import Partners from '@/components/Partners.vue'
import ServiceOverview from '@/components/ServiceOverview'

export default {
    name: "About",
    components: {
        Partners,
        ServiceOverview,
    },
    data() {
        return {
            threeServices: [
                {
                    imageAlt: "",
                    imageUrl: "",
                    text: "We build top-of-the-line mobile apps",
                    title: "Mobile Applications",
                },
                {
                    imageAlt: "",
                    imageUrl: "",
                    text: "We build top-of-the-line web apps",
                    title: "Web Applications",
                },
                {
                    imageAlt: "",
                    imageUrl: "",
                    text: "We build top-of-the-line native apps",
                    title: "Mac Native Apps",
                },
            ],
            fourAssociates: [
                {
                    imageAlt: "Picture of Brian Donahue",
                    imageUrl: "",
                    text: "Approved text",
                    title: "Brian Donahue",
                },
                {
                    imageAlt: "Picture of Victoria Cai",
                    imageUrl: "",
                    text: "Approved text",
                    title: "Victoria Cai",
                },
                {
                    imageAlt: "Picture of Cameron Donahue",
                    imageUrl: "",
                    text: "Approved text",
                    title: "Cameron Donahue",
                },
                {
                    imageAlt: "Picture of Advisor",
                    imageUrl: "",
                    text: "Approved text",
                    title: "Advisor",
                },
            ],
        };
    },
}
</script>

<style lang="scss" scoped>
.purpose {
    text-align: center;
    margin-top: 60px;
    margin-bottom: 60px;
}
</style>
