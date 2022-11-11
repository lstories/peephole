<template>
  <div>
    <div class="main">
      <div class="classic">
        <div class="movie" v-for="item in classicList" :key="item.movieId">
          <div class="img">
            <img :src="item.poster" alt="电影图片" />
            <div class="item">
              <h2>{{ item.movieInfo.title }}</h2>
              <p>{{ item.movieInfo.englishTitle }}</p>
              <p>{{ item.movieInfo.actors }}</p>
              <p>{{ item.movieInfo.showInfo }}</p>
            </div>
          </div>
          <div class="point">
            <span>{{ item.score }}</span>
            <div v-if="item.score">分</div>
          </div>
        </div>
      </div>
    </div>
    <MybtmBar />
  </div>
</template>

<script>
import MybtmBar from "@/components/MybtmBar.vue";
import { getClassicList } from "../api/classic.js";
export default {
  data() {
    return {
      classicList: null,
    };
  },
  methods: {
    getClassicListFun() {
      getClassicList().then((data) => {
        this.classicList = data;
        console.log("经典电影--> ", this.classicList);
      });
    },
  },
  components: {
    MybtmBar,
  },
  created() {
    this.getClassicListFun();
  },
};
</script>

<style lang="less">
.main {
  padding-bottom: 20px;
  .classic {
    padding-top: 16px;
    .movie {
      display: flex;
      justify-content: space-between;
      margin-left: 20px;
      margin-bottom: 20px;
      .img {
        display: flex;
        align-items: center;
        img {
          width: 66px;
          height: 94px;
        }
        .item {
            margin-left: 6px;
            font-size: 14px;
            h2 {
              font-weight: bold;
              color: black;
            }
            p {
              color: #666666;
              margin-top: 4px;
            }
          }
      }

      .point {
        display: flex;
        margin-right: 6px;
        span {
          color: orange;
          font-size: 15px;
        }
        div{
          font-size: 14px;
          color: #99999999;
        }
      }
    }
  }
}
</style>