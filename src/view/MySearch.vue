<template>
  <div class="mysearch">
    <div class="SearchTop">
      <div class="title">
        <span class="black" @click="goBack">&lt;</span>
        猫眼电影
      </div>
    </div>
    <div class="searchBox">
      <div class="searchCon">
        <span class="iconfont icon-fangdajing"></span>
        <input
          v-model.lazy="vuell"
          type="text"
          class="input"
          placeholder="搜电影, 搜影院"
        />
        <span class="text" @click="goBack">取消</span>
      </div>
    </div>
    <div class="content">
      <div class="list">
        <ul>
          <li v-for="item in listdata" :key="item.id">
            <div class="left">
              <div class="image">
                <img :src="item.poster" alt="图片" />
              </div>
            </div>
            <div class="right">
              <div class="title">
                <span class="span1">{{item.name}}</span>
                <span class="span2">{{item.score==''?'4':item.score}}分</span>
              </div>
              <p class="p1">{{item.ename}}</p>
              <p class="p2">{{item.catogary}}</p>
              <p class="time">{{item.release}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { searchMovie } from '../api/search.js'
export default {
  props: ['cityip'],
  name: "MySearch",
  data() {
    return {
      vuell: null,
      listdata:null,
    }
  },
  methods: {
    searchMovieFun() {
      searchMovie({
        keyword:this.vuell,
        ci:this.cityip,
        limit:10
      }).then((data) => {
        this.listdata = data       
        console.log('dalistdatata==>', this.listdata)
      });
    },
    goBack(){
      this.$router.go(-1);
    },
  },
  created(){
    this.searchMovieFun();
  },
  watch:{
    vuell(){
      // console.log("执行了")
      this.searchMovieFun();
    }
  }
};
</script>

<style lang="less" scoped>
.mysearch {
  padding: 0 0px;
  .SearchTop {
    background: red;
    height: 44px;
    line-height: 44px;
    text-align: center;
    font-size: 17px;
    .title {
      color: white;
      text-align: center;
      .black {
        position: absolute;
        top: 0;
        left: 5%;
        margin-top: 2px;
        font-weight: bold;
        font: "宋体";
      }
    }
  }
  .searchBox {
    display: flex;
    align-items: center;
    padding: 0.16rem 0 0.16rem 0.2rem;
    background-color: #f5f5f5;
    border-bottom: 0.02rem solid #e5e5e5;
    position: relative;
    z-index: 1;
    .searchCon {
      padding: 0 0.2rem;
      border: 0.02rem solid #e6e6e6;
      border-radius: 0.1rem;
      background-color: #fff;
      flex-grow: 1;
      .iconfont {
        width: 0.3rem;
        height: 0.2rem;
        margin-right: 0.12rem;
        color: #b0b0b0;
        position: relative;
        font-size: 20px;
        transform: scale(0.7);
      }
      input {
        flex: 1;
        border: none;
        font-size: 16px;
        color: #333;
        line-height: 16px;
        padding: 4px 2px;
        width: 80%;
        outline: none;
        resize: none;
      }
      .text {
        font-size: 14px;
        color: red;
      }
    }
  }
  .content {
    .list {
      ul {
        li {
          display: flex;
          align-items: center;
          border-bottom: 1px solid #e6e6e6;
          padding: 12px;
          .left {
            .image {
              width: 60px;
              margin-right: 10px;
              img {
                width: 100%;
                display: block;
              }
            }
          }
          .right {
            flex: 1;
            .title {
              display: flex;
              justify-content: space-between;
              .span1 {
                color: #222262;
                font-size: 14px;
              }
              .span2 {
                color: #ffaa84;
                font-size: 12px;
              }
            }
            p {
              font-size: 12px;
              color: #666666;
              margin-top: 2px;
            }
          }
        }
      }
    }
  }
}
</style>