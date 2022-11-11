<template>
  <div>
    <div class="loginTop">
      <span @click="backFun">&lt;</span>
      <p>猫眼电影</p>
      <div></div>
    </div>
    <div class="loginBot">
      <div class="log1">
        <input type="number" placeholder="请输入账号" v-model="account" />
      </div>
      <div class="log2">
        <input type="password" placeholder="请输入密码" v-model="password" />
      </div>
      <div class="logbtn" v-if="pwdlogin === false" @click="loginFun">登录</div>
      <div class="logbtn1" v-if="pwdlogin === true" @click="loginFun">登录</div>

      <div class="argeement">
        <input type="checkbox" v-model="bbcc" />
        我已阅读并同意
        <span>《猫眼电影用户服务协议》</span>
        <span>《隐私政策》</span>
        <div style="text-align: center; margin-top: 10px">
          客服电话:<span> 111-111-111</span>
        </div>
      </div>
      <div class="textWord">
        <span>未注册的手机号将自动生成新账号</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "MyHome",
  data() {
    return {
      account: "", // 账号
      password: "", // 密码
      pwdlogin: false,
      bbcc: false,
    };
  },
  methods: {
    backFun() {
      this.$router.go(-1);
    },
    // 侦听密码是否有值
    pwdBtnloginFun() {
      if (this.account.length != 0 && this.password.length >= 6) {
        this.pwdlogin = true;
      } else {
        this.pwdlogin = false;
      }
    },
    // 登录功能
    loginFun() {
      // 判断登录
      if (this.account.length != 0 && this.password.length >= 6) {
        // 判断是否勾选了服务协议
        if (this.bbcc == true) {
          Toast({
            message: "登录成功",
            position: "bottom",
          });
          localStorage.setItem("userId", 88888888); // 登录成功就存进去的用户id
          setTimeout(() => {
            this.$router.push("/mymine");
          }, 1500);
        } else {
          // 如果不是上述情况, 就不能登录
          Toast({
            message: "请阅读并同意隐私服务协议",
            position: "bottom",
          });
        }
        // 判断密码是否为空
      } else if (this.account.length != 0 && this.password.length == "") {
        Toast({
          message: "请输入密码",
          position: "bottom",
        });
        // 判断是否输入了账号或者密码
      } else if (this.account.length == "" && this.password.length == "") {
        Toast({
          message: "请输入账号和密码才能登录",
          position: "bottom",
        });
        // 密码小于6位
      } else if (this.account.length == 0 && this.password.length < 6) {
        Toast({
          message: "请输入6位的密码",
          position: "bottom",
        });
      }
    },
  },
  watch: {
    account: function () {
      this.pwdBtnloginFun();
    },
    password: function () {
      this.pwdBtnloginFun();
    },
  },
};
</script>

<style lang="less" scoped>
.loginTop {
  background: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 18px;
  padding: 12px;
  span {
    font-family: "宋体";
    font-size: 20px;
  }
}
.loginBot {
  padding: 16px;
  .log1 {
    margin-top: 32px;
    padding: 12px 0;
    border-bottom: 1px solid #7f7f7f;
    input {
      border: 0;
      width: 100%;
      input::-webkit-input-placehold {
        color: #fff;
      }
    }
  }
  .log2 {
    margin-top: 16px;
    padding: 12px 0;
    border-bottom: 1px solid #7f7f7f;
    input {
      width: 100%;
      border: 0;
      input::-webkit-input-placehold {
        color: red;
      }
    }
  }
  .logbtn {
    background: #e5e5e5;
    text-align: center;
    font-size: 14px;
    width: 100%;
    margin-top: 14px;
    padding: 12px 0;
    border-radius: 24px;
  }
  .logbtn1 {
    background: red;
    color: #fff;
    text-align: center;
    font-size: 14px;
    width: 100%;
    margin-top: 14px;
    padding: 12px 0;
    border-radius: 24px;
  }
  .argeement {
    font-size: 12px;
    color: #7f7f7f;
    margin-top: 30px;
    input {
      display: inline-block;
      border-radius: 50%;
    }
    span {
      color: red;
      display: inline-block;
      text-align: center;
    }
  }
  .textWord {
    margin-top: 15px;
    font-family: "宋体";
    font-size: 0.26rem;
    color: #999999;
    text-align: center;
  }
}
</style>