<template>
  <div>
    <transition name="el-zoom-in-center" appear>
      <C></C>
    </transition>
  </div>
</template>
 
<script>
import C from "@/components/demo/Car";
export default {
  components: {
    C
  },
  head() {
    return {
      title: '测试'
    };
  }
};
</script>

