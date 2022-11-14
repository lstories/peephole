// 经典电影
import request from './http.js';
export function getClassicList() {
  return request({
    url: 'index/moreClassicList',
    method: 'get',
  })
}


