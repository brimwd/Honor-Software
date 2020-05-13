<template>
  <div class="about-page honor-page">
    <div class="row">
        <div class="col">
            <h1 class="purpose">About Us</h1>
            <p class="px-3">At Honor, we provide software solutions to help people work smarter and achieve more.</p>
            <p class="px-3">By automating redundant work and menial tasks, we can free your employees to focus on the things that need their attention most.</p>
            <p class="px-3"><router-link class="btn btn-gold" to="/about/why-honor" v-text="'Why Honor?'" /></p>
        </div>

    </div>

    <div class="row px-3 py-5 my-5">
        <ServiceOverview
            class="col-12 col-md-4"
            v-for="service in threeServices"
            :key="service.title"
            :service="service"
        />
    </div>
    <div class="row">
        <h1 class="col-12 mb-5">Leadership</h1>
        <ServiceOverview
            class="col-12 col-md-8 offset-md-2 mb-5"
            v-for="associate in threeLeaders"
            :key="associate.title"
            :service="associate"
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
    <Partners class="my-5" />
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
h1 {text-align:center;}

.purpose {
    text-align: center;
    margin-top: 60px;
    margin-bottom: 60px;
}
</style>
