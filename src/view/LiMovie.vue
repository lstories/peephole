<template>
  <div class="video">
    <div class="myvideo" v-if="videoid" @click="bobo">
      <div class="videoTop" @click="backvideo">
        <span>&lt;</span>
      </div>
    </div>
    <div class="videoimg">
      <video :src="videoid.videourl" ref="vivi"></video>
    </div>
    <div class="bofang" v-show="play"></div>
  </div>
</template>

<script>
export default {
  name: "LiMovie",
  data() {
    return {
      videoid: null,
      play: null,
    };
  },
  methods: {
    backvideo() {
      this.$router.go(-1);
    },
    bobo() {
      this.play = !this.play;
      if (this.$refs.vivi.paused) {
        this.$refs.vivi.play();
      } else {
        this.$refs.vivi.pause();
      }
    },
  },
  created() {
    // console.log(this.$route);
    this.videoid = this.$route.query;
  },
  mounted() {
    // console.log(this.$refs.vivi);
    this.$refs.vivi.play();
  },
};
</script>

<style lang="less" scoped>
.video {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #ffff;
  overflow: hidden;
  .myvideo {
    width: 100%;
    height: 100%;
    position: absolute;
    background: transparent;
    left: 0;
    top: 0;
    z-index: 1;
    .videoTop {
      position: absolute;
      z-index: 3;
      font-size: 24px;
      font-weight: bold;
      left: 0;
      top: 0;
      padding: 10px;
      width: 100%;
      background: rgba(0, 0, 0, 0.3);
      color: #ffff;
    }
  }

  .videoimg {
    background: #000;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    video {
      width: 100%;
    }
  }
  .bofang {
    position: absolute;
    z-index: 2;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    background-color: red;
  }
}
</style>