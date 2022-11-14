// 城市api
import request from './http.js'

export function getCityList() {
  return request({
    url: 'cities.json',
    method: 'get',
  })
}