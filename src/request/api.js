// 项目中我们大彩数时候都会把对应的接口请求封装成api米调用
import http from './http'
//一般不需要， 此项目需要转换数据
import qs from 'qs'

//登录接口
export function login (data) {
    console.log('login api')
    return http({
        method: 'post',
        url: '/login',
        data
    })
}

//学生列表查询接口
export function students(params) {
    return http({
        method: 'get',
        url: '/students',
        params
    })
}

//学生列表删除接口
export function studentDel(id) {
    return http({
        method: 'delete',
        url: `/students/${id}`,
    })
}

// //信息列表新增接口
// export function addInfo(data) {
//     //一般不需要做数据处理， 这里是服务器端没有做处理
//     data = qs.stringify(data)
//     return http({
//         method: 'post',
//         url: '/info',
//         data
//     })
// }

// //信息列表修改接口
// export function updateInfo(data) {
//     data = qs.stringify(data)
//     return http({
//         method: 'put',
//         url: '/info',
//         data
//     })
// }

//信息列表新增和修改接口
export function createUpdateInfo(type, data) {
    data = qs.stringify(data)
    const obj = {method: type, url: 'info', data}
    return http(obj)
}

//信息列表查询接口
export function getInfo() {
    return http({
        method: 'get',
        url: '/info',
    })
}

//信息列表删除接口
export function infoDel(id) {
    return http({
        method: 'delete',
        url: `/info/${id}`,
    })
}

//学生列表查询接口
export function works(params) {
    return http({
        method: 'get',
        url: '/works',
        params
    })
}

// 数据概览接口
export function dataview(params) {
    return http({
        method: 'get',
        url: '/dataview',
        params
    })
}

// 旅游地图接口
export function travel() {
    return http({
        method: 'get',
        url: '/travel',
    })
}