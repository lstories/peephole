<template>
  <div class="main">
    <MySelect
      :cityip="cityip"
      :halltype="halltype"
      :districtid="districtid"
      :brandid="brandid"
      :serviceid="serviceid"
      @becomedid="becomedid"
      @becomehid="becomehid"
      @becomeeid="becomeeid"
      @becomebid="becomebid"
    ></MySelect>

    <!-- 影院位置 -->
    <div :v-if="cinemalist">
      <div class="cinema" v-for="item in cinemalist" :key="item.cinemaId">
        <h3>
          <h3>{{ item.title }}</h3>
          <span>{{ item.price.n }}</span>
          <div>&nbsp;{{ item.price.q }}</div>
        </h3>
        <p>{{ item.location }}</p>
        <div class="tag">
          <div v-if="item.services[0]">改签</div>
          <div class="bor" v-if="item.services[1]">折扣卡</div>
          <div class="" v-if="item.services[2]">杜比全景声厅</div>
          <div class="" v-if="item.services[3]">LUXE巨幕厅</div>
        </div>
        <div class="tag2" v-if="item.discount[0]">
          <img :src="item.discount[0].card" alt="卡的图片" />
          <div>{{ item.discount[0].text }}</div>
        </div>
      </div>
    </div>
    <MybtmBar />
  </div>
</template>

<script>
import { getmoreCinemas } from "../api/cinema.js";
import MySelect from "@/components/MySelect.vue";
import MybtmBar from "@/components/MybtmBar.vue";
export default {
  name: "CinemaTwo",
  props: ["cityip"],
  components: { MySelect, MybtmBar },
  data() {
    return {
      cinemalist: null,
      // 行政区id
      districtid: null,
      
      // 影厅类型
      halltype: null,
      // 品牌
      brandid: null,
      // 影院服务
      serviceid: null,
    };
  },
  methods: {
    // 改变行政区id
    becomedid(id) {
      this.districid = id;
      this.getmoreCinemasFun();
    },
    // 改变影厅类型id
    becomehid(id) {
      this.halltype = id;
      this.getmoreCinemasFun();
    },
    // 改变品牌id
    becomebid(id) {
      this.brandid = id;
      this.getmoreCinemasFun();
    },
    // 改变影院服务id
    becomeeid(id) {
      this.serviceid = id;
      this.getmoreCinemasFun();
    },
    getmoreCinemasFun() {
      getmoreCinemas({
        cityId: this.cityip,
        districid: this.districid,
        hallType: this.halltype,
        brandId: this.brandid,
        serviceId: this.serviceid,
      }).then((data) => {
        this.cinemalist = data;
      });
    },
  },

  created() {
    this.getmoreCinemasFun();
  },

  watch: {
    cityid() {
      this.getmoreCinemasFun();
    },
  },
};
</script>

<style lang="less" scoped>
.main {
  margin-top: 41px;
  .cinema {
    margin-left: 14px;
    padding: 14px 14px 14px 0;
    border-bottom: 1px solid #968d8d;
    h3 {
      display: flex;
      align-items: center;
      span {
        color: red;
        font-size: 18px;
      }
      div {
        color: red;
        font-size: 14px;
      }
      h3 {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 240px;
      }
    }
    p {
      font-size: 14px;
      color: #968d8d;
      height: 16px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .tag {
      display: flex;
      margin-top: 8px;
      div {
        padding: 0 2px;
        font-size: 12px;
        border: 1px solid skyblue;
        border-radius: 6px;
        margin-right: 4px;
        color: #a8ccd5;
      }
      .bor {
        border-color: #ffca7b;
        color: #ffca7b;
      }
    }
    .tag2 {
      display: flex;
      color: #999999;
      font-size: 12px;
      align-items: center;
      margin-top: 8px;
      img {
        width: 14px;
        height: 14px;
      }
    }
  }
}
</style>