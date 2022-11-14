import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: () => import('@/views/Index'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/Home')
      },
      {
        path: '/cate',
        component: () => import('@/views/Cate')
      },
      {
        path: '/cart',
        component: () => import('@/views/Cart')
      },
      {
        path: '/my',
        component: () => import('@/views/My')
      },
    ]
  },
  {
    path: '/catelist/:cid',
    component: () => import('@/views/Cate/cateList')
  },
  // 详情页
  {
    path: '/goods/:id',
    component: () => import('@/views/Goods')
  },
  {
    path: '/login',
    component: () => import('@/views/Login')
  },
  {
    path: '/register',
    component: () => import('@/views/Register')
  },
  { // 确认订单
    path: '/orderlist',
    component: () => import('@/views/OrderList')
  },
  { // 我的地址
    path: '/myaddress',
    component: () => import('@/views/OrderList/MyAddress')
  },
  { // 新增地址
    path: '/address',
    component: () => import('@/views/OrderList/Address')
  },
  { // 确认付款
    path: '/parment',
    component: () => import('@/views/OrderList/ParMent')
  },
  { // 搜索页
    path: '/search',
    component: () => import('@/views/Search')
  },
  { // 搜索列表页
    path: '/searchlist/',
    component: () => import('@/views/Search/SearchList')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
