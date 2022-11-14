<template>
  <div>
    <div class="botmbar">
      <router-link tag="div" to="/index" class="botm">
        <span class="iconfont icon-dianying"></span>
        <p>电影、影院</p>
      </router-link>
      <router-link tag="div" to="/video" class="botm">
        <span class="iconfont icon-paishipin"></span>
        <p>小视频</p>
      </router-link>
      <router-link class="botm" to="/mymine">
        <span class="iconfont icon-shouye"></span>
        <p>我的</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MybtmBar",
};
</script>

<style lang="less">
.botmbar {
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  background: white;
  border-top: 1px solid orange;
  padding-top: 4px;
  .botm {
    flex-shrink: 0;
    flex-grow: 1;
    color: black;
    text-align: center;
    .iconfont {
      font-size: 14px;
    }
    p {
      font-size: 12px;
      align-content: center;
    }
  }
}
</style>