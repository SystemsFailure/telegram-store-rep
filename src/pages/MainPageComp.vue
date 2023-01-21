<template>
    <div class="main-page-class">
        <NavigationComp
        @openHomeFunction="() => {this.openHomeComp()}"
        @openCatalogFunction="() => {this.openCatalogComp()}"
        @openCartFunction="() => {this.openCartComp()}"
        ></NavigationComp>

        <div class="content">
            <HomeCompVue v-if="showHomeComp"></HomeCompVue>
            <CatalogCompVue v-if="showCatalogComp"></CatalogCompVue>
            <CartComp v-if="showCartComp"></CartComp>
        </div>
    </div>
</template>
<script>
import NavigationComp from '@/components/NavigationComp.vue'
import HomeCompVue from '@/components/HomeComp.vue';
import CatalogCompVue from '@/components/CatalogComp.vue';
import CartComp from '@/components/CartComp.vue';
import { mapState, mapMutations } from 'vuex';

export default {
    data() {
        return {
            showNavComp: true,
        }
    },
    computed: {
        ...mapState({
            showHomeComp: 'showHomeComp',
            showCatalogComp: 'showCatalogComp',
            showCartComp: 'showCartComp',
        }),
    },
    methods: {
        ...mapMutations({
            openHomeComp: 'openHomeComp',
            openCatalogComp: 'openCatalogComp',
            openCartComp: 'openCartComp',
        })
    },
    components: {
        NavigationComp, HomeCompVue,
        CatalogCompVue, CartComp
    },
}
</script>
<style scoped>

.main-page-class {
    width: 100%;
    height: 130vh;
    padding-top: 50px;
    color: black;
}

.content {
    width: 100%;
    height: 100%;
}

</style>