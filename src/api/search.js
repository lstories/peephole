import request from './http.js'

// 电影搜索
export function searchMovie(params){
  return request({
    url: 'search/movies?',
    method: "get",
    params
  })
}

// 影院搜索
export function searchCinemas(params){
  return request({
    url: 'search/cinemas',
    method: "get",
    params
  })
}

