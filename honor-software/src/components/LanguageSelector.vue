<template>
    <div
        class="dropdown"
        id="language"
    >
        <span>English</span>
        <i class="far fa-angle-down" aria-label="language selector" />
    </div>
</template>

<script>
import LanguageSelector from '@/components/LanguageSelector.vue'

export default {
    name: 'Footer',
    components: {
        LanguageSelector,
    },
    // data() {
    //     return {
    //         partners: [
    //             "U.S. Government",
    //             "Amazon",
    //             "Apple",
    //             "Bluetooth",
    //             "Microsoft",
    //             "Walmart",
    //             "T-Mobile",
    //             "Seattle Pride",
    //         ]
    //     };
    // },
}
</script>

<style scoped lang="scss">
    .name-drop {
        margin: 80px 0;

        .partner {
            margin: 10px 0;
        }
    }
</style>
