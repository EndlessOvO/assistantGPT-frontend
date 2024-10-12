import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { userStore } from '@/plugin/store';

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
});

// 请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const store = userStore();
    // 如果用户已登录，则在请求头中携带 token
    if (store.getLoginVO.token) {
      config.headers['Authorization'] = store.getLoginVO.token;
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.data.code !== 200) console.log("[请求失败] code: " + response.data.code + ", message: " + response.data.message);
    return response.data;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

export default service;