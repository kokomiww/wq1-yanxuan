import request from '@/utils/request'

// 获取短信验证码

export function getVerifityCode(data) {
    return request('small4/verification/sms/get', 'get', data)
}

// 获取省数据

export function getProvince() {
    return request('common/region/province', 'get', {})
}

// 获取市--县区数据

export function getCitys(pid) {
    return request(`common/region/child?pid=${pid}`, 'get', {})
}

// 短信验证码的校验

export function validateSms(query) {
    return request(`small4/verification/sms/check?${query}`, 'get', {})
}

// 注册功能

export function registerApi(query) {
    return request(`small4/user/m/register?${query}`, 'post', {})
}