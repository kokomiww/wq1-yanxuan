<template>
  <div class="home-wrapper">
    <div class="header">
      <!-- 轮播图区域 -->
      <!-- 
        autoplay	自动轮播间隔，单位为 ms
        indicator-color	指示器颜色
       -->
      <van-swipe
        :autoplay="1000"
        indicator-color="black"
      >
        <van-swipe-item
          v-for="item in swipeList"
          :key="item.id"
        >
          <img
            :src="item.picUrl"
            alt=""
          >
        </van-swipe-item>
      </van-swipe>
      <!-- 导航区域 -->
      <ul class="list">
        <li>签到</li>
        <li>领券</li>
        <li>砍价</li>
        <li>专栏</li>
      </ul>
    </div>

    <!-- 分割线 -->
    <my-line></my-line>
    <!-- 精选专题 -->
    <div class="concentration-title">
      <div class="header-title">
        <span>精选专题</span>
        <van-icon name="arrow"></van-icon>
      </div>
      <div class="list-wrapper">
        <ul class="list">
          <li
            v-for="item in concentrationList"
            :key="item.id"
          >
            <img
              :src="item.pic"
              alt=""
            >
            <div class="title ellipsis">{{item.title}}</div>
            <div class="description ellipsis">{{item.descript}}</div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 人气推荐 -->
    <div class="tuijian">
      <div class="header-title">
        <span>人气推荐</span>
        <van-icon name="arrow"></van-icon>
      </div>
      <!-- 人气推荐列表 -->
      <list :goods="recommendList"></list>
    </div>
  </div>
</template>

<script>
import { getData } from './js/home.js'
import list from '@/components/List'
export default {
  components: {
    list
  },
  setup() {
    let { swipeList, concentrationList, recommendList } = getData()
    return { swipeList, concentrationList, recommendList }
  }
}
</script>

<style scoped lang="less">
@import url("~@/styles/home.less");
</style>