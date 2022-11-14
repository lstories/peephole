// 影院
import request from './http.js';
export function getCinema(params) {
  return request({
    url: 'index/filterCinemas',
    method: 'get',
    params
  })
}

// 附近影院列表
export function getmoreCinemas(params) {
  return request({
    url: 'index/moreCinemas',
    method: 'get',
    params

  })
}

// 经典电影
export function getNiceMovieList(){
  return request({
      url:"/index/moreClassicList",
      method:"get"
  })
}

// 影院详细
export function getCinemaDetail(params) {
  return request({
    url: 'cinema/detail',
    method: 'get',
    params
  })
}

// 正在上映的电影列表
export function getCinemaShow(params) {
  return request({
    url: 'cinema/shows',
    method: 'get',
    params
  })
}

