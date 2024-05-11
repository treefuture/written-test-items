<template>
  <!-- 不同板块顶部的标题和描述 -->
  <div class="top-block content">
    <hr>
    <div class="title">{{ title }}</div><br>
    <span class="desc" v-if="desc">{{ desc }}</span>
  </div>
</template>

<script>
export default {
  name: 'TopBlock',
  props: ['title', 'desc']
}
</script>

<style lang="less" scoped>
.top-block {
  text-align: center;
  margin-bottom: 30px;

  & > hr {
    height: 1px;
    border: none;
    border-top: 1px dotted #e9e9e9;
  }

  .title {
    display: inline-block;
    margin-top: -20px;
    line-height: 41px;
    padding: 0 45px;
    background-color: #fff;
    font-size: 30px;
    vertical-align: bottom;
  }

  .desc {
    display: inline-block;
    margin: 25px 0;
  }
}
</style>
