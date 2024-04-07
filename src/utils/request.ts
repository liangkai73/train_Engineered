/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios'
import { NetworkHandler } from './networkHandle'

const netInstance = axios.create({
  baseURL: 'https://api.github.com/'
  // baseURL: import.meta.env.VITE_BASE_API,
  // headers: {'X-Custom-Header': 'foobar'}
})

// 响应拦截器 - request

netInstance.interceptors.request.use(
  config => {
    return config // 必须返回配置
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器 - response
netInstance.interceptors.response.use(
  response => {
    const { data } = response
    return NetworkHandler.prototype.onErrorHandler(data)
  },
  error => {
    // 请求失败，处理错误
    let str
    if (error.response) {
      // 请求已发出，服务器用状态码响应
      str = '数据请求失败：' + error.response.data.message
      console.error('数据请求失败，状态码：', error.response.status)
    } else if (error.request) {
      // 请求已发出但没有收到响应
      str = '请求发送错误：' + error.request
      console.error('请求发送错误：', error.request)
    } else {
      str = '错误：' + error.message
      // 在设置请求时出现错误
      console.error('错误：', error.message)
    }
    // messageApi.open({
    //   type: 'error',
    //   content: str
    // })
    return Promise.reject(str)
  }
)

/**
 *
 * @param url
 * @param option
 * @returns promise
 * @desc get 请求
 */
function get(url: string, option?: object) {
  return netInstance.get(url, option)
}
/**
 *
 * @param url
 * @param option
 * @returns promise
 * @desc post 请求
 */
function post(url: string, option: object) {
  return netInstance.post(url, option)
}

/**
 *
 * @param url
 * @param option
 * @returns promise
 * @desc post 请求
 */
function _delete(url: string, option?: object) {
  return netInstance.delete(url, option)
}

/**
 *
 * @param url
 * @param option
 * @returns promise
 * @desc post 请求
 */
function put(url: string, option: object) {
  return netInstance.put(url, option)
}

export default {
  get,
  post,
  delete: _delete,
  put
}
