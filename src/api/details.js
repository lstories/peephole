import request from "./http.js"

export function getMovieList(params) {
  return request({
    url: "movie/detail",
    method: 'get',
    params
  })
}