<template>
  <!-- 驾校推荐中间的评论 -->
  <div class="evaluate flex">
    <div>
      <el-image :src="datas.avatar" fit="fit"></el-image>
    </div>
    <p>{{ datas.evaluate }}</p>
  </div>
</template>

<script>
export default {
  name: 'EvaluateView',
  props: ['datas']
}
</script>

<style lang="less" scoped>
.evaluate {
  height: 80px;
  margin-top: 30px;
  padding: 20px;
  background: #fafafa;
  color: #999;

  .el-image {
    width: 40px;
    height: 40px;
  }

  p {
    line-height: 20px;
    margin-left: 20px;
    font-size: 14px;
  }
}
</style>
