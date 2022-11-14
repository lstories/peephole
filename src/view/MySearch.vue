<template>
  <div class="mysearch">
    <div class="SearchTop">
      <div class="title">
        <span class="black">&lt;</span>
        猫眼电影
      </div>
    </div>
    <div class="searchBox">
      <div class="searchCon">
        <span class="iconfont icon-fangdajing"></span>
        <input type="text" class="input" placeholder="搜电影, 搜影院" />
        <span class="text">取消</span>
      </div>
    </div>
    <div class="content">
      <div class="list">
        <ul>
          <li>
            <div class="left">
              <img src="" alt="图片" />
            </div>
            <div class="right">
              <div class="title">剧名 <span>8分</span></div>
              <p class="p1">作者</p>
              <p class="p2">作者</p>
              <p class="time">作者</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MySearch",
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
          .left {
            width: 60px;

            img {
              width: 120px;
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>