<template>
  <div class="cate-list">
    <van-nav-bar
      title="商品分类"
      left-arrow
      @click-left="$router.go(-1)"
    ></van-nav-bar>
    <!--  -->
    <div
      class="cate-list-box"
      v-if="cateGoodsList.length>0"
    >
      <list
        :showDesc="false"
        :goods="cateGoodsList"
      ></list>
    </div>
    <van-empty
      description="暂无数据"
      v-else
    />
  </div>
</template>

<script>
import list from '@/components/List'
import { onMounted, ref, } from 'vue'
import { useRoute } from 'vue-router'
import { getTuijianList } from '@/api/home'
export default {
  components: {
    list
  },
  setup() {
    // 使用路由
    const route = useRoute()
    const cateGoodsList = ref([])
    // 定义id值
    const cid = ref('')

    // 1 接收分类页传递过来的分类id
    onMounted(() => {
      cid.value = route.params.cid
      // 调用获取数据的方法
      getData()
    })

    // 获取商品分类数据
    const getData = async () => {
      const data = await getTuijianList()
      cateGoodsList.value = data.filter(item => item.categoryId === Number(cid.value))
    }
    return { cateGoodsList }
  }
}
</script>


<style lang="less" scoped>
</style>