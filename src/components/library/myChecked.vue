<template>
  <div
    class="my-checkbox"
    @click="changeChecked"
  >
    <i
      class="checked"
      v-if="checked"
    ></i>
    <i
      class="unchecked"
      v-else
    ></i>
    <span>
      <slot />
    </span>
  </div>
</template>

<script>
import { useVModel } from '@vueuse/core'
// v-model =====> :modelValue    +    @update:modelValue
export default {
  name: "myChecked",
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    }
  },
  setup(props, { emit }) {

    /*
    @vueuse/core 是一个基于Composition API 的实用函数集合
    实现双向数据绑定 v-model指令
    1：使用props接收modelValue
    2：使用useVModel 来包装props中的modelValue属性数据
    3：使用checked.value就是使用父组件的数据
    4：使用checked.value = "数据"赋值，触发emit('update:modelValue'，'数据')
    */

    const checked = useVModel(props, 'modelValue', emit)
    const changeChecked = () => {
      // checked.value 读取props的值
      const newValue = !checked.value
      checked.value = newValue
      // 通知父组件 emit('updata:modelValue' e:modelValue)
      // 让组件支持change事件
      emit('change', newValue)
    }

    return { checked, changeChecked }
  }
}
</script>

<style lang="less" scoped>
.my-checkbox {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  i {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50px;
    margin-right: 2px;
    &.checked {
      background-color: red;
      border: 1px solid #ddd;
    }
    &.unchecked {
      border: 1px solid #ddd;
    }
  }
  span {
    font-size: 12px;
  }
}
</style>