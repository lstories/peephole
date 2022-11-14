// 即将上线的电影
import request from "./http.js"

export function getReadyMovie() {
  return request({
    url: 'index/mostExpected',
    method: 'get',

  })
}

// 更多
export function getReadyMovieList() {
  return request({
    url: 'index/comingList',
    method: 'get',

  })
}
