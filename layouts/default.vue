<template>
  <el-container>
    <el-header>
      <Mheader></Mheader>
    </el-header>
    <el-main>
      <nuxt></nuxt>
    </el-main>
    <el-footer>
      <Mfooter></Mfooter>
    </el-footer>
  </el-container>
</template>

<script>
import Mheader from "@/components/m-header";
import Mfooter from "@/components/m-footer";

export default {
  components: {
    Mheader,
    Mfooter
  }
};
</script>

<style>
body {
  background-color: #262629;
}
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, SimSun, sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #cbcbcb;
}
a {
  text-decoration: none;
}
.el-header {
  padding: 0 !important;
  background-color: #000;
}
</style>
