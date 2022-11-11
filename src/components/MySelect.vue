<template>
  <div>
    <!-- 下拉菜单 -->
    <div class="opcity"></div>
    <!-- 筛选区 -->
    <div class="bigbox">
      <div class="alltag">
        <div :class="['city', type == 1 ? 'con' : '']" @click="typeOne(1)">
          全城
          <span class="iconfont icon-xiajiantou"></span>
        </div>
        <div :class="['brand', type == 2 ? 'con' : '']" @click="typeOne(2)">
          品牌
          <span class="iconfont icon-xiajiantou"></span>
        </div>
        <div class="feature">
          特色
          <span class="iconfont icon-xiajiantou"></span>
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
    </div>
  </div>
</template>

<script>
import { getCinema } from "../api/cinema.js";
import "../assets/font/iconfont.js";

export default {
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
          children:[
            {
              // 名称
              text:"温州",
              // id: 作为匹配状态的标识符
              id: 1,
            },
            {
              // 名称
              text:"杭州",
              // id: 作为匹配状态的标识符
              id: 2,
            }
          ]
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
  
  methods: {
    // 点击品牌
    becomeArea(index) {
      this.$emit("becamedid", this.list[index].id);
      this.selectNum = index;
      this.light = false;
    },

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

    // 点击选项卡的左右侧
    ck(index) {
      this.$emit("becamedid", this.items[index].id);
      this.light = false;
    },
    cj(index) {
      this.$emit("becamedid", index.id);
      console.log(index.id);
      this.light = false;
    },
    getCinemaFunction() {
      getCinema({ ci: this.cityip }).then((data) => {
        console.log("调用了", data);
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
        console.log("品牌---> ", this.list);
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
  display: none;
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
  .city, .brand {
    border-right: 1px solid #e5e;
  }
  .city,
  .brand,
  .feature {
    text-align: center;
    flex: 1;
  }
  .t2 {
    .van-cell_value{
      display: flex;
      justify-content: space-between;
      div:nth-of-type(2){
        font-size: 12px;
        color: #333;
        margin-right: 20px;
      }
    }
  }
}
</style>