<template>
  <div>
    <div class="showMoive">
      <div class="niceTalk">近期最受期待</div>
      <!-- 好评电影层 -->
      <div class="more">
        <div class="niceMovie" v-for="item in expectList" :key="item.id">
          <div class="img">
            <img :src="item.img" alt="电影图片" />
            <span></span>
            <!-- 阴影层 -->
            <p class="like">
              <span></span>
            </p>
            <div>
              <span>{{ item.wish }}</span>
            </div>
          </div>
          <h4>{{ item.nm }}</h4>
        </div>
      </div>
    </div>
    <!-- 过渡层 -->
    <div class="mask"></div>
      <div class="showMovie2" v-for="item in readyList" :key="item.id">
        <p class="date">{{ item.comingTitle }}</p>
        <div class="mob">
          <div class="left">
            <img :src="item.img" alt="电影图片" />
          </div>
          <div class="right">
            <div class="text">
              <!-- 电影名称 -->
              <h3>{{ item.nm }}</h3>
              <p class="point">
                <span>{{ item.wish }}</span>
                人想看
              </p>
              <p>
                主演:<span>{{ item.star }}</span>
              </p>
              <p>{{item.showInfo}}</p>
            </div>
            <div class="but">预售</div>
          </div>
        </div>
      </div>

    <MybtmBar />
  </div>
</template>

<script>
import MybtmBar from "../components/MybtmBar.vue";
import { getReadyMovieList, getReadyMovie } from "../api/ready.js";
export default {
  data() {
    return {
      expectList: null,
      readyList: null,
    };
  },
  methods: {
    getReadyMovieFun() {
      getReadyMovie().then((data) => {
        this.expectList = data.coming;
        console.log('近期最受期待列表--> ', this.expectList)
      });
    },
    getReadyMovieListFun() {
      getReadyMovieList().then((data) => {
        this.readyList = data.coming;
        console.log('待映列表--> ', this.readyList)
      });
    },
  },
  created() {
    this.getReadyMovieFun(), this.getReadyMovieListFun();
  },
  components: {
    MybtmBar,
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
    p {
      color: #999;
      font-size: 12px;
      margin-top: 6px;
    }
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
      .like {
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.4);
        border-radius: 0, 0, 10px, 0;
        width: 28px;
        height: 28px;
        margin: 0;
        span {
          background: url(../assets/img/love.png) no-repeat;
          background-size: 100%;
          width: 10px;
          height: 10px;
          display: inline-block;
          position: absolute;
          top: 10px;
          left: 8px;
        }
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
  .date {
    color: black;
    margin-top: 16px;
    font-size: 14px;
    padding-left: 14px;
  }
  .mob {
    height: 114px;
    padding-left: 14px;
    display: flex;
    align-items: center;
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
      p{
        font-style: 12px;
      }
      .but {
        color: #fff;
        background: #3c9fe6;
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
        color: #777777;
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
          span{
            color: #fab109;
          }
        }
      }
    }
  }
}
</style>