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

<style>

:root {
    --color-orange-white: #fd940b;
    --color-white-orange: rgb(255,255,255);
    --background-gr: linear-gradient(to right, #fc3b22, var(--color-orange-white));
    --color-text-wh: white;
    --color-text-bk: black;
}

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  /* background-image: url(./assets/36548.jpg); */
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  /* overflow-y: hidden;
  overflow-x: hidden; */

}

.main-class {
  color: black;
}
</style>
