<template>
  <div id="app">
    <transition name="fade">
      <div id="index" v-if="shallGif">
        <img src="@/assets/img/video.gif" alt />
      </div>
    </transition>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <appFooter v-show="show"></appFooter>
  </div>
</template>

<script>
import appFooter from "@/view/common/footer";
export default {
  name: "App",
  data() {
    return {
      show: true,
      shallGif: true
    };
  },
  components: {
    appFooter
  },
  created() {
    this.gettype();
  },
  mounted() {
    this.gifInit();
  },
  watch: {
    // 利用watch方法检测路由变化：
    "$route.path": function(to, from) {
      this.gettype();
    }
  },
  methods: {
    gifInit() {
      setTimeout(() => {
        this.shallGif = false;
      }, 5500);
    },
    gettype() {
      let path = this.$route.path.split("/");
      let indexPath = path[path.length - 1];
      if (
        indexPath == "easy" ||
        indexPath == "easydetail" ||
        indexPath == "map" ||
        indexPath == "" ||
        // indexPath == "manual" ||
        indexPath == "vr"
      ) {
        this.show = false;
      } else {
        this.show = true;
      }
    }
  }
};
</script>

<style lang="less">
@import "../static/base.css";
.app{
  height: 100%;
  display: flex;
  flex-direction: column;
  .hello{
    flex: 1;
  }
  .footer{
    height: 60px;
  }
}
#index {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  z-index: 56;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
