import request from "@/utils/request"

// 分类数据

export function getCates() {
    return request('small4/shop/goods/category/all', 'get', {})
}

// 获取商品详情页

export function getGoodsDetail(id) {
    return request(`small4/shop/goods/detail?id=${id}`, 'get', {})
}