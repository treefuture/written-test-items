<template>
  <div class="naverSideBar">
    <h2>{{ data.title }}</h2>
    <ul>
      <li class="flex" v-for="item in data.children" :key="item.title">
        <img :src="item.img" alt="item.title">
        <div>
          <span class="title">{{ item.title }}</span><br>
          <span>{{ item.desc }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NaverSideBar',
  data() {
    return {
      data: {
        title: '学车流程',
        children: [{
          img: require('@/assets/images/icon/01.png'),
          title: '顺序练习',
          desc: '2024新题库'
        },
        {
          img: require('@/assets/images/icon/02.png'),
          title: '模拟考试',
          desc: '精选视频，详解考点'
        }, {
          img: require('@/assets/images/icon/03.png'),
          title: '开车技巧',
          desc: '掌握开车技巧安全行驶'
        }, {
          img: require('@/assets/images/icon/04.png'),
          title: '新手买车',
          desc: '全面汽车资讯和价格'
        }]
      }
    }
  }
}
</script>

<style lang="less" scoped>
.naverSideBar {
  position: absolute;
  width: 280px;
  padding: 0 20px;
  top: -360px;
  z-index: 88;
  background-color: rgba(255, 255, 255, 0.9);

  h2 {
    font-weight: normal;
    text-align: center;
    padding: 8px 0;
    border-bottom: 1px solid #ccc;
  }

  ul > li {
    align-items: center;

    .title {
      font-size: 16px;
      color: #37b5f8;
      cursor: pointer;
    }

    img {
      height: 40px;
      background: white;
      border-radius: 50%;
    }

    div {
      padding: 14px 20px;
    }
  }
}
</style>
