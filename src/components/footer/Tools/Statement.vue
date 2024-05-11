<template>
  <!-- 底部声明区域内容 -->
  <div class="statement flex">
    <div class="flex-left flex">
      <el-link :underline="false">
        <el-image width="100%" :src="datas[0].logo"></el-image>
      </el-link>
      <el-link :underline="false">
        <el-image width="100%" :src="datas[0].img"></el-image>
      </el-link>
    </div>
    <div class="flex-right">
      <ul class="flex">
        <el-link :underline="false" class="about" v-for="item in datas[1].tag" :key="item">{{ item }}</el-link>
      </ul>
      <div class="info">
        <el-link type="info" :underline="false">地址：{{ datas[1].addr }}</el-link><br>
        <el-link type="info" :underline="false">电话：{{ datas[1].tel }}</el-link><br>
        <el-link type="info" :underline="false" class="filing">
          <el-image :src="datas[1].filing[0].img"></el-image>
          {{ datas[1].filing[1] }}&emsp;{{ datas[1].filing[2] }}
        </el-link><br>
        <el-link type="info" :underline="false">{{ datas[1].copyright }}</el-link><br>
        <el-link type="info" :underline="false">{{ datas[1].report }}</el-link><br>
        <el-link type="info" :underline="false">{{ datas[1].reportChannels }}</el-link><br>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatementView',
  props: ['datas']
}
</script>

<style lang="less" scoped>
.statement {
  margin-top: 30px;

  .flex-left {
    border-right: 1px solid #666;
    align-items: flex-start;

    .el-link {
      margin: 12px;
    }
    .el-link:last-child {
      margin-right: 50px;
    }
  }

  .flex-right {
    margin-left: 70px;
    .about {
      padding: 0 10px;
      color: #fff;
      border-right: 1px solid #666;
    }

    .about:hover {
      color: #59b6f5;
    }

    .about:first-child {
      padding-left: 0;
    }

    .about:last-child {
      border-right: none;
    }

    .info {
      font-size: 14px;
      color: #666;
      margin-top: 10px;
      .el-link {
        display: inline-block;
        margin: 3px 0;
      }
    }
  }
}
</style>
