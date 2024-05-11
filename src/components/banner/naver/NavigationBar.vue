<template>
  <div class="navigation">
    <ul class="nav content flex">
      <li v-for="(item, index) in data" :key="index" :class="{active: item.title === '首页'}">
        {{ item.title }}
        <template v-if="item.children">
          <i class="child"></i>
          <ul class="sub-nav">
            <li v-for="(subItem, subIndex) in item.children" :key="subIndex">{{ subItem.title }}</li>
          </ul>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      data: [{
        title: '首页'
      },
      {
        title: '模拟考试',
        children: [{
          title: '科目一'
        },
        {
          title: '科目二'
        },
        {
          title: '科目三'
        },
        {
          title: '科目四'
        }]
      },
      {
        title: '找驾校',
        children: [{
          title: '找驾校'
        },
        {
          title: '找教练'
        },
        {
          title: '找陪练'
        }]
      },
      {
        title: '驾考圈'
      },
      {
        title: '交通标识'
      },
      {
        title: '软件下载'
      },
      {
        title: '驾考宝典企业版'
      },
      {
        title: '智慧驾校'
      },
      {
        title: '买新车',
        children: [{
          title: '买车网'
        },
        {
          title: '平行之家'
        }]
      },
      {
        title: '二手车'
      }]
    }
  }
}
</script>

<style lang="less" scoped>
.navigation {
  background-color: #37b5f8;
  color: #fff;
  .nav {
    height: 50px;
    line-height: 50px;
    justify-content: start;

    & > li {
      position: relative;
      cursor: pointer;
      padding: 0 25px;

      ul {
        position: absolute;
        left: 0;
        width: 100%;
        color: black;
        padding: 0 12px;
        text-align: center;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
        display: none;
        z-index: 99;
        background: white;

        li {
          height: 40px;
          line-height: 40px;
          font-size: 14px;
          border-bottom: 1px solid #ebe9e9;
        }

        li:hover {
          color: #54c0f9;
        }

        li:last-child {
          border-bottom: none;
        }
      }
    }

    .active {
      background-color: #258fc7;
    }

    & > li:not(.active):hover {
      background-color: #54c0f9;
    }

    & > li:hover > ul {
      display: block;
    }

    .child::after {
      display: inline-block;
      vertical-align: middle;
      margin-left: 6px;
      margin-top: 5px;
      border: 5px solid transparent;
      border-top: 5px solid #fff;
      content: '';
    }
  }
}
</style>
