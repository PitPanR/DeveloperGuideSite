<template>
  <div class="home-back">
    <div class="left-nav">
      <Menu />
    </div>
    <div class="content"></div>
  </div>
</template>
<script setup>
  import DocumentPage from "./documentPage/index.vue";
  import Menu from "./menu/index.vue";
</script>
<style scoped>
  .home-back {
    width: 90vw; /* 调整宽度为视口宽度 */
    height: 90vh; /* 或者其他高度 */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .left-nav{
    float: left;
    width: 20vw;
    height: 90vh;
    position: absolute;
    left: 0;
  }
  .content{
    width: 70vw;
    position: absolute;
    height: 90vh;
    left: 20vw;
    padding: 100px 100px 100px 100px;
  }
</style>