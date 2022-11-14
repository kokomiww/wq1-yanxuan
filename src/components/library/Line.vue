<template>
  <div
    class="line"
    :style="{height:content.length<=0?'10px':'20px',lineHeight:content.length<=0?'10px':'20px'}"
  >
    {{content}}
  </div>
</template>

<script>
export default {
  name: 'my-line',
  props: {
    content: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
.line {
  width: 100%;
  height: 10px;
  background-color: #f5f5f5;
  color: #6d6d6d;
  font-size: 12px;
  text-align: center;
}
</style>