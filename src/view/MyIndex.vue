<template>
  <div class="main">
    <!-- 头部logo -->
    <div class="catTop">
      <span></span>
      <h2>猫眼电影</h2>
      <span class="iconfont icon-liebiao2"></span>
    </div>
    <!-- 猫眼导航 -->
    <div class="catNav">
      <div class="catLeft">
        <img src="../assets/img/猫眼logo.png" alt="猫眼logo" />
      </div>
      <div class="catRight">
        <h3>发现最新最热的电影</h3>
        <h2>打开app<span class="iconfont icon-xiangyou1"></span></h2>
      </div>
    </div>
    <!-- 顶部选项卡 -->
    <div class="current">
      <!-- 城市区域 -->
      <router-link tag="div" to="/position" class="city">
        <span>{{ cityname }}</span>
        <span class="iconfont icon-xiajiantou"></span>
      </router-link>
      <!-- 选项卡区 -->
      <div class="cinema">
        <div
          @click="goChange1"
          :class="{ 'router-link-active': moveIndex == 0 }"
        >
          热映
        </div>
        <div
          @click="goChange2"
          :class="{ 'router-link-active': moveIndex == 1 }"
        >
          影院
        </div>
        <div
          @click="goChange3"
          :class="{ 'router-link-active': moveIndex == 2 }"
        >
          特映
        </div>
        <div
          @click="goChange4"
          :class="{ 'router-link-active': moveIndex == 3.3 }"
        >
          经典电影
        </div>
        <span
          :style="{
            left: 54 * moveIndex + 4 + 'px',
          }"
        ></span>
      </div>
      <!-- 搜索 -->
      <span class="search iconfont icon-fangdajing" @click="gosearch"></span>
    </div>
    <!-- 显示路由层 -->
    <div>
      <router-view :cityip="cityip"></router-view>
    </div>
  </div>
</template>

<script>
import "../assets/font/iconfont.js";
export default {
  data() {
    return {
      moveIndex: 0,
    };
  },
  props: ["cityip", "cityname"],
  name: "MyIndex",
  methods: {
    goChange1() {
      this.moveIndex = 0;
      this.$router.push("/index/one");
    },
    goChange2() {
      this.moveIndex = 1;
      this.$router.push("/index/two");
    },
    goChange3() {
      this.moveIndex = 2;
      this.$router.push("/index/three");
    },
    goChange4() {
      this.moveIndex = 3.3;
      this.$router.push("/index/four");
    },
    gosearch() {
      this.$router.push("/search");
    }
  },
};
</script>

<style lang="less" scoped>
.main {
  // 头部logo
  .catTop {
    box-sizing: border-box;
    height: 50px;
    width: 100%;
    padding: 0 12px;
    display: flex;
    background-color: red;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    span {
      font-size: 18px;
    }
  }

  .catNav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 0 10px;
    border-bottom: 1px solid #f1f1f1;
    .catLeft {
      display: flex;
      height: 30px;
      width: 94px;
      img {
        width: 94px;
        height: 30px;
      }
    }
    .catRight {
      display: flex;
      align-items: center;
      h3 {
        font-size: 14px;
        font-weight: bold;
        color: #666666;
        padding-right: 10px;
        border-right: 1px solid #f4f4f4;
      }
      h2 {
        font-size: 16px;
        font-weight: bold;
        color: #b37ea6;
        //span{

        //}
      }
    }
  }

  .current {
    display: flex;
    height: 44px;
    border-bottom: 1px solid #f4f4f4;
    justify-content: space-between;
    padding: 0 14px;
    align-items: center;
    .city {
      margin-right: 12px;
      .iconfont {
        font-size: 12px;
        color: #b0b0b0;
        display: inline-block;
        transform: scale(0.7);
      }
    }
    .cinema {
      display: flex;
      flex: 1;
      justify-content: space-between;
      font-weight: bold;
      position: relative;
      span {
        position: absolute;
        background: red;
        width: 20px;
        height: 4px;
        bottom: -10px;
        left: 5px;
        transition: 0.5s;
      }
    }
    .search {
      color: red;
      font-size: 22px;
      font-weight: bold;
      margin-left: 40px;
    }
  }
}
</style>