<template>
  <!-- 侧边栏 -->
  <ul class="sidebar">
    <li v-for="item in data" :key="item.title" :class="{'scanCode': item.modalbox}">
      <!-- 小图标 -->
      <img :src="item.img" :alt="`{{ item.title }}`" v-if="item.small_icons" :class="{'small-icons': item.small_icons}">
      <!-- 标题 -->
      {{ item.title }}
      <!-- 弹出层图片 -->
      <img :src="item.img" :alt="`{{ item.title }}`" v-if="!item.small_icons" :class="{'show': item.show}">
      <!-- 描述 -->
      <span v-if="item.desc">{{ item.desc }}</span>
      <!-- 弹出层 -->
      <div class="menu" v-if="item.children">
        <ul>
          <li v-for="child in item.children" :key="child.title">
            <span>{{ child.title }}</span>
            <div v-if="child.desc">{{ child.desc }}</div>
            <template v-if="child.link">
              <br>
              <a href="javascript:void(0)">{{ child.link }}</a>
            </template>
          </li>
        </ul>
        <!-- 小三角 -->
        <div class="pointer"></div>
      </div>
    </li>
    <li @click="toTop"><img src="@/assets/images/12.png" style="width: 18px;">&nbsp;&nbsp;回到顶部</li>
  </ul>
</template>

<script>
export default {
  name: 'SideBarView',
  data() {
    return {
      data: [
        {
          title: '扫码下载',
          img: require('@/assets/images/qr/01.png'),
          desc: 'app随时练习题库'
        },
        {
          title: '关注微信',
          img: require('@/assets/images/sidebar/02.png'),
          modalbox: true,
          show: true
        },
        {
          title: '关注微博',
          img: require('@/assets/images/sidebar/01.png'),
          modalbox: true,
          show: true
        },
        {
          title: '意见反馈',
          img: require('@/assets/images/11.png'),
          small_icons: true,
          modalbox: true,
          children: [
            {
              title: '用户反馈',
              desc: '400-056-1617(电话)'
            },
            {
              title: '教练反馈',
              desc: 'jiaolian_service@mucang.cn(邮箱)'
            },
            {
              title: '驾校反馈',
              desc: 'jiaxiao_service@mucang.cn(邮箱)'
            },
            {
              title: '学员反馈',
              link: '提交学员反馈'
            }
          ]
        }
      ]
    }
  },
  methods: {
    // 滚动视口顶部
    toTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth' // 平滑滚动
      })
    }
  }
}
</script>

<style lang="less" scoped>
.sidebar {
  position: fixed;
  text-align: center;
  right: 0;
  top: 60vh;
  transform: translateY(-50%);
  width: 120px;
  color: #999;
  line-height: 25px;
  background: #fff;
  border: 1px solid #e6e6e6;
  z-index: 99;

  li {
    vertical-align: middle;
    font-size: 14px;
    border-bottom: 1px solid #e6e6e6;
  }

  li:not(:first-child) {
    line-height: 30px;
    cursor: pointer;
  }

  li:first-child {
    padding: 0 10px;
  }

  li:last-child {
    border-bottom: none;
  }

  .small-icons {
    width: 18px;
  }

  .scanCode {
    position: relative;

    .show {
      position: absolute;
      width: 150%;
      right: 100%;
      bottom: -120%;
      display: none;
    }

    .menu {
      position: absolute;
      // width: 150%;
      right: 105%;
      bottom: -120%;
      width: 200px;
      border: 1px solid #eee;
      background-color: #fff;
      padding: 0 15px;
      line-height: unset;
      cursor: default;
      display: none;

      ul {
        li {
          text-align: left;
          padding: 8px 0;
          line-height: 20px;
          cursor: default;

          span {
            font-size: 16px;
            color: #000;
          }

          div {
            font-size: 12px;
            color: #999;
            line-height: unset;
          }

          a {
            font-size: 12px;
            text-decoration: none;
          }
        }
      }

      .pointer {
        position: absolute;
        height: 0;
        width: 0;
        bottom: 15%;
        right: -10px;
        border: 5px solid transparent;
        border-left: 5px solid #e6e6e6;
      }
    }
  }

  .scanCode:hover .show {
    display: block;
  }

  .scanCode:hover .menu {
    display: block;
  }

  span {
    font-size: 12px;
  }

  img {
    width: 100%;
    vertical-align: middle;
  }
}
</style>
