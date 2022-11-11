import request from "./http.js";

// https://apis.netstart.cn/maoyan

// 好评电影的列表
export function getNiceMovie(parmas){
  return request({
    url: "index/topRatedMovies",
    method:"get",
    parmas
  })
}

// 更多moreComingList更多热映列表
// https://apis.netstart.cn/maoyan/index
export function getMoreNiceMovie(parmas){
  return request({
    url: "index/moreComingList",
    method:"get",
    parmas
  })
}


// 更多的任意列表


