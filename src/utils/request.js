import axios from 'axios'
import store from '@/store'

const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/' // 线上接口地址
  // baseURL: 'http://toutiao.course.itcast.cn' // 本地接口地址
})
// Add a request interceptor
request.interceptors.request.use(function (config) {
  // Do something before request is sent
  // 如果登陆了，则统一给接口添加用户
  const { user } = store.state
  if (user) {
    config.headers.Authorization = `Bearer ${user.token}`
  }
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
request.interceptors.response.use(function (response) {
  // Do something with response data

  // 如果响应结果对象中有 data, 则直接返回这个 data 数据
  // 如果响应结果对象中没有 data, 则不做任何处理，直接原样返回这个数据
  return response.data.data || response.data
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

export default request
