<template>
  <!-- 中间的banner广告 -->
  <div class="banner content">
    <el-link :underline="false">
      <el-image style="width: 100%; height: 100%" :src="url" fit="fit"></el-image>
    </el-link>
  </div>
</template>

<script>
export default {
  name: 'BannerView',
  props: ['url']
}
</script>

<style lang="less" scoped>
.banner {
  margin-top: 45px;
}
</style>
