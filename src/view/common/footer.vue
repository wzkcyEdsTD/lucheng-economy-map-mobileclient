<template>
  <div class="footer">
    <div style="height:60px;"></div>
    <ul class="main-menu">
      <li
        v-for="(item,index) in menuData"
        :key="item.code"
        :class="[item.code,{active:item.code==menuActive}]"
        @click="linkHref(item.path)"
      >
        <i v-if="index != 2" />
        <div v-if="index === 2">
          <div />
        </div>
        <em :class="{overview_center:index===2}">{{item.name}}</em>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuData: [
        {
          name: "经济总图",
          code: "home",
          path: "/home"
        },
        {
          name: "楼宇地图",
          code: "building",
          path: "/building"
        },
        {
          name: "首页",
          code: "overview",
          path: "/overview"
        },
        {
          name: "用地地图",
          code: "land",
          path: "/land"
        },
        {
          name: "招商地图",
          code: "investment",
          path: "/investment"
        }
      ],
      menuActive: "home"
    };
  },
  created() {
    this.getIndexActive();
  },
  watch: {
    // 利用watch方法检测路由变化：
    "$route.path": function(to, from) {
      this.getIndexActive();
    }
  },
  methods: {
    getIndexActive() {
      let path = this.$route.path.split("/");
      let indexPath = path[path.length - 1];
      this.menuActive = path[path.length - 1];
    },
    linkHref(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style lang="less" scoped>
.main-menu {
  position: fixed;
  left: 0;
  right: 0;
  bottom: -1px;
  display: flex;
  background-color: #fff;
  box-shadow: 0 0px 5px rgba(89, 114, 146, 0.3);
  z-index: 10;
  li {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 6px 0;
    position: relative;
    background: #fff;
    > div {
      position: absolute;
      width: 90%;
      height: 0;
      padding-bottom: 90%;
      background-color: #fff;
      top: -26px;
      border-radius: 50%;
      > div {
        width: 60%;
        height: 0;
        padding-bottom: 60%;
        margin-top: 15%;
        margin-left: 20%;
        background-image: url("../../assets/img/overview/首页@2x.png");
        background-size: cover;
      }
    }
    i {
      background-image: url("../../assets/img/footer.png");
      background-repeat: no-repeat;
      background-size: 50px;
      width: 25px;
      height: 25px;
    }
    em {
      height: 20px;
      line-height: 25px;
      font-size: 1.4rem;
      color: #c5ced9;
      font-style: normal;
    }
    .overview_center {
      position: absolute;
      bottom: 6px;
    }
    &.home {
      i {
        background-position: 0 0;
      }
      &.active i {
        background-position: -25px 0;
      }
    }
    &.enterprise {
      i {
        background-position: 0 -25px;
      }
      &.active i {
        background-position: -25px -25px;
      }
    }
    &.building {
      i {
        background-position: 0 -50px;
      }
      &.active i {
        background-position: -25px -50px;
      }
    }
    &.land {
      i {
        background-position: 0 -75px;
      }
      &.active i {
        background-position: -25px -75px;
      }
    }
    &.investment {
      i {
        background-position: 0 -100px;
      }
      &.active i {
        background-position: -25px -100px;
      }
    }
    &.active em {
      color: #508ef9;
    }
  }
}
</style>
