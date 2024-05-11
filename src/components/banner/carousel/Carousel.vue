<template>
  <div class="carousel-view">
    <!-- 轮播图 -->
    <div class="carousel">
      <el-carousel trigger="click" height="380px">
        <el-carousel-item v-for="item in items" :key="item">
          <img class="carousel-img" :src="item" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 预留导航位置 -->
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CarouselView',
  data() {
    return {
      items: [require('@/assets/images/nav/home_banner_01.png'), require('@/assets/images/nav/home_banner_02.png'), require('@/assets/images/nav/home_banner_03.jpg'), require('@/assets/images/nav/home_banner_04.jpeg')] // 4 items in carousel
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  height: 0;
  margin: 0 auto;
}

.carousel {
  margin: 0 auto;
  text-align: center;
}
.el-carousel {
  height: 380px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.carousel-img {
  max-width: 1920px;
  width: 1536px;
  height: 380px;
}
</style>
