<template>
  <!-- 学车流程的icon图标 -->
  <div class="route-icon">
    <el-link :underline="false" class="route-icon-link">
      <div class="route-icon-img" :style="{ backgroundImage: `url(${datas.bgimg})` }">
        <el-image :src="datas.img" fit="fit" alt="route-icon"></el-image>
      </div>
      <h3>{{ datas.title }}</h3>
      <span>{{ datas.desc }}</span>
    </el-link>
  </div>
</template>

<script>
export default {
  name: 'RouteIcon',
  props: ['datas']
}
</script>

<style lang="less" scoped>
.route-icon {
  text-align: center;

  .route-icon-link :hover .el-image {
    position: relative;
    z-index: 5;
    display: block;
  }

  .route-icon-img {
    width: 120px;
    height: 120px;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-position: center 0px;

    .el-image {
      display: none;
    }
  }

  h3 {
    margin: 15px 0 8px;
    font-size: 24px;
    font-weight: initial;
  }
}
</style>
