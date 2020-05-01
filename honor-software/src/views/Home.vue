<template>
    <div class="home">
        <Marquee />
        <Headliner
            :content="articles[0]"
            flipped
        />
        <NameDrop />
        <PromoBar
            :info="promos"
        />
        <Headliner
            :content="articles[1]"
        />
    </div>
</template>

<script>
// @ is an alias to /src
import Headliner from '@/components/Headliner.vue'
import Marquee from '@/components/Marquee.vue'
import NameDrop from '@/components/NameDrop.vue'
import PromoBar from '@/components/PromoBar.vue'

export default {
    name: 'Home',
    components: {
        Headliner,
        Marquee,
        NameDrop,
        PromoBar,
    },
    data() {
        return {
            articles: [
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
                    title: "News Content",
                    text: [
                        "Open-source technologies power incredible projects around the world, from Google's Chrome browser and Android OS to Twitter and a majority of the world's websites.",
                        "Learn more how open-source makes the difference in our report.",
                    ],
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
