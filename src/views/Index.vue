<template>
  <div class="container">
    <router-view></router-view>
    <!-- 
      active-color	选中标签的颜色	string	#1989fa
      route	是否开启路由模式	boolean	false
      to	点击后跳转的目标路由对象，等同于 vue-router 的 to 属性	string | object	-
     -->
    <van-tabbar
      active-color="#c00"
      route
    >
      <van-tabbar-item
        icon="home-o"
        to="/home"
      >首页</van-tabbar-item>
      <van-tabbar-item
        icon="apps-o"
        to="/cate"
      >分类</van-tabbar-item>
      <van-tabbar-item
        icon="shopping-cart-o"
        to="/cart"
      >购物车</van-tabbar-item>
      <van-tabbar-item
        icon="user-o"
        to="/my"
      >个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.container {
  height: 100%;
}
</style>