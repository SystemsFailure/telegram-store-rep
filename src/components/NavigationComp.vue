<template>
    <div class="main-class-nav-bar" id="navbar">
        <div class="inner">
            <div class="toHomeBtn navBtn" @click="this.$emit('openHomeFunction')">
                <i class="fi fi-ss-home"></i>
                <span>Home</span>
            </div>
            <div class="toCatalogBtn navBtn" @click="this.$emit('openCatalogFunction')">
                <i class="fi fi-ss-shopping-bag-add"></i>
                <span>Catalog</span>
            </div>
            <div class="toCartBtn navBtn" @click="this.$emit('openCartFunction')">
                <i class="fi fi-ss-shopping-cart"></i>
                <span>Cart</span>
            </div>

            <div class="otherContain">
                <div class="LogInBtn" @click="$router.push('/register')">
                    <span>Log in</span>
                    <i class="fi fi-ss-sign-in-alt"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
        }
    },

    methods: {

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
    background: var(--background-gr);
    display: flex;
    align-items: center;
    border-end-end-radius: 10px;
    border-bottom-left-radius: 10px;
    z-index: 10;
}

.inner {
    width: 100%;
    height: 100%;
    padding: 5px;
    display:flex;
    align-items: center;
    font-family: "Gill Sans", sans-serif;
}

.navBtn {
    padding: 6px 10px 6px 10px;
    border-radius: 10px;
    background-color: wheat;
    color: #fc3b22;
    margin-left: 10px;
    display:flex;
    align-items: center;
    justify-content: center;
}

.navBtn:hover {
    cursor: pointer;
    opacity: .8;
    transition: .3s;

}

.otherContain {
    margin-left: auto;
    margin-right: 15px;
    display:flex;
    align-items: center;
}

.LogInBtn {
    padding: 4px 10px 4px 10px;
    border-radius: 10px;
    background-color: wheat;
    color: #fc3b22;
    margin-left: 10px;
    display:flex;
    align-items: center;
}
.LogInBtn:hover {
    cursor: pointer;
    opacity: .8;
    transition: .3s;
}

.fi-ss-sign-in-alt {
    margin-left: 8px;
    margin-top: 4px;
}

.fi {
    margin-right: 5px;
}

.reverse-color-btn {
    width: 100px;
    height: 50px;
    background-color: #321;
    color: white;
    padding: 5px;
}


</style>