<template>
  <div class="home-back">
    <el-container>
      <el-aside class="left-nav">
        <Menu />
      </el-aside>
      <el-main class="content">

      </el-main>
    </el-container>
  </div>
</template>
<script setup>
  import Menu from "./menu/index.vue";
</script>
<style scoped>
  .home-back {
    width: 80vw; /* 调整宽度为视口宽度 */
    height: 80vh; /* 或者其他高度 */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    background: red;
  }
  .left-nav{
    float: left;
    width: 15vw;
    height: 80vh;
    background: purple;
    padding: 20px 0 20px 20px;
    left: 0;
  }
  .content{
    width: 65vw;
    height: 80vh;
    left: 20vw;
    background: green;
    padding: 20px 20px 20px 20px;
  }
</style>