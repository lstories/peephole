<template>
  <div>
    <!-- 下拉菜单 -->
    <div class="opcity" v-show="light" @click="openLight"></div>
    <!-- 筛选区 -->
    <div class="bigbox">
      <div class="alltag">
        <div :class="['city', type == 1 ? 'con' : '']" @click="typeOne(1)">
          全城
          <span
            :class="['iconfont icon-xiajiantou', type == 1 ? 'toy' : '']"
          ></span>
        </div>
        <div :class="['brand', type == 2 ? 'con' : '']" @click="typeOne(2)">
          品牌
          <span
            :class="['iconfont icon-xiajiantou', type == 2 ? 'toy' : '']"
          ></span>
        </div>
        <div :class="['feature', type == 3 ? 'con' : '']" @click="typeOne(3)">
          特色
          <span
            :class="['iconfont icon-xiajiantou', type == 1 ? 'toy' : '']"
          ></span>
        </div>
      </div>
      <!-- 点击高亮遮罩层 -->
      <div class="t1" v-show="type == 1">
        <van-tabs v-model="active">
          <van-tab title="商圈">
            <van-tree-select
              :items="items"
              :active-id.sync="activeId"
              :main-active-index.sync="activeIndex"
              @click-nav="ck"
              @click-item="cj"
            />
          </van-tab>
          <van-tab title="地铁站">
            <van-tree-select
              :items="items1"
              :active-id.sync="activeId1"
              :main-active-index.sync="activeIndex1"
              @click-nav="ck"
              @click-item="cj"
            />
          </van-tab>
        </van-tabs>
      </div>
      <!-- 品牌详细 -->
      <div class="t2" v-show="type == 2">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <van-cell
            v-for="(item, index) in list"
            :key="item.id"
            :class="[selectNum == index ? 'con' : '']"
            @click="becomeArea(index)"
          >
            <div>{{ item.name }}</div>
            <div>{{ item.count }}</div>
          </van-cell>
        </van-list>
      </div>
      <!-- 特色的详细 -->
      <div class="t3" v-show="type == 3">
        <!-- 特色功能 -->
        <div class="top" v-if="area">
          <div class="bot1">特色功能</div>
          <div class="bot2">
            <div
              :class="['pat1', index == contype ? 'con' : '']"
              v-for="(item, index) in area"
              :key="item.id"
              @click="activeCon(index)"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
        <!-- 特色厅 -->
        <div class="top" v-if="area">
          <div class="bot1">特色厅</div>
          <div class="bot2">
            <div
              :class="['pat1', index == contype1 ? 'con' : '']"
              v-for="(item, index) in featureWay"
              :key="item.id"
              @click="activeCon1(index)"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCinema } from "../api/cinema.js";
import "../assets/font/iconfont.js";

export default {
  props: ["cityip", "districtid", "halltype", "brandid", "serviceid"],
  name: "MySelect",
  data() {
    return {
      light: false, // 遮罩层的开关
      type: 0, // 状态选项卡
      activeId: 0,
      activeIndex: 0,
      activeId1: 0,
      activeIndex1: 0,
      active: 0,
      loading: false,
      finished: false,
      area: null,
      featureWay: null,
      // 点击功能高亮
      contype: 0,
      contype1: 0,
      // 品牌列表
      list: [],
      selectNum: 0,
      con: "",
      // 商圈
      items: [
        {
          // 导航的名称
          text: "所有城市",
          // 导航下的可选项
          children: [
            {
              // 名称
              text: "温州",
              // id: 作为匹配状态的标识符
              id: 1,
            },
            {
              // 名称
              text: "杭州",
              // id: 作为匹配状态的标识符
              id: 2,
            },
          ],
        },
      ],
      // 地铁站
      items1: [
        {
          // 导航名称
          text: "全部",
          // 可选项
          children: [
            {
              // 名称
              text: "白云",
              // id
              id: 1,
            },
            {
              // 名称
              text: "黄埔",
              // id
              id: 2,
            },
          ],
        },
      ],
    };
  },

  watch: {
    type: function (newNum, oldNum) {
      console.log("新值", newNum);
      console.log("旧值", oldNum);
      if (newNum != oldNum && newNum != 0) {
        this.light = true;
      }
    },
    light() {
      if (this.light == false) {
        this.type = 0;
      }
    },
  },

  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },

    typeOne(index) {
      this.type = index;
      this.light = !this.light;
    },
    // 点击品牌
    becomeArea(index) {
      this.$emit("becamebid", this.list[index].id);
      this.selectNum = index;
      this.light = false;
    },

    // 点击选项卡的左右侧
    ck(index) {
      if (index == 0) {
        this.$emit("becamedid", this.items[index].id);
        this.light = false;
      }
    },
    cj(index) {
      this.$emit("becamedid", index.id);
      // console.log(index.id);
      this.light = false;
    },
    // 特色被点击高亮
    activeCon(index) {
      this.contype = index;
      this.$emit("becomeeid", this.area[index].id);
    },
    activeCon1(index) {
      this.contype1 = index;
      this.$emit("becomehid", this.featureWay[index].id);
      this.light = false;
    },
    openLight() {
      this.light = false;
      this.type = 0;
    },
    getCinemaFunction() {
      getCinema({ ci: this.cityip }).then((data) => {
        // console.log("调用了", data);
        // 行政区
        this.items = data.district.subItems;
        // 地铁站
        this.items1 = data.subway.subItems;

        // 商圈
        this.items.forEach((item) => {
          // 左侧的选项卡
          item.text = item.name + "(" + item.count + ")";
          // 右侧选项卡
          // item子数组遍历, 把name变成text
          item.children = item.subItems;
          item.children.forEach((par) => {
            par.text = par.name + "(" + par.count + ")";
          });
        });
        // 地铁站
        this.items1.forEach((item) => {
          // 左侧的选项卡
          item.text = item.name + "(" + item.count + ")";
          // 右侧选项卡
          // item子数组遍历, 把name变成text
          item.children = item.subItems;
          item.children.forEach((par) => {
            par.text = par.name + "(" + par.count + ")";
          });
        });

        // 品牌
        this.list = data.brand.subItems;
        // console.log("品牌---> ", this.list);

        // 特色
        this.area = data.service.subItems;
        // 特色厅
        this.featureWay = data.hallType.subItems;
      });
    },
  },
  created() {
    this.getCinemaFunction();
  },
};
</script>

<style lang="less" scoped>
.opcity {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  // display: none;
}
.bigbox {
  position: absolute;
  width: 100%;
  top: 156px;
  background: white;
  z-index: 10;
  .alltag {
    display: flex;
    margin: 0 16px;
    border-bottom: 1px solid #f7f7f7;
    color: #777;
    align-items: center;
    height: 40px;
    font-size: 14px;
  }
  .city,
  .brand {
    border-right: 1px solid #e5e;
  }
  .city,
  .brand,
  .feature {
    text-align: center;
    flex: 1;
    .iconfont {
      font-size: 12px;
      display: inline-block;
      transform: scale(0.8);
    }
  }
  .con {
    color: #e54847;
    .toy {
      transform: scale(0.8) rotate(180deg);
    }
  }
  .t2 {
    .van-cell_value {
      display: flex;
      justify-content: space-between;
      div:nth-of-type(2) {
        font-size: 12px;
        color: #333;
        margin-right: 20px;
      }
    }
  }
  .t3 {
    padding: 10px 12px;
    .top {
      .bot1 {
        color: #777777;
        height: 44px;
        line-height: 44px;
      }
      .bot2 {
        display: flex;
        flex-wrap: wrap;
        .con {
          background: #f0f0f0 !important;
          color: #e54847;
          border: 0.02rem solid #e54847 !important;
        }
        .pat1 {
          width: 75px;
          height: 30px;
          text-align: center;
          line-height: 30px;
          font-size: 12px;
          border-radius: 8px;
          margin-right: 12px;
          border: 1px solid #dddddd;
          margin-top: 10px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          color: #777777;
        }
        .pat1:nth-child(4n + 4) {
          margin-right: 0;
        }
      }
    }
  }
}
</style>