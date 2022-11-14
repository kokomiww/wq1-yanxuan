<template>
  <div>
    <div class="goods-sku-info-wrapper">
      <div class="img-box">
        <img
          :src="skuData.pic"
          alt=""
        />
      </div>
      <div class="goods-sku-info">
        <div class="goods-sku-title">{{skuData.name}}</div>
        <div class="goods-sku-price">{{skuData.price}}</div>
      </div>
    </div>
    <div class="goods-properties-wrpper">
      <div
        class="goods-item"
        v-for="(item,index) in properties"
        :key="item.id"
      >
        <div class="goods-properties-title">{{item.name}}</div>
        <div class="goods-properties-btn-wrapper">
          <div
            v-for="(item2,idx) in item.childsCurGoods"
            :key="item2.id"
            :class="['goods-properties-btn',{active:item.curIndex===idx}]"
            @click="chooseGoodsProps(item,index,idx)"
          >{{item2.name}}</div>
        </div>
      </div>
    </div>
    <div class="goods-num-wrapper">
      <span>购买数量</span>
      <van-stepper v-model="skuData.num" />
    </div>
    <div
      class="add-btn"
      @click="insertCart"
    >加入购物车</div>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { Notify } from 'vant'
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    basicInfo: {
      type: Object,
      required: true
    },
    properties: {
      type: Array,
      default: [],
    }
  },
  setup(props, ctx) {
    const store = useStore()
    // 商品sku数据
    const skuData = reactive({
      goodsId: "", // 商品id
      pic: "", // 图片
      name: "", // 标题
      price: "", // 价格
      num: 1, // 数量
      props: "", // 选好的商品属性
      // id
      id: "", // 选择的商品属性id处理好的
      checked: false, // 商品是否选中
    })
    // 商品的属性
    let properties = ref([])
    // 选择的商品属性的数组 [1.5M,珊瑚粉]
    let chooseProps = ref([])

    // 选择的商品属性id
    let choosePropsIds = ref([])

    // 给商品sku数据赋值
    onMounted(() => {
      skuData.goodsId = props.id
      skuData.pic = props.basicInfo.pic
      skuData.name = props.basicInfo.name
      skuData.price = props.basicInfo.minPrice
      skuData.id = props.id
      // 先判断有没有
      properties.value = props.properties && props.properties
    })

    // 选择不同的商品属性
    const chooseGoodsProps = (item, index, idx) => {
      // 给点击的属性添加active样式
      item['curIndex'] = idx
      chooseProps.value[index] = item.childsCurGoods[idx].name
      skuData.props = chooseProps.value.join(' ')
      choosePropsIds.value[index] = item.childsCurGoods[idx].propertyId + ':' + item.childsCurGoods[idx].id
      skuData.id = choosePropsIds.value.join(',')
    }

    // 点击加入购物车
    const insertCart = () => {
      // 判断是否有属性
      if (properties.value && properties.value.length > 0) {
        // 有属性
        // 判断是否选择了商品属性
        if (chooseProps.value[0] && chooseProps.value.length == properties.value.length) {
          store.dispatch('cart/insertCart', skuData)
        } else {
          return Notify({ type: 'warning', message: "请选择商品属性" })
        }
      } else {
        store.dispatch('cart/insertCart', skuData)
      }
      // 隐藏sku面板
      // 通知父组件隐藏
      ctx.emit('skuEvent')
      Notify({
        type: "success",
        message: "加入购物车成功"
      })
    }
    return { insertCart, skuData, chooseProps, properties, choosePropsIds, chooseGoodsProps }
  }
}
</script>

<style lang="less" scoped>
.goods-sku-info-wrapper {
  padding: 10px;
  display: flex;
  border-bottom: 1px solid #f5f5f5;
  box-sizing: border-box;
  .img-box {
    width: 67px;
    height: 67px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .goods-sku-info {
    margin-left: 10px;
    padding: 3px 0;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    box-sizing: border-box;
    font-size: 14px;
    .goods-sku-title {
      width: 100%;
    }
    .goods-sku-price {
      color: #c00;
    }
  }
}
.goods-properties-wrpper {
  padding: 20px 10px 0;
  border-bottom: 1px solid #f5f5f5;
  box-sizing: border-box;
  font-size: 14px;
  .goods-item {
    // margin-bottom: 20px;
    font-size: 13px;
    .goods-properties-title {
      margin-bottom: 10px;
      margin-left: 10px;
    }
    .goods-properties-btn-wrapper {
      display: flex;
      flex-wrap: wrap;
      .goods-properties-btn {
        margin-right: 8px;
        margin-bottom: 20px;
        padding: 8px 15px;
        border-radius: 5px;
        border: 1px solid #d9d9d9;
        &.active {
          border-color: #c00;
        }
      }
    }
  }
}
.goods-num-wrapper {
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  border-bottom: 1px solid #f5f5f5;
  font-size: 14px;
}
.add-btn {
  background: #c00;
  line-height: 44px;
  text-align: center;
  color: #fff;
}
</style>