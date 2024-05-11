<template>
  <div class="learning-route content">
    <!-- 板块上方的介绍 -->
    <top-block :title="msg.title" :desc="msg.desc"></top-block>
    <!-- 学车流程的icon图标 -->
    <div class="route-content flex">
      <route-icon :datas="item" v-for="(item, index) in datas" :key="index"></route-icon>
    </div>
  </div>
</template>

<script>
import TopBlock from '@/components/body/Tools/sectionDescription/TopBlock.vue'
import RouteIcon from '@/components/body/Tools/carLearningRoute/RouteIcon.vue'
export default {
  name: 'LearningRoute',
  data() {
    return {
      msg: {
        title: '学车流程',
        desc: '驾考宝典整合学车全流程，驾考宝典为用户提供全方位学车服务'
      },
      datas: [{
        title: '找驾校',
        desc: '口碑好的驾校',
        img: require('@/assets/images/icon/19.png'),
        bgimg: require('@/assets/images/icon/12.png')
      },
      {
        title: '科目一',
        desc: '驾驶员理论考试',
        img: require('@/assets/images/icon/20.png'),
        bgimg: require('@/assets/images/icon/13.png')
      },
      {
        title: '科目二',
        desc: '场地驾驶技能考试科目',
        img: require('@/assets/images/icon/21.png'),
        bgimg: require('@/assets/images/icon/14.png')
      },
      {
        title: '科目三',
        desc: '机动车驾驶人道路考试',
        img: require('@/assets/images/icon/22.png'),
        bgimg: require('@/assets/images/icon/15.png')
      },
      {
        title: '科目四',
        desc: '安全文明驾驶常识考试',
        img: require('@/assets/images/icon/23.png'),
        bgimg: require('@/assets/images/icon/16.png')
      },
      {
        title: '拿本',
        desc: '开心拿本，安全驾驶',
        img: require('@/assets/images/icon/24.png'),
        bgimg: require('@/assets/images/icon/17.png')
      }]
    }
  },
  components: {
    TopBlock,
    RouteIcon
  }
}
</script>

<style lang="less" scoped>
.learning-route {
  margin: 80px auto 0;

  .route-content {
    justify-content: space-between;
  }
}
</style>
