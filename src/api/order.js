import request from '@/utils/request'
import { objToStr } from '@/utils/auth'
// 获取默认地址

export function getDefaultAddress() {
    return request('small4/user/shipping-address/default?token=' + sessionStorage.getItem('token'), 'get', {})
}

// 收货地址列表
export function getDefaultAddressList() {
    return request('small4/user/shipping-address/list?token=' + sessionStorage.getItem('token'), 'get', {})
}

// 删除收货地址
export function delOneAddress(id) {
    return request('small4/user/shipping-address/delete?' + objToStr({ id, token: sessionStorage.getItem('token') }), 'get', {})
}

// 修改收货地址
export function putAddress(id) {
    return request(
        'small4/user/shipping-address/update?',
        'post',
        { id, token: sessionStorage.getItem('token') },
    )
}

// 新增收货地址
export function addAddress(data) {
    return request(
        'small4/user/shipping-address/add?' + objToStr(data),
        'get',
        {},
    )
}

// 生成订单
export function createOrder(data) {
    return request(
        'small4/order/create',
        'post',
        data,
    )
}