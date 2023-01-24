<template>
    <div class="main-class-menu">
        <div class="inline-close"></div>
        <div class="inner">
            <div class="list-menu">
                <div class="ratfat" id="fatrat"></div>
                <div class="item" v-for="it in listCategory" :key="it.id">
                    <span :style="it.id===listCategory[listCategory.length - 1].id?{'color':'#999'}:{'color':'#333'}" @click="openCategory(it.id, it)">{{ it.title }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
    data() {
        return {
            listCategory: [
                {id: 0, title: 'Мужчинам'},
                {id: 1, title: 'Женщинам'},
                {id: 2, title: 'Детям'},
                {id: 3, title: 'Админ Панель'},
            ]
        }
    },
    computed: {

    },
    methods: {
        openCategory(id, it) {
            if(id === this.listCategory[this.listCategory.length - 1].id)
            {
                console.log('Вы авторезированны как обычный пользователь')
                let text = document.getElementById('fatrat')
                text.style.color = 'red'
                text.innerHTML = 'Ты блядина жирная не админ! Меня не наебешь хуила!'
                this.openDashboard()
            } else {
                console.log('открыть категорию: ' + it.title)
            }
        },
        ...mapMutations('adminPanel', {
            openDashboard: 'openDashboard',
        }),
    }
}
</script>
<style scoped>

.inline-close {
    width: 100%;
    padding: 5px;
    display: flex;
    align-items: center;
}

.main-class-menu {
    background-color: white;
    z-index: 10;
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 10px;
}

.inner {
    padding-top: 40px;
    width: 100%;
    height: 100%;
}

.list-menu {
    width: 100%;
    height: 100%;
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.item {
    margin-top: 10px;
    font-size: 16px;
    text-transform: uppercase;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 400;
    color: #333;
}

</style>