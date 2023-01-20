<template>
    <div class="main-page-class">
        <NavigationComp></NavigationComp>
    </div>
</template>
<script>
import NavigationComp from '@/components/NavigationComp.vue'
export default {
    data() {
        return {
            showNavComp: true,
        }
    },

    components: {
        NavigationComp
    }
}
</script>
<style scoped>

.main-page-class {
    width: 100%;
    height: 100vh;
    /* padding-top: 50px; */
    /* background: var(--tg-theme-bg-color); */
    color: white;
}

</style>