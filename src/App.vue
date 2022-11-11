<template>
  <div id="app">
    <div>
        <router-view :cityip="cityip" :cityname="cityname" @setCity="setCity"></router-view>

    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data() {
    return {
      cityip: 20,
      cityname: '广州'
    }
  },
  methods:{
    setCity(obj){
      let cname = obj.cname;
      let cip = obj.cip;
      console.log(cname, "@@", cip)
      this.cityip = cip;
      this.cityname = cname;
    }
  }
}
</script>

<style lang="less">
@import "./assets/css/base.css";

</style>
