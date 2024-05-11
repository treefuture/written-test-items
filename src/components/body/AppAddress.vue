<template>
  <!-- 驾考宝典APP下载及微信小程序 -->
  <div class="app-address content flex">
    <div class="flex-left" :style="{ backgroundImage: `url(${datas[0].img})` }">
      <p>{{ datas[0].title }}</p>
      <span>{{ datas[0].desc }}</span>
    </div>
    <div class="flex-right" :style="{ backgroundImage: `url(${datas[1].img})` }">
      <p>{{ datas[1].title }}</p>
      <span>{{ datas[1].desc }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-address',
  data() {
    return {
      datas: [{
        title: '驾考宝典APP下载',
        desc: '考驾照 用宝典',
        img: require('@/assets/images/qr/01.png')
      },
      {
        title: '驾考宝典微信小程序',
        desc: '无需下载，驾考做题更方便！',
        img: require('@/assets/images/qr/02.jpg')
      }]
    }
  }
}
</script>

<style lang="less" scoped>
.app-address {
  .flex-left,
  .flex-right {
    margin: 50px 0 20px;
    padding: 40px 80px;
    width: 600px;
    background-repeat: no-repeat;
    background-size: 140px;
    background-position: right 80px center;

    & > p {
      font-size: 18px;
      margin-bottom: 8px;
    }

    & > span {
      color: #999;
    }
  }

  .flex-left {
    border-right: 1px solid #e9e9e9;
  }
}
</style>
