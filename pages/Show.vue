<template>
  <div class="m-show">
    <SiteTree class="sitetree"></SiteTree>
    <SiteTable class="sitetable"></SiteTable>
    <!-- <VueCircleProgressBars></VueCircleProgressBars> -->
  </div>
</template>
 
<script>
var routes = {};
let routes_arr = new Set();

routes_arr.add("SiteTable");
// routes_arr.add("VueCircleProgressBars");
routes_arr.add("SiteTree");

routes_arr.forEach(v => {
  routes[v] = require("@/components/demo/" + v).default;
});

export default {
  components: routes,
  data() {
    return {
      title: "状态"
    };
  },
  head() {
    return {
      title: this.title
    };
  }
};
</script>

<style lang="scss" scoped>
.m-show {
  display: flex;
  margin: 0 auto;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  .sitetree {
    margin-right: 5%;
  }
}
</style>
