<template>
  <div class="ranking-list content">
    <TopBlock :title="msg.title" :desc="msg.desc"></TopBlock>
    <div class="flex">
      <!-- 排行榜 -->
      <Ranking :datas="item" v-for="(item, index) in datas" :key="index"></Ranking>
    </div>
  </div>
</template>

<script>
import TopBlock from '@/components/body/Tools/sectionDescription/TopBlock.vue'
import Ranking from '@/components/body/Tools/ranking/Ranking.vue'
export default {
  name: 'RankingList',
  data() {
    return {
      msg: {
        title: '排行榜',
        desc: '口碑人气排行榜，助你轻松找驾校'
      },
      datas: [{
        listName: '综合排行榜',
        listData: [{
          name: '公交驾校',
          desc: '周新增学员：5082',
          address: '北京市北京市大兴区',
          img: require('@/assets/images/temporary/01.png'),
          recommendation: true
        },
        {
          name: '龙泉驾校',
          desc: '1163'
        },
        {
          name: '海淀驾校',
          desc: '1311'
        }, {
          name: '远大驾校',
          desc: '845'
        }, {
          name: '北方驾校',
          desc: '796'
        }, {
          name: '长建驾校',
          desc: '330'
        }, {
          name: '京都府驾校',
          desc: '503'
        }, {
          name: '远方驾校',
          desc: '275'
        }, {
          name: '盛华驾校',
          desc: '376'
        }, {
          name: '京城驾校',
          desc: '334'
        }]
      },
      {
        listName: '口碑排行榜',
        listData: [{
          name: '玉马摩托驾校',
          star: 5,
          address: '玉马摩托车考训场',
          img: require('@/assets/images/temporary/02.png'),
          recommendation: true
        },
        {
          name: '京典驾校通州分校',
          comment: '57',
          star: 5
        },
        {
          name: '广通驾校',
          comment: '204',
          star: 5
        }, {
          name: '海淀驾校',
          comment: '874',
          star: 4.5
        }, {
          name: '金菱驾校',
          comment: '152',
          star: 4.5
        }, {
          name: '公交驾校',
          comment: '2990',
          star: 4
        }, {
          name: '凯特驾校',
          comment: '195',
          star: 4
        }, {
          name: '丰顺驾校',
          comment: '107',
          star: 4
        }, {
          name: '远方驾校',
          comment: '266',
          star: 4
        }, {
          name: '远大驾校',
          comment: '613',
          star: 4
        }]
      },
      {
        listName: '教练排行榜',
        listData: [{
          coach: {
            name: '潘月波',
            img: require('@/assets/images/temporary/03.png'),
            student: '823'
          },
          comment: '204',
          desc: '5'
        }, {
          coach: {
            name: '魏教练',
            img: require('@/assets/images/temporary/04.png'),
            student: '61'
          },
          comment: '204',
          desc: '5'
        }, {
          coach: {
            name: '陈菊',
            img: require('@/assets/images/temporary/03.png'),
            student: '17647'
          },
          comment: '20',
          desc: '4.9'
        }, {
          coach: {
            name: '孙跃',
            img: require('@/assets/images/temporary/04.png'),
            student: '1296'
          },
          comment: '77',
          desc: '5'
        }, {
          coach: {
            name: '张勇',
            img: require('@/assets/images/temporary/03.png'),
            student: '1076'
          },
          comment: '201',
          desc: '4.9'
        }, {
          coach: {
            name: '王海洋',
            img: require('@/assets/images/temporary/04.png'),
            student: '39'
          },
          comment: '1',
          desc: '5'
        }]
      }]
    }
  },
  components: {
    TopBlock,
    Ranking
  }
}
</script>

<style lang="less" scoped>
.ranking-list {
  margin: 80px auto 0;

  & > .flex {
    justify-content: space-between;
  }
}
</style>
