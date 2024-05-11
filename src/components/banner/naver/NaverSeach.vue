<template>
  <div class="naver-body">
    <div class="content flex">
      <!-- logo -->
      <div>
        <a href="javascript:;">
          <img :src="imgUrl" alt="logo">
        </a>
      </div>

      <div class="seach">
        <input type="text" placeholder="请输入关键字">
        <button>搜索</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NaverHeader',
  data() {
    return {
      imgUrl: require('@/assets/logo.png')
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  margin: 24px auto;
  justify-content: space-between;

  .seach {
    font-size: 0;
    input {
      font-size: 14px;
      height: 42px;
      padding: 0 10px;
      vertical-align: middle;
      border: 1px solid #ccc;
      border-right: 0;
      outline: none;
      width: 250px;
    }

    input:focus {
      border-color: #40a9ff;
    }

    button {
      height: 42px;
      width: 45px;
      font-size: 14px;
      vertical-align: middle;
      border: 1px solid #ccc;
      outline: none;
      cursor: pointer;
    }
  }
}
</style>
