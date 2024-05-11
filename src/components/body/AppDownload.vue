<template>
  <!-- 驾考宝典x 教练宝典x 买车宝典x 下载二维码 -->
  <div class="app-download">
    <div class="content flex">
      <div v-for="(item, index) in datas" :style="{ backgroundImage: 'url(' + item.bgimg + ')' }" :key="index" class="item-count" :class="'flex-item' + (index + 1)">
        <span>{{ item.title }}</span>
        <el-image :src="item.img" width="150" height="150" fit="fit"></el-image>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-download',
  data() {
    return {
      datas: [{
        title: '教练宝典APP',
        bgimg: require('@/assets/images/app_01.png'),
        img: require('@/assets/images/qr/04.png')
      },
      {
        title: '驾考宝典APP',
        bgimg: require('@/assets/images/app_02.png'),
        img: require('@/assets/images/qr/01.png')
      },
      {
        title: '买车宝典APP',
        bgimg: require('@/assets/images/app_03.png'),
        img: require('@/assets/images/qr/03.png')
      }]
    }
  }
}
</script>

<style lang="less" scoped>
.app-download {
  background: #f5f5f5;
  overflow: hidden;

  .content {
    position: relative;
    height: 560px;
    align-items: self-end;
    justify-content: space-between;

    .item-count {
      position: relative;
      bottom: -50px;
      width: 300px;
      height: 500px;
      text-align: center;
      background-repeat: no-repeat;
      background-position: center bottom;
      font-size: 20px;
      transition: 0.5s;
    }

    .flex-item2 {
      position: relative;
      width: 430px;
      height: 540px;
      text-align: center;

      .el-image {
        position: absolute;
        width: 150px;
        top: 25%;
        left: 50%;
        z-index: 1;
        transform: translateX(-50%);
      }
    }

    .flex-item2::after {
      content: ' ';
      position: absolute;
      width: 100%;
      height: 75%;
      left: 0;
      top: 25px;
      background-color: rgba(255, 255, 255, 0.5);
      display: none;
    }

    .flex-item3 {
      width: 265px;
      height: 428px;
    }

    .el-image {
      transition: 0.5s;
      opacity: 0;
    }

    .item-count:hover .el-image {
      opacity: 1;
    }

    .item-count:hover {
      bottom: 0px;
    }

    .flex-item2:hover::after {
      display: block;
    }
  }
}
</style>
