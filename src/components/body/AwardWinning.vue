<template>
  <!-- 荣获奖项 -->
  <div class="award-winning content">
    <top-block :title="msg.title" :desc="msg.desc"></top-block>
    <el-link :underline="false">
      <el-image style="width: 100%; height: 100%" :src="url" fit="fit"></el-image>
    </el-link>
  </div>
</template>

<script>
import TopBlock from '@/components/body/Tools/sectionDescription/TopBlock.vue'
export default {
  name: 'AwardWinning',
  data() {
    return {
      msg: {
        title: '宝典荣誉',
        desc: '强大的驾考功能，优秀的用户体验，我们的愿景是学车无忧，轻松拿本'
      },
      url: require('@/assets/images/home-dynamic.png')
    }
  },
  components: { TopBlock }
}
</script>

<style lang="less" scoped>
.award-winning {
  margin: 80px auto 0;
}
</style>
