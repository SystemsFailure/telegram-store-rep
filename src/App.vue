<template>
  <div class="main-class">
    <div class="inner-container">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped>
*{
  box-sizing: border-box;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main-class {
  color: black;
}
</style>
