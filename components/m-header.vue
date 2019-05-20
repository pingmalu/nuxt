<template>
  <div>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col class="row-width-1140 hidden-xs-only">
        <Mmenu moo="horizontal"></Mmenu>
      </el-col>
    </el-row>
    <el-row class="tac">
      <el-col :span="12" class="display-xs-only" v-clickoutside="handleClose">
        <el-tooltip class="item m-menu1" effect="dark" content="菜单" placement="right">
          <div
            class="row-24"
            aria-expanded="false"
            role="button"
            tabindex="0"
            @click.stop="show = !show"
          >
            <svg focusable="false" viewBox="0 0 24 24">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
            </svg>
          </div>
        </el-tooltip>
        <el-collapse-transition>
          <div v-show="show" style="display:block;">
            <Mmenu v-on:show_off="handleClose"></Mmenu>
          </div>
        </el-collapse-transition>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Mmenu from "@/components/m-menu";

const clickoutside = {
  // 初始化指令
  bind(el, binding, vnode) {
    function documentHandler(e) {
      // 这里判断点击的元素是否是本身，是本身，则返回
      if (el.contains(e.target)) {
        return false;
      }
      // 判断指令中是否绑定了函数
      if (binding.expression) {
        // 如果绑定了函数 则调用那个函数，此处binding.value就是handleClose方法
        binding.value(e);
      }
    }
    // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
    el.__vueClickOutside__ = documentHandler;
    document.addEventListener("click", documentHandler);
  },
  update() {},
  unbind(el, binding) {
    // 解除事件监听
    document.removeEventListener("click", el.__vueClickOutside__);
    delete el.__vueClickOutside__;
  }
};

export default {
  data: () => ({
    show: false
  }),
  directives: { clickoutside },
  components: { Mmenu },
  methods: {
    handleClose(e) {
      this.show = false;
    }
  }
};
</script>

<style>
.grid-content {
  background-color: #000000;
  /* border-bottom: solid 1px #e6e6e6; */
  height: 60px;
}

.row-width-1140 {
  width: 1140px !important;
}
.m-menu1 {
  /* width: 24px; */
  /* padding: 10px; */
  /* width: 24px; */
  /* height: 24px; */
  -webkit-border-radius: 50%;
  border-radius: 50%;
  display: inline-table;
  margin: 4px;
  padding: 12px 12px 8px 12px;
  overflow: hidden;
  vertical-align: middle;
  cursor: pointer;
  height: 24px;
  width: 24px;
  -webkit-user-select: none;
  -webkit-flex: 0 0 auto;
  flex: 0 0 auto;
}

.m-menu1:hover {
  background-color: rgba(255, 255, 255, 0.2);
  outline: none;
}

.m-menu1:focus {
  outline: none;
}

.m-menu1 svg {
  color: #fefefe;
  fill: currentColor;
  width: 24px;
}

.tac.el-row {
  text-align: left;
}

.el-menu-item {
  -webkit-transition: border-color 0.1s, background-color 0.1s, color 0.1s;
  transition: border-color 0.1s, background-color 0.1s, color 0.1s;
}

@media only screen and (min-width: 767px) {
  .display-xs-only {
    display: none !important;
  }
}

@media only screen and (max-width: 767px) {
  .display-xs-only {
    display: block !important;
  }
  .hidden-xs-only {
    display: none !important;
  }
  .el-main {
    padding-left: 0px;
    padding-right: 0px;
  }
}
</style>
