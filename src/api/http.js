// 安装axios
// $npm i axios -S
// 创建初始化 axios
import axios from "axios";
// https://apis.netstart.cn/maoyan

const service = axios.create({
  timeout : 30000, // 超时响应时间
  baseURL: "https://apis.netstart.cn/maoyan",
  headers: {
    "Content-Type":"application/json;chatset=utf-8" // 表单数据转化
  }
})

// request拦截器设置
service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    console.log('request报错信息, ',error);
    Promise.reject(error)
  }
)

// response拦截器
service.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    console.log('response报错信息', error);
    Promise.reject(error);
  }
)

export default service





