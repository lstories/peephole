<template>
  <div class="detailsBox" v-if="datalist">
    <div class="countainer">
      <div
        class="topCon"
        :style="{ 'background-color': movielist.backgroundColor }"
      >
        <div class="black">
          <span @click="backvideo">猫眼电影</span>&nbsp;>&nbsp;{{
            movielist.nm
          }}
        </div>
        <div class="top">
          <div class="left">
            <img :src="movielist.img" alt="电影图片" />
          </div>
          <div class="right">
            <h3 class="h3">{{ movielist.nm }}</h3>
            <p>{{ movielist.cat }}</p>
            <p>{{ movielist.star }}</p>
            <p class="p3">{{ movielist.pubDesc }}</p>
            <div class="look">
              <div class="love">
                <img src="../assets/img/love.png" alt="爱心图标" />想看
              </div>
              <div class="star">
                <img src="../assets/img/star.png" alt="星星图标" />看过
              </div>
            </div>
          </div>
        </div>
        <!-- 评分 -->
        <div class="score">
          <div class="scoreTop">
            <div class="scorelogo">
              <img src="../assets/img/pgradelog.png" alt="猫眼标志" />
              <span class="logotext">{{ movielist.scoreLabel }}</span>
            </div>
            <div class="num">{{ movielist.wish }}想看</div>
            <div class="numed">
              {{ movielist.watched }}看过<span>&gt;</span>
            </div>
          </div>

          <div class="scoreBot">
            <div class="nums">
              <p class="scors">{{ movielist.sc }}</p>
              <p class="count">{{ movielist.watched }}人评</p>
            </div>
            <div class="xingxingbox">
              <div class="xingxing">
                <div class="star">
                  <img src="../assets/img/white-star.png" alt="" />
                  <img src="../assets/img/white-star.png" alt="" />
                  <img src="../assets/img/white-star.png" alt="" />
                  <img src="../assets/img/white-star.png" alt="" />
                  <img src="../assets/img/white-star.png" alt="" />
                </div>
                <div class="progress-bar"></div>
              </div>

              <div class="xingxing">
                <div class="star">
                  <img src="../assets/img/grey-star.png" alt="" />
                  <img src="../assets/img/white-star.png" alt="" />
                  <img src="../assets/img/white-star.png" alt="" />
                  <img src="../assets/img/white-star.png" alt="" />
                  <img src="../assets/img/white-star.png" alt="" />
                </div>
                <div class="progress-bar"></div>
              </div>

              <div class="xingxing">
                <div class="star">
                  <img src="../assets/img/grey-star.png" alt="" />
                  <img src="../assets/img/grey-star.png" alt="" />
                  <img src="../assets/img/white-star.png" alt="" />
                  <img src="../assets/img/white-star.png" alt="" />
                  <img src="../assets/img/white-star.png" alt="" />
                </div>
                <div class="progress-bar"></div>
              </div>

              <div class="xingxing">
                <div class="star">
                  <img src="../assets/img/grey-star.png" alt="" />
                  <img src="../assets/img/grey-star.png" alt="" />
                  <img src="../assets/img/grey-star.png" alt="" />
                  <img src="../assets/img/white-star.png" alt="" />
                  <img src="../assets/img/white-star.png" alt="" />
                </div>
                <div class="progress-bar"></div>
              </div>

              <div class="xingxing">
                <div class="star">
                  <img src="../assets/img/grey-star.png" alt="" />
                  <img src="../assets/img/grey-star.png" alt="" />
                  <img src="../assets/img/grey-star.png" alt="" />
                  <img src="../assets/img/grey-star.png" alt="" />
                  <img src="../assets/img/white-star.png" alt="" />
                </div>
                <div class="progress-bar"></div>
              </div>
            </div>
            <div class="date">
              <div class="left">
                <h4 class="h4">Top</h4>
                <span>{{ movielist.vnum }}</span>
              </div>
              <div class="right">
                <div class="year">{{ movielist.rt }}</div>
                <div class="list">中国大陆票房</div>
              </div>
            </div>
          </div>
        </div>
        <!-- 简介 -->
        <div class="introduction">
          <div>
            <h4 class="h4">简介</h4>
          </div>

          <p class="p">
            {{ movielist.dra }}
          </p>
          <h5 class="h5">演职人员</h5>
          <div class="listbox">
            <div class="list">
              <ul>
                <li v-for="item in actorlist" :key="item.id">
                  <div class="img">
                    <img :src="item.avatar" alt="电影图片" />
                  </div>
                  <div class="actor">{{ item.cnm }}</div>
                  <div class="actor1">{{ item.desc }}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 视频推荐 -->
        <div class="introduction2">
          <h5 class="h5">视频推荐</h5>
          <div class="listbox">
            <div class="list">
              <ul>
                <li v-for="item in video" :key="item.id">
                  <div class="img">
                    <img :src="item.img" alt="电影图片" />
                    <!-- <div class="span">
                      <img src="../assets/img/┐╬│╠╩╙╞╡.png" alt="" />
                    </div> -->
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 剧照 -->
        <div class="introduction3">
          <h5 class="h5">剧照</h5>
          <div class="listbox">
            <div class="list">
              <ul>
                <li v-for="(item, index) in photoslist" :key="index">
                  <div class="img">
                    <img :src="item" alt="电影图片" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- 票房 -->
      <div class="box-office">
        <h3 class="officeTitle">票房</h3>
        <ul class="officeCon">
          <li>
            <p class="number">{{ mbox.lastDayRank }}</p>
            <p class="info">昨日排名</p>
          </li>
          <li>
            <p class="number">{{ mbox.firstWeekBox }}</p>
            <p class="info">首周票房</p>
          </li>
          <li>
            <p class="number">{{ mbox.sumBox }}</p>
            <p class="info">累计票房</p>
          </li>
        </ul>
      </div>
      <!-- 相关快讯 -->
      <div class="correlation">
        <div class="correlationTitle">相关快讯</div>
        <ul class="correlation-item">
          <li v-for="item in newlist" :key="item.id">
            <div class="item-top">
              <p class="con">{{ item.title }}</p>
              <div class="img">
                <img :src="item.previewImages[0].url" alt="图片" />
              </div>
            </div>
            <div class="item-bot">
              <div class="left">{{ item.source }}</div>
              <div class="right">
                <span class="look">{{ item.viewCount }}</span>
                <span class="count">{{ item.commentCount }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- 底部信息 -->
      <div class="bot-info">
        <div class="bottext">
          影视行业信息"免责声明"违法和不良信息举报电话: 40000000
        </div>
        <div class="img">
          <img src="../assets/img/bottom-logo.png" alt="" />
        </div>
      </div>
    </div>

    <div class="buy-ticket" v-if="datalist">
      <div class="ticket" @click="ticket(movieId)">特惠购票</div>
    </div>
  </div>
</template>

<script>
import { getMovieList } from "../api/details.js";
export default {
  data() {
    return {
      movieId: null, // 电影id
      flag: null, // 控制加载效果
      datalist: null, // 电影数据
      actorlist: null, // 演职人员
      video: null, // 视频推荐
      mbox: null, // 票房
      newlist: null, // 相关快讯
      movielist: null, // 电影基本信息
      photoslist: null, // 剧照
    };
  },
  methods: {
    backvideo() {
      this.$router.go(-1);
    },
    getMovieListFun() {
      getMovieList({ movieId: this.movieId }).then((data) => {
        this.datalist = data;
        console.log("详情---> ", this.datalist);
        // console.log("详情---> ", this.data.photos);
        // 电影基本信息
        this.movielist = data.movie;
        console.log("电影基本信息==>", this.movielist);
        // 演职人员
        this.actorlist = data.celebrities;
        // console.log("演职人员==>", this.actorlist);
        // 视频推荐
        this.video = data.relatedMovies;
        // console.log("视频推荐==>", this.video);
        // 票房
        this.mbox = data.mbox.mbox;
        // 剧照
        this.photoslist = data.movie.photos;
        // 相关快讯
        this.newlist = data.newsList.newsList;
        // console.log("相关快讯==>", this.newlist);
      });
    },
    ticket(id){
      this.$router.push({name:'movieticket',query:this.movieId})
    }
  },
  created() {
    this.movieId = this.$route.query.movieId;
    if (this.$route.query.movieId) {
      this.getMovieListFun();
    }
  },
};
</script>

<style lang="less" scoped>
.detailsBox {
  display: block;
  .countainer {
    background-color: #f4f4f4;
    padding-bottom: 10px;
    .topCon {
      padding: 0 12px;
      padding-bottom: 15px;
      background-color: #66593e;
      .black {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.4);
        padding: 15px 0;
      }
      .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left {
          width: 80px;
          margin-right: 10px;
          img {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
        .right {
          flex: 1;
          .h3 {
            font-size: 22px;
            color: white;
            padding-bottom: 10px;
          }
          p {
            font-size: 12px;
            color: #758ba1;
            margin-top: 2px;
          }
          .p3 {
            margin-bottom: 2px;
          }
          .look {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .love {
              width: 45%;
              padding: 4px 0;
              background-color: #6a7783;
              border-radius: 6px;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 12px;
              color: white;
              img {
                width: 14px;
                height: 14px;
                margin-right: 5px;
              }
            }
            .star {
              width: 45%;
              padding: 4px 0;
              background-color: #6a7783;
              border-radius: 6px;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 12px;
              color: white;
              img {
                width: 12px;
                height: 12px;
                margin-right: 5px;
              }
            }
          }
        }
      }
      // 评分
      .score {
        background-color: #544933;
        padding: 8px;
        border-radius: 8px;
        margin-top: 12px;
        .scoreTop {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .scorelogo {
            align-items: center;
            display: flex;
            img {
              width: 32px;
              height: 32px;
              transform: scale(0.7);
            }
            .logotext {
              font-size: 12px;
              color: white;
            }
          }

          .num {
            font-size: 12px;
            color: #757066;
          }
          .numed {
            font-size: 12px;
            color: #757066;
          }
        }
        .scoreBot {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .nums {
            .scors {
              font-size: 36px;
              text-align: right;
              color: orange;
            }
            .count {
              font-size: 12px;
              color: #675e4a;
            }
          }
          .xingxingbox {
            transform: scale(0.8);
            .xingxing {
              display: flex;
              align-items: center;
              .star {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 30px;
                transform: scale(0.4);
                img {
                  display: block;
                  margin-right: 4px;
                }
              }
              .progress-bar {
                width: 70px;
                height: 4px;
                background-color: #233340;
                margin-left: 20px;
                overflow: hidden;
                position: relative;
                &::after {
                  content: "";
                  display: block;
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  top: 0;
                  left: 0;
                  background-color: #595440;
                }
              }
            }
          }
          .date {
            display: flex;
            align-items: center;
            border: 1px solid #6b634f;
            padding: 2px;
            border-radius: 6px;
            .left {
              background-color: #614839;
              border-radius: 2px;
              margin-right: 10px;
              .h4 {
                font-size: 14px;
                color: yellow;
              }
              span {
                display: block;
                text-align: center;
                color: #e1c969;
                font-size: 12px;
              }
            }
            .right {
              .year,
              .list {
                color: #9a8d5e;
                font-size: 14px;
              }
            }
          }
        }
      }

      // 简介
      .introduction {
        display: block;
        // div {
        // display: flex;
        .h4 {
          font-size: 14px;
          color: #dafff3;
          margin-top: 15px;
        }
        // div {
        //   margin-top: 15px;
        //   margin-left: 70%;

        //   .open {
        //     background: #66593e;
        //     border: none;
        //     font-size: 14px;
        //     display: flex;
        //     color: #fff;
        //     width: 50px;
        //     line-height: 14px;
        //     img {
        //       padding: 2px;
        //       width: 8px;
        //       height: 8px;
        //     }
        //   }
        // }
        // }

        .p {
          color: white;
          font-size: 12px;
          padding: 15px;
          overflow: hidden;
          text-overflow: ellipsis;
          line-clamp: 3;
          box-orient: vertical;
          word-wrap: break-word;
          word-break: break-all;
        }
        .h5 {
          font-size: 12px;
          color: white;
          padding-bottom: 10px;
        }
        .listbox {
          .list {
            overflow: hidden;
            ul {
              display: flex;
              overflow: auto;
              li {
                margin-right: 12px;
                .img {
                  width: 80px;
                  height: 100px;
                  overflow: hidden;
                  img {
                    display: block;
                    width: 100%;
                  }
                }
                .actor {
                  font-size: 14px;
                  color: white;
                  text-align: center;
                }
                .actor1 {
                  font-size: 14px;
                  color: rgb(175, 170, 170);
                  text-align: center;
                }
              }
            }
          }
        }
      }

      // 剧照
      .introduction3 {
        margin-top: 5px;
        .h5 {
          font-size: 12px;
          color: white;
          padding-bottom: 10px;
        }
        .listbox {
          .list {
            overflow: hidden;
            ul {
              display: flex;
              overflow: auto;
              li {
                margin-right: 12px;
                .img {
                  width: 145px;
                  height: 100px;
                  overflow: hidden;
                  img {
                    display: block;
                    width: 100%;
                  }
                  .span {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 30px;
                    height: 30px;
                    background-color: rgba(255, 255, 255, 0.6);
                    border-radius: 50%;
                    transform: translate(-50%, -50%);
                    overflow: hidden;
                    img {
                      display: block;
                      width: 36px;
                      height: 32px;
                      margin-top: -4px;
                      margin-left: -2px;
                    }
                  }
                }
                .actor {
                  font-size: 14px;
                  color: white;
                  text-align: center;
                }
                .actor1 {
                  font-size: 14px;
                  color: rgb(175, 170, 170);
                  text-align: center;
                }
              }
            }
          }
        }
      }
      // 视频推荐
      .introduction2 {
        margin-top: 10px;
        .h4 {
          font-size: 14px;
          color: #dafff3;
          margin-top: 15px;
        }
        .p {
          color: white;
          font-size: 12px;
          padding: 15px;
        }
        .h5 {
          font-size: 12px;
          color: white;
          padding-bottom: 10px;
        }
        .listbox {
          .list {
            overflow: hidden;
            ul {
              display: flex;
              overflow: auto;
              li {
                margin-right: 12px;
                .img {
                  width: 145px;
                  height: 100px;
                  overflow: hidden;
                  img {
                    display: block;
                    width: 100%;
                    width: 145px;
                    overflow: hidden;
                  }
                  .span {
                    position: absolute;
                    top: 120%;
                    margin-left: 80px;
                    width: 30px;
                    height: 30px;
                    background-color: rgba(255, 255, 255, 0.6);
                    border-radius: 50%;
                    transform: translate(-80%, -50%);
                    overflow-x: hidden;
                    img {
                      display: block;
                      width: 36px;
                      height: 32px;
                      margin-top: -4px;
                      margin-left: -2px;
                    }
                  }
                }
                .actor {
                  font-size: 14px;
                  color: white;
                  text-align: center;
                }
                .actor1 {
                  font-size: 14px;
                  color: rgb(175, 170, 170);
                  text-align: center;
                }
              }
            }
          }
        }
      }
    }
    // 票房
    .box-office {
      padding: 12px;
      margin-top: 15px;
      background-color: #fff;
      .officeTitle {
        color: #000000;
        font-size: 16px;
        padding: 10px 12px;
      }
      .officeCon {
        display: flex;
        align-items: center;
        justify-content: space-around;
        border-radius: 8px;
        padding: 15px 0;
        background-color: #f8f8f8;
        li {
          .number {
            color: #f15a55;
            font-size: 12px;
            text-align: center;
          }
          .info {
            margin-top: 6px;
            color: #666666;
            font-size: 12px;
            text-align: center;
          }
        }
      }
    }
    // 相关快讯
    .correlation {
      margin-top: 15px;
      background-color: #fff;
      .correlationTitle {
        color: #787878;
        font-size: 12px;
        padding: 12px;
        border-bottom: 1px solid #f9f9f9;
      }
      .correlation-item {
        li {
          border-bottom: 1px solid #f9f9f9;
          .item-top {
            display: flex;
            .con {
              color: #202020;
              font-size: 14px;
              font-weight: bold;
            }
            .img {
              width: 100px;
              img {
                display: block;
                width: 100%;
              }
            }
          }
          .item-bot {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 5px;
            .left {
              color: #ddddd3;
              font-size: 12px;
              width: 100%;
            }
            .right {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-between;
              color: #ddddd3;
              font-size: 12x;
            }
          }
        }
      }
    }
    // 底部信息
    .bot-info {
      color: #bdbdbd;
      font-size: 12px;
      margin-bottom: 50px;
      margin-top: 5px;
      .bottext {
        text-align: center;
      }
      .botspan {
        color: #5e80a6;
      }

      .img {
        width: 100%;
        text-align: center;
        img {
          width: 100px;
          display: block;
          margin: 0 auto;
        }
      }
    }
  }
  .buy-ticket {
    position: fixed;
    left: 0;
    bottom: 0;
    height: 60px;
    width: 100%;
    background-color: white;
    .ticket {
      width: 85%;
      color: white;
      height: 36px;
      line-height: 36px;
      background-color: red;
      margin: 0 auto;
      text-align: center;
      margin-top: 10px;
      border-radius: 36px;
    }
  }
}
</style>