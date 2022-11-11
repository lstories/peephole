<template>
  <div class="myb">
    <div class="mineTop">我的</div>
    <div class="mineHead">
      <div class="shot">
        <img
          src="https://img1.baidu.com/it/u=3178057158,4110048229&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=538"
          alt="头像"
        />
      </div>
    </div>
    <div class="myList">
      <p>我的订单</p>
      <div class="line"></div>
      <div class="list">
        <img
          src="https://obj.pipi.cn/festatic/asgard/resources/images/dpmmweb/mycenter/movie.png"
          alt="电影图标"
        />
        <span>电影</span>
      </div>
    </div>
    <MybtmBar />
  </div>
</template>

<script>
import MybtmBar from "../components/MybtmBar.vue";
export default {
  name: "MyMine",
  components: {
    MybtmBar,
  },
};
</script>

<style lang="less" scoped>
.myb {
  position: absolute;
  background: #f4f4f4;
  width: 100%;
  height: 100%;
  .mineTop {
    background: red;
    padding: 14px 0;
    text-align: center;
    color: white;
  }
  .mineHead {
    height: 150px;
    width: 100%;
    background-image: url(https://img0.baidu.com/it/u=527484704,1839330561&fm=253&fmt=auto&app=138&f=JPEG?w=224&h=398);
    display: flex;
    justify-content: center;
    align-items: center;
    .shot {
      width: 66px;
      height: 66px;
      border-radius: 50%;
      border: 2px solid white;
      img {
        width: 66px;
        height: 66px;
        border-radius: 50%;
      }
    }
  }
  .myList {
    padding: 0 10px;
    background: white;
    margin-top: 10px;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    height: 150px;
    position: relative;
    p {
      position: relative;
      top: 13px;
      font-size: 15px;
      height: 21px;
      display: block;
      z-index: 1;
    }
    .line {
      height: 1px;
      width: 160px;
      position: absolute;
      left: 50%;
      margin-left: -80px;
      top: 23px;
      background: #000;
    }
    .list {
      margin-top: 33px;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 42px;
        height: 42px;
      }
      span {
        margin-top: 10px;
      }
    }
  }
}
</style>