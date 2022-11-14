import request from '@/utils/request'

// 获取轮播图的接口api

export function getHomeSwipe() {
    return request('small4/banner/list', 'get', {})
}

// 获取精选专题的接口api

export function getNewsList() {
    return request('small4/cms/news/list', 'get', {})
}

// 获取人气推荐的接口api

export function getTuijianList() {
    return request('small4/shop/goods/list', 'get', {})
}