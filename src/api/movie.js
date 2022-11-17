import request from "./http.js"

export function getMovice(params) {
  return request({
    url: "movie/detail",
    method: 'get',
    params
  })
}

export function getTicker(params) {
  return request({
    url: "index/moreCinemas",
    method: 'get',
    params
  })
}


