<template>
  <div class="recommendation content">
    <top-block :title="msg.title"></top-block>
    <div class="grid">
      <!-- 驾校推荐 -->
      <genera-lization :datas="item" v-for="(item, index) in datas" :key="index"></genera-lization>
    </div>

    <el-button plain>查看更多</el-button>
  </div>
</template>

<script>
import TopBlock from '@/components/body/Tools/sectionDescription/TopBlock.vue'
import GeneraLization from '@/components/body/Tools/generaLization/GeneraLization.vue'
export default {
  name: 'RecommendationView',
  data() {
    return {
      msg: {
        title: '驾校推荐'
      },
      datas: [{
        title: '龙泉驾校',
        star: 4.5,
        tags: ['口碑好', '规模大', '拿本快', '包接送'],
        price: 3480,
        student: {
          avatar: require('@/assets/images/temporary/05.png'),
          evaluate: '服务态度：好很好非常好 学车体验：好很好非常好 通过率：好很好非常好 规范收费：好很好非常好'
        }
      },
      {
        title: '公交驾校',
        star: 4.5,
        tags: ['口碑好', '规模大', '拿本快', '包接送'],
        price: 4900,
        student: {
          avatar: require('@/assets/images/temporary/05.png'),
          evaluate: '非常好 一次过 教练很用心'
        }
      },
      {
        title: '金菱驾校',
        star: 4.5,
        tags: ['口碑好', '规模大', '拿本快', '包接送'],
        price: 3980,
        student: {
          avatar: require('@/assets/images/temporary/05.png'),
          evaluate: '一人一车，教练挺专业的，各个点位准确，通过率高'
        }
      },
      {
        title: '嘉安驾校',
        star: 4.5,
        tags: ['口碑好', '规模大', '拿本快', '包接送'],
        price: 4900,
        student: {
          avatar: require('@/assets/images/temporary/05.png'),
          evaluate: '。。。。。。。。'
        }
      }]
    }
  },
  components: {
    TopBlock,
    GeneraLization
  }
}
</script>

<style lang="less" scoped>
.recommendation {
  margin: 50px auto 0;

  .grid {
    display: grid;
    margin-top: -30px;
    grid-template-columns: repeat(2, 1fr);
    justify-content: end;
  }

  .el-button {
    display: block;
    margin: 35px auto 0;
    width: 220px;
    height: 45px;
  }
}
</style>
