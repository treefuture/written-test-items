<template>
  <!-- 第二板块儿具体流程描述 -->
  <div class="practice flex">
    <div class="flex item-img">
      <img :src="datas.img" :alt="datas.desc">
    </div>
    <div class="item-content">
      <h3 class="title">{{datas.title}}</h3>
      <span>{{datas.desc}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PracticeView',
  data() {
    return {
    }
  },
  props: ['datas']
}
</script>

<style lang="less" scoped>
.practice {
  width: 300px;
  line-height: 20px;
  margin: 0 0 20px;
  padding: 15px 0 15px 55px;
  background-color: #fafafa;

  .item-img {
    align-items: center;
    padding-right: 12px;
  }

  .item-content {
    padding: 15px 0;
    & > .title {
      font-weight: inherit;
      cursor: pointer;
    }

    & > .title:hover {
      color: #54c0f9;
    }

    & > span {
      color: #999;
    }
  }
}
</style>
