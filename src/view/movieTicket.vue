<template>
  <div class="tickedBox">
    <div class="tickedTop">
      <!-- 标题 -->
      <div class="title"><span @click="backvideo">&lt;</span>万里归途</div>
    </div>
    <!-- 内容 -->
    <div class="tickedCon" v-if="movieinfo">
      <div class="img">
        <img :src="movieinfo.img" alt="电影图片" />
      </div>
      <div class="container">
        <h2 class="h2">{{ movieinfo.nm }}</h2>
        <p class="en">{{ movieinfo.enm }}</p>
        <p class="p2">{{ movieinfo.snum }}想看</p>
        <p class="p3">{{ movieinfo.cat }}</p>
        <p class="p4">{{ movieinfo.pubDes }}</p>
        <p class="p5">{{ movieinfo.rt }}</p>
      </div>
      <div class="icon">&gt;</div>
    </div>
    <div class="date">
      <span>xxx年xx月xx日</span>
    </div>
    <div class="select">
      <MySelect></MySelect>
    </div>
    <div class="list" v-if="list">
      <ul class="listbox">
        <li v-for="item in list" :key="item.cinemaId">
          <p class="listTitle">
            {{ item.title }}
            <span class="price">{{ item.price.n }}</span>
            <span class="price">{{item.price.q}}</span>
          </p>
          <p class="pp">{{ item.location }}</p>
          <div class="lists">
            <span v-for="(items, index) in item.services" :key="index">
              {{items.text}}
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getTicker, getMovice } from "../api/movie.js";
import MySelect from "../components/MySelect.vue";
export default {
  data() {
    return {
      movieId: null,
      movieinfo: null,
      list: null,
    };
  },
  methods: {
    backvideo() {
      this.$router.go(-1);
    },
    getMoviceFun() {
      getMovice({ movieId: this.movieId }).then((data) => {
        console.log("详细信息==>", data);
        this.movieinfo = data.movie;
      });
    },
    getTickerFun() {
      getTicker({ cityId: 20 }).then((data) => {
        console.log("列表信息==>", data);
        this.list = data;
      });
    },
  },
  created() {
    this.getMoviceFun();
    this.getTickerFun();
  },
  components: {
    MySelect,
  },
};
</script>

<style lang="less" scoped>
.tickedBox {
  .tickedTop {
    height: 36px;
    background-color: red;
    line-height: 36px;
    text-align: center;
    color: white;
    font-size: 17px;
    span {
      position: relative;
      top: 0;
      left: -35%;
      font-size: 18px;
      font-weight: bold;
      font-family: "仿宋";
    }
  }
  .tickedCon {
    background-color: #576263;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    .img {
      width: 140px;
      overflow: hidden;
      margin-bottom: 5px;
      img {
        display: block;
        width: 100px;
        height: 140px;
      }
    }
    .container {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .h2 {
        font-size: 18px;
        color: white;
        margin-top: -5px;
        font-weight: bold;
      }
      .en {
        color: rgb(180, 169, 169);
        font-size: 14px;
        margin-top: 3px;
      }
      .p2 {
        color: #fc0;
        font-size: 16px;
        padding: 5px 0;
        font-weight: bold;
      }
      .p3 {
        color: rgb(180, 169, 169);
        font-size: 14px;
      }
      .p4 {
        margin-top: 3px;
        color: rgb(180, 169, 169);
        font-size: 14px;
      }
      .p5 {
        margin-top: 3px;
        color: rgb(180, 169, 169);
        font-size: 14px;
      }
    }
    .icon {
      font-size: 18px;
      font-family: "宋体";
      font-weight: bold;
      color: rgb(180, 169, 169);
    }
  }
  .date {
    text-align: center;
    padding: 8px 0;
    color: red;
    span {
      border-bottom: 2px solid red;
    }
  }
  .select {
    position: absolute;
    width: 100%;
    top: 80px;
  }
  .list {
    margin-top: 50px;
    .listbox {
      padding: 5px;
      li {
        padding: 10px 0;
        border-bottom: 1px solid rgb(197, 188, 188);
        .listTitle {
          font-size: 16px;
          color: black;
          display: flex;
          .price {
            color: red;
            font-size: 14px;
          }
        }
        .pp {
          color: red;
          font-size: 10px;
        }
        .lists {
          span {
            color: skyblue;
            font-size: 10px;
            border-radius: 6px;
            border: 1px solid skyblue;
          }
        }
      }
    }
  }
}
</style>