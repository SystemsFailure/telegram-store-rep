<template>
    <ModuleCretedProductCard v-if="showCreatedWindow"></ModuleCretedProductCard>
    <div class="main-class-dashboard">
        <div class="closebtn"><i @click="closeDashboard" style="color: #333; margin-left: auto; font-size: 12px;" class="fi fi-bs-cross"></i></div>
        <div class="inner">
            <div class="create-product-box">
                <span @click="() => this.openCreatedWindow()">Создать продукт</span>
            </div>
        </div>
    </div>
</template>
<script>
import ModuleCretedProductCard from '@/components/ModuleCretedProductCard.vue'
import {mapMutations, mapState} from 'vuex'
export default {
    data() {
        return {
            
        }
    },
    computed: {
        ...mapState('adminPanel', {
            showCreatedWindow: 'showCreatedWindow'
        })
    },
    methods: {
        ...mapMutations('adminPanel', {
            closeDashboard: 'closeDashboard',
            openCreatedWindow: 'openCreatedWindow'
        }),
    },
    components: {
        ModuleCretedProductCard,
    }
}
</script>
<style scoped>
.closebtn {
    width: 100%;
    padding: 5px;
    display:flex;
    align-items: center;
    color: var(--tg-theme-text-color);
}
.main-class-dashboard {
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--tg-theme-bg-color);
    z-index: 12;
}

.inner {
    width: 100%;
    height: 100%;
    padding: 10px;
}

.create-product-box {
    width: 100%;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>