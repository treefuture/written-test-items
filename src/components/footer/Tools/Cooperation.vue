<template>
  <!-- 底部合作伙伴,切换展示内容 -->
  <div class="cooperation">
    <ul class="flex plate">
      <li class="plate-item" :class="{active: index === 0}" v-for="(item,index) in datas[0].plate" :key="item" @mouseenter="switchClass(index)">{{ item }}</li>
    </ul>

    <ul class="flex link" :class="{active: index === 0}" v-for="(item,index) in datas[0].content" :key="item.plate">
      <el-link type="info" v-for="items in item.tag" :key="items">{{ items }}</el-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CooperationView',
  props: ['datas'],
  methods: {
    switchClass(index) {
      const doms = {
        plate_item: document.querySelectorAll('.plate-item'),
        link: document.querySelectorAll('.link')
      }

      for (let i = 0; i < doms.plate_item.length; i++) {
        if (i === index) {
          doms.plate_item[i].classList.add('active')
          doms.link[i].classList.add('active')
        } else {
          doms.plate_item[i].classList.remove('active')
          doms.link[i].classList.remove('active')
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.cooperation {
  .plate {
    margin-bottom: 15px;

    .plate-item {
      font-size: 16px;
      margin-left: 50px;
    }

    .plate-item:first-child {
      margin-left: 0;
    }
  }

  .plate {
    color: #666;
  }

  .active {
    color: #ffffff;
  }

  .link {
    flex-wrap: wrap;
    display: none;

    .el-link {
      font-size: 14px;
      margin: 10px 20px 10px 0;
    }
  }

  .link.active {
    display: flex;
  }
}
</style>
