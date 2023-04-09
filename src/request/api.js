// 项目中我们大彩数时候都会把对应的接口请求封装成api米调用
import http from './http'

//登录接口
export function login (data) {
    console.log('login api')
    return http({
        method: 'post',
        url: '/login',
        data
    })
}