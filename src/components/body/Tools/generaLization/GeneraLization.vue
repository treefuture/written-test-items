<template>
  <!-- 驾校推荐框架 -->
  <div class="genera-lization">
    <div class="item-top flex">
      <div class="flex-1">
        <h3>{{ datas.title }}</h3>
        <van-rate :value="datas.star" :size="16" color="#ffd21e" void-icon="star" void-color="#eee" /><br>
        <div>
          <span v-for="item in datas.tags" :key="item" class="tags">{{ item }}</span>
        </div>
      </div>
      <div class="flex-2">
        <p class="price">￥{{ datas.price }}</p>
      </div>
      <div>
        <el-button size="mini" plain>学车报名</el-button>
      </div>
    </div>
    <evaluate :datas="datas.student"></evaluate>
  </div>
</template>

<script>
import Evaluate from '@/components/body/Tools/generaLization/Evaluate.vue'
export default {
  name: 'GeneraLization',
  props: ['datas'],
  components: {
    Evaluate
  }
}
</script>

<style lang="less" scoped>
.genera-lization {
  width: 585px;
  margin: 30px 0 0 30px;
  padding: 40px 30px;
  border: 1px solid #e9e9e9;
  line-height: 35px;

  .flex-1 {
    border-right: 1px solid #e9e9e9;
    padding-right: 20px;

    & > h3 {
      font-weight: inherit;
      margin-right: 5px;
      display: inline-block;
      vertical-align: middle;
      font-size: 22px;
    }

    .van-rate {
      vertical-align: middle;
    }

    .tags {
      display: inline-block;
      background: url('@/assets/images/icon/11.png') left center no-repeat;
      padding-left: 20px;
      margin-left: 10px;
      font-size: 14px;
      line-height: 20px;
    }

    .tags:first-child {
      margin-left: 0px;
    }
  }

  .flex-2 {
    .price {
      width: 130px;
      line-height: 70px;
      border-left: 1px solid #e9e9e9;
      font-size: 30px;
      text-align: center;
      color: #ee4653;
    }
  }

  .el-button {
    margin-top: 20px;
  }
}
</style>
