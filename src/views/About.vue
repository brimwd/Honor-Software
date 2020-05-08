<template>
  <div class="about-page honor-page">
    <h1 class="purpose">We are Honor.Software</h1>
    <div class="row">
        <ServiceOverview
            class="col-4"
            v-for="service in threeServices"
            :service="service"
        />
    </div>
    <div class="row">
        <ServiceOverview
            class="col-3"
            v-for="associate in fourAssociates"
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
}
</style>
