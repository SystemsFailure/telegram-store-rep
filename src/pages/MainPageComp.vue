<template>
    <div class="menuBtn" @click="openMenu">menu</div>
    <MenuCategoriesComp v-if="showMenuComp"></MenuCategoriesComp>
    <ViewProductCompVue v-if="showViewProductComp"></ViewProductCompVue>
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
import ViewProductCompVue from '@/components/ViewProductComp.vue';
import MenuCategoriesComp from '@/components/MenuCategoriesComp.vue'
import { mapState, mapMutations } from 'vuex';

export default {
    data() {
        return {
            showNavComp: true,
            showMenuComp: false,
        }
    },
    computed: {
        ...mapState({
            showHomeComp: 'showHomeComp',
            showCatalogComp: 'showCatalogComp',
            showCartComp: 'showCartComp',
        }),

        ...mapState('contentModule', {
            showViewProductComp: state => state.showViewProductComp
        }),
    },
    methods: {
        ...mapMutations({
            openHomeComp: 'openHomeComp',
            openCatalogComp: 'openCatalogComp',
            openCartComp: 'openCartComp',
        }),
        ...mapMutations('contentModule', {
            openViewProductComp: 'openViewProductComp'
        }),
        openMenu() {
            this.showMenuComp = !this.showMenuComp
        }
    },
    components: {
        NavigationComp, HomeCompVue,
        CatalogCompVue, CartComp,
        ViewProductCompVue, MenuCategoriesComp
    },
}
</script>
<style scoped>

.menuBtn {
    position: absolute;
    right: 0;
    background: var(--background-gr);
    top: 85vh;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: black;
    padding: 5px 10px 5px 10px;
    margin-right: 20px;
    z-index: 11;
}

.main-page-class {
    position: relative;
    width: 100%;
    height: 100vh;
    padding-top: 50px;
    color: black;
}

.content {
    width: 100%;
    height: 100%;
}

</style>