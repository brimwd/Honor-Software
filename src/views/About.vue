<template>
  <div class="about-page honor-page">
    <div class="row">
        <div class="col">
            <h1 class="purpose">Why Honor.Software?</h1>
            <p>Honor helps businesses conserve resources. We help smooth out the “snags” in your process through our expert analysis of incorporated tools and resources, and can dramatically accelerate the effectiveness of your business.</p>
            <p>We provide software solutions to help people work smarter and achieve more. We solve problems by eliminating redundant work and menial tasks. We free the most valuable asset which is the people, and bring them to work on the things that need their attention most.</p>
            <p>Honor.Software consists of a passionate team of designers, developers, engineers, BSA, product managers, writers, editors, and other specialists.</p>
            <p>Our team specializes in building websites, software services, modernizing user interfaces, optimizing application workflows, producing documentation, and design consultation.</p>
            <p>Honor is a multicultural company, based in Silicon Valley. We offer service in English and Chinese. We’re invested in continuous education, employees are encouraged to mentor others in tech, participate in the creative commons, and to volunteer their talents in ways which support their personal philanthropic aims.</p>
        </div>
    </div>

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
            class="col-4"
            v-for="associate in threeLeaders"
            :key="associate.title"
            :service="associate"
        />
    </div>
    <div class="row">
        <ServiceOverview
            class="col-4"
            v-for="associate in threeAdvisors"
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
            threeAdvisors: [
                {
                    imageAlt: "Picture of Advisor",
                    imageUrl: "",
                    text: "Investment and public relations",
                    title: "Jessie Wang",
                },
                {
                    imageAlt: "Picture of Advisor",
                    imageUrl: "",
                    text: "Legal Counsel (US)",
                    title: "Hindley & Henderson Law Offices",
                },
                {
                    imageAlt: "Picture of Advisor",
                    imageUrl: "",
                    text: "Legal Counsel (China)",
                    title: "Zhen Zhang (Jingshi Law Offices)",
                },
            ],
            threeLeaders: [
                {
                    imageAlt: "Picture of Brian Donahue",
                    imageUrl: "",
                    text: '"I believe that technology can change the world, but only well-designed technology will make it better. At Honor.Software we believe we can harness technology to solve problems and make the world better – one project at a time."',
                    title: "Brian Donahue",
                },
                {
                    imageAlt: "Picture of Victoria Cai",
                    imageUrl: "",
                    text: '"Honor.Software is more than a product or a timeline -- this company represents not-only the opportunity to make an impact at a global scale, but also the possibility of reaching individuals - making lives easier in a real and tangible way."',
                    title: "Victoria Cai",
                },
                {
                    imageAlt: "Picture of Cameron Donahue",
                    imageUrl: "",
                    text: '"Leading Technology for Honor.Software is a relentless challenge and non-stop personally rewarding. Under Brian\'s leadership we continuously strive to balance building unparalleled experiences with uncompromising engineering."',
                    title: "Cameron Donahue",
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
