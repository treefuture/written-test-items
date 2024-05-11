<template>
  <div class="home">
    <!-- 顶部导航栏 -->
    <naver-top></naver-top>
    <!-- 搜索栏 -->
    <naver-seach></naver-seach>
    <!-- 二级导航栏 -->
    <navigation-bar></navigation-bar>
    <!-- 侧边栏 -->
    <side-bar-view></side-bar-view>
    <!-- 轮播图 -->
    <carousel>
      <!-- 导航边栏 -->
      <naver-side-bar></naver-side-bar>
    </carousel>
    <!-- 考试模拟 -->
    <exercises></exercises>
    <!-- 排行榜 -->
    <ranking-list></ranking-list>
    <!-- banner广告 -->
    <banner :url="banner.url"></banner>
    <!-- 推荐内容 -->
    <recommendation></recommendation>
    <!-- 学车流程 -->
    <learning-route></learning-route>
    <!-- 获得荣誉 -->
    <award-winning></award-winning>
    <!-- app下载 -->
    <app-download></app-download>
    <!-- 下载地址 -->
    <app-address></app-address>
    <!-- 底部信息栏 -->
    <footer-view></footer-view>
  </div>
</template>

<script>
import NaverTop from '@/components/banner/naver/NaverTop.vue'
import NaverSeach from '@/components/banner/naver/NaverSeach.vue'
import NavigationBar from '@/components/banner/naver/NavigationBar.vue'
import SideBarView from '@/components/sidebar/SideBarView.vue'
import Carousel from '@/components/banner/carousel/Carousel.vue'
import NaverSideBar from '@/components/banner/naver/NaverSideBar.vue'
import Exercises from '@/components/body/Exercises.vue'
import RankingList from '@/components/body/RankingList.vue'
import Banner from '@/components/body/Banner.vue'
import Recommendation from '@/components/body/Recommendation.vue'
import LearningRoute from '@/components/body/LearningRoute.vue'
import AwardWinning from '@/components/body/AwardWinning.vue'
import AppDownload from '@/components/body/AppDownload.vue'
import AppAddress from '@/components/body/AppAddress.vue'
import FooterView from '@/components/footer/Footer.vue'

export default {
  name: 'HomeView',
  data() {
    return {
      banner: {
        url: require('@/assets/images/banner.png')
      }
    }
  },
  components: {
    NaverTop,
    NaverSeach,
    NavigationBar,
    SideBarView,
    Carousel,
    NaverSideBar,
    Exercises,
    RankingList,
    Banner,
    Recommendation,
    LearningRoute,
    AwardWinning,
    AppDownload,
    AppAddress,
    FooterView
  },
  methods: {

  }
}
</script>
