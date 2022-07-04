import axios from "axios"
import { ElMessage } from 'element-plus'

const $http = axios.create({
    baseURL: "/api",
    timeout: 2000,
    headers: {
        "Content-Type": "application/JSON;charset=utf-8"
    }
})

enum msgs {
    "操作成功" = 200,
    "密码错误",
    "账号错误",
    "请求异常"
}

$http.interceptors.request.use(config => {
    config.headers = config.headers || {}
    if(localStorage.getItem('token')) {
        config.headers.token = localStorage.getItem('token') || ''
    }
    return config
})

$http.interceptors.response.use(res => {
    const code: number = res.data.status
    const resp: string = res.data.token? res : res.data
    if(code !== 200) {
        ElMessage.error(msgs[code])
        return Promise.reject(resp)
    }
    return Promise.resolve(resp)
},err => {
    return Promise.reject(err)
})

export default $http