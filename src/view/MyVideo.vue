<template>
  <div>
    <div class="viTop">猫眼电影</div>
    <div>
      <div
        class="smvideo"
        v-for="item in videoList"
        :key="item.id"
        :style="{ 'background-image': 'url(' + item.images[0].url + ')' }"
      >
        <p>{{ item.title }}</p>
        <div class="user">
          <img :src="item.user.avatarurl" alt="小视频图片" />
          <div class="username">{{ item.user.nickName }}</div>
        </div>
      </div>
      <MybtmBar />
    </div>
  </div>
</template>

<script>
import { getVideo } from "../api/video.js";
import MybtmBar from "../components/MybtmBar.vue";
export default {
  name: "MyVideo",
  data() {
    return {
      videoList: null,
    };
  },
  components: {
    MybtmBar,
  },
  methods: {
    getVideoListFun() {
      getVideo().then((data) => {
        this.videoList = data.data.feeds;
        console.log("小视频Feed列表--> ", this.videoList);
      });
    },
  },
  created() {
    this.getVideoListFun();
  },
};
</script>

<style lang="less" scoped>
.viTop {
  background: red;
  color: #fff;
  height: 44px;
  line-height: 44px;
  text-align: center;
  font-size: 17px;
}
.smvideo {
  display: inline-block;
  width: 49.5%;
  height: 300px;
  margin: 0.5% 0.1% 0;
  background-position: 50%;
  background-size: cover;
  position: relative;
  p {
    width: 170px;
    margin: 0 8px;
    position: absolute;
    color: #fff;
    font-size: 16px;
    bottom: 40px;
  }
  .user {
    margin: 0 8px;
    display: flex;
    align-items: center;
    font-size: 12px;
    position: absolute;
    bottom: 10px;
    img {
      opacity: 0.9;
      border: 1 solid rgba(28, 28, 20, 0.5);
      width: 22px;
      height: 22px;
      display: block;
      border-radius: 50%;
    }
    .username {
      margin: 0 6px;
      flex: 1;
      display: inline-block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>