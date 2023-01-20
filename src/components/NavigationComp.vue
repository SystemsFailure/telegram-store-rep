<template>
    <div class="main-class-nav-bar" id="navbar">
        <div class="inner">
            <div v-if="lightTheme" class="reverse-color-btn" @click="reverse(1)">Dark</div>
            <div v-else class="reverse-color-btn" @click="reverse(0)">Dark</div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            lightTheme: true,
        }
    },

    methods: {
        reverse(val) {
            let navbar = document.getElementById('navbar')
            if(val === 1) {
                navbar.style.setProperty('background-color', 'var(--color-dark)')
                this.lightTheme = false
            } else {
                navbar.style.setProperty('background-color', 'var(--color-orange-white)')
                this.lightTheme = true
            }
        },
    }
}
</script>
<style scoped>

.main-class-nav-bar {
    width: 100%;
    position: fixed;
    height: 50px;
    top: 0;
    padding: 5px;
    background-color: var(--color-orange-white);
    display: flex;
    align-items: center;
}

.reverse-color-btn {
    width: 100px;
    height: 50px;
    background-color: #321;
    color: white;
    padding: 5px;
}


</style>