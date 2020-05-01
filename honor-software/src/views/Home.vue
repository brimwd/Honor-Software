<template>
    <div class="home">
        <Marquee />
        <Headline
            :content="headlines[0]"
            flipped
        />
        <NameDrop />
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
        <Headline
            :content="headlines[3]"
        />
    </div>
</template>

<script>
// @ is an alias to /src
import Headline from '@/components/Headline.vue'
import Marquee from '@/components/Marquee.vue'
import NameDrop from '@/components/NameDrop.vue'
import PromoBar from '@/components/PromoBar.vue'

export default {
    name: 'Home',
    components: {
        Headline,
        Marquee,
        NameDrop,
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
