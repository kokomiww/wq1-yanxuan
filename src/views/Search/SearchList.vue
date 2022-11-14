<template>
  <div class="search-list-wrapper">
    <nav-bar
      title="搜索列表"
      @click-left="$router.back()"
    ></nav-bar>
    <list :goods="searchList"></list>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { getTuijianList } from '@/api/home'
import List from '@/components/List'
export default {
  components: { List },
  setup() {
    const route = useRoute()
    const searchList = ref([])
    const getDate = async () => {
      // 接收参数
      const kw = route.query.kw

      // 请求所有的商品数据
      const data = await getTuijianList()

      // 过滤
      searchList.value = data.filter(item => item.name.indexOf(kw) > -1)
    }
    getDate()
    return { searchList }
  }
}
</script>

<style lang="less" scoped>
</style>