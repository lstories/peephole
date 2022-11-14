// 小视频
import request from './http.js'
export function getVideo() {
  return request({
    url: 'video/short/0',
    method: 'get'
  })
}
