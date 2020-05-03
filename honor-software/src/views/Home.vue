<template>
    <div class="home">
        <Marquee />
        <Headline
            :content="headlines[0]"
            flipped
        />
        <Partners />
        <PromoBar
            :info="promos"
        />
        <Headline
            :content="headlines[1]"
        />
        <Headline
            :content="headlines[2]"
            flipped
        />
        <ContactSection />
    </div>
</template>

<script>
// @ is an alias to /src
import ContactSection from '@/components/ContactSection.vue'
import Headline from '@/components/Headline.vue'
import Marquee from '@/components/Marquee.vue'
import Partners from '@/components/Partners.vue'
import PromoBar from '@/components/PromoBar.vue'

export default {
    name: 'Home',
    components: {
        ContactSection,
        Headline,
        Marquee,
        Partners,
        PromoBar,
    },
    data() {
        return {
            headlines: [
                {
                    title: "News Content",
                    text: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
                    imageUrl: "",
                },
                {
                    title: "Accelerate your business",
                    text: ["Automating workflows Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam..."],
                    imageUrl: "",
                },
                {
                    title: "Better Together",
                    text: [
                        "Open-source technologies power incredible projects around the world, from Google's Chrome browser and Android OS to Twitter and a majority of the world's websites.",
                        "Learn more about how open-source makes the difference in our report.",
                    ],
                    imageUrl: "",
                },
                {
                    title: "From conversations to collaborations",
                    text: ["Our first project starts here"],
                    imageUrl: "",
                },
            ],
            promos: [
                {
                    label: "Latest Updates",
                    path: "/news/",
                },
                {

                    label: "Transforming software research",
                    path: "/stories/scheduleux.html",
                },
                {
                    label: "Learn how",
                    path: "/news/",
                },
                {
                    label: "Customer Story: Hyperdrive Engineering",
                    path: "/news/",
                }
            ],
        };
    },
}
</script>
