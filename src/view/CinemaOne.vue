<template>
  <div class="main">
    <div class="showMoive" v-if="hotMovieList">
      <div class="niceTalk">{{ hotMovieList.title }}</div>
      <!-- 好评电影层 -->
      <div class="more">
        <router-link tag="div" :to="'/details?movieId='+item.movieId"
          class="niceMovie"
          v-for="item in hotMovieList.movieList"
          :key="item.movieId"
        >
          <div class="img">
            <img :src="item.poster + '?imageView2/1/w/300/h/414'" alt="电影图片" />
            <span v-if="item.score">观众评分 &nbsp;{{ item.score }}</span>
            <!-- 阴影层 -->
            <div></div>
          </div>
          <!-- 简介 -->
          <h4>{{ item.name }}</h4>
        </router-link>
      </div>
    </div>
    <!-- 过渡层 -->
    <div class="mask"></div>
    <div class="showMovie2" v-if="moreNiceMovie">
      <div class="mob" v-for="item in moreNiceMovie.coming" :key="item.id">
        <div class="left">
          <img :src="item.img" alt="电影图片" />
        </div>
        <div class="right">
          <div class="text">
            <!-- 电影名称 -->
            <h3>{{ item.nm }}</h3>
            <p class="point">
              观众评分: <span>{{ item.sc }}</span>
            </p>
            <p>
              主演:<span>{{ item.star }}</span>
            </p>
            <p></p>
          </div>
          <div class="but">购票</div>
        </div>
      </div>
    </div>
    <MybtmBar />
  </div>
</template>

<script>
import { getNiceMovie, getMoreNiceMovie } from "../api/home.js";
import MybtmBar from "@/components/MybtmBar.vue";
export default {
  data() {
    return {
      hotMovieList: null,
      moreNiceMovie: null,
    };
  },
  components: {
    MybtmBar,
  },
  methods: {
    getNiceMovieFun() {
      getNiceMovie().then((data) => {
        this.hotMovieList = data;
        // console.log("获取最受好评电影对象---> ", this.hotMovieList);
      });
    },
    getMoreNiceMovieFun() {
      getMoreNiceMovie().then((data) => {
        this.moreNiceMovie = data;
        // console.log("获取更多热映列表对象---> ", this.moreNiceMovie);
      });
    },
  },
  created() {
    this.getNiceMovieFun();
    this.getMoreNiceMovieFun();
  },
};
</script>

<style lang="less">
.showMoive {
  padding: 0 14px;
  background: white;
  .niceTalk {
    height: 44px;
    line-height: 44px;
    font-size: 14px;
  }
  .more {
    display: flex;
    overflow: hidden;
    overflow: scroll;
  }
  // 去掉滑动条
  .more::-webkit-scrollbar {
    display: none;
  }
  .niceMovie {
    margin-right: 10px;
    padding-bottom: 20px;
    .img {
      width: 84px;
      height: 114px;
      position: relative;
      div {
        display: inline-block;
        width: 100%;
        height: 35px;
        position: absolute;
        bottom: 0;
        background-image: linear-gradient();
      }
      img {
        width: 84px;
        height: 114px;
      }
      span {
        position: absolute;
        font-size: 12px;
        color: #fafa00;
        font-weight: bold;
        z-index: 1;
        left: 3px;
        bottom: 2px;
      }
    }
    h4 {
      font-style: 13px;
      font-weight: bold;
      margin-top: 6px;
      height: 17px;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 84px;
      white-space: nowrap;
    }
  }
}

.mask {
  width: 100%;
  height: 10px;
  border-color: #fafa00;
}
.showMovie2 {
  padding-bottom: 10px;
  .mob {
    height: 114px;
    padding-left: 14px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    .left {
      width: 64px;
      height: 90px;
      margin-right: 10px;
      img {
        width: 65px;
        height: 80px;
      }
    }
    .right {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex: 1;
      border-bottom: 1px solid #f5f5f5;
      height: 100%;
      .but {
        color: #fff;
        background: red;
        height: 28px;
        width: 54px;
        text-align: center;
        line-height: 28px;
        border-radius: 20px;
        font-size: 14px;
        margin: 14px;
      }
      .text {
        font-size: 14px;
        color: orange;
        p {
          margin-top: 2px;
        }
        h3 {
          font-size: 17px;
          font-weight: bold;
          color: black;
        }
        .point {
          font-weight: bold;
          font-size: 16px;
          color: #fafa00;
        }
      }
    }
  }
}
</style>