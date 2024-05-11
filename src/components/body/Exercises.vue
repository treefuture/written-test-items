<template>
  <!-- 第二板块 -->
  <div class="exercises content">
    <top-block :title="title"></top-block>
    <!-- 学车流程 -->
    <div class="flex">
      <!-- 流程具体内容由其他组件完成 -->
      <div class="left">
        <practice :datas=datas[0]></practice>
        <practice :datas=datas[1]></practice>
      </div>
      <!-- 中间不同的内容 -->
      <div class="center">
        <div class="shadow">
          <img :src="datas[2].img" :alt="datas[2].desc">
          <span class="title">{{datas[2].title}}</span><br>
          <p>{{datas[2].desc}}</p>
          <el-button type="primary">{{datas[2].btn}}</el-button>
        </div>
      </div>
      <!-- 流程具体内容由其他组件完成 -->
      <div class="right">
        <practice :datas=datas[3]></practice>
        <practice :datas=datas[4]></practice>
      </div>
    </div>
  </div>

</template>

<script>
import TopBlock from '@/components/body/Tools/sectionDescription/TopBlock.vue'
import Practice from '@/components/body/Tools/practice/Practice.vue'
export default {
  name: 'ExercisesView',
  data() {
    return {
      title: '2024出租车资格证理论考试',
      datas: [{
        title: '顺序练习',
        desc: '按照顺序练习做题',
        img: require('@/assets/images/icon/06.png')
      },
      {
        title: '随机练习',
        desc: '按随机顺序做题',
        img: require('@/assets/images/icon/07.png')
      },
      {
        title: '客运资格证',
        desc: '资格证,又称资格证理论考试,是机动车资格证考核的一部分',
        img: require('@/assets/images/icon/05.png'),
        btn: '模拟考试'
      },
      {
        title: '专项练习',
        desc: '分门别类重点突破',
        img: require('@/assets/images/icon/08.png')
      },
      {
        title: '难题攻克',
        desc: '准确把握考试难点',
        img: require('@/assets/images/icon/18.png')
      }]
    }
  },
  components: {
    TopBlock,
    Practice
  }
}
</script>

<style lang="less" scoped>
.exercises {
  margin: 80px auto 0;

  & > .flex {
    justify-content: space-around;
  }

  .center {
    .shadow {
      width: 540px;
      height: 220px;
      background-color: #fafafa;
      margin: 0 20px;
      text-align: center;
      padding-top: 50px;

      & > .title {
        vertical-align: top;
        font-size: 20px;
        padding: 0 12px;
        cursor: pointer;
      }

      & > .title:hover {
        color: #54c0f9;
      }

      & > p {
        color: #999;
      }

      .el-button {
        width: 195px;
        font-size: 18px;
        margin: 20px auto;
      }
    }
  }
}
</style>
