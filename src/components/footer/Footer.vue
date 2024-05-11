<template>
  <!-- 声明区域 -->
  <div class="footer">
    <div class="content">
      <cooperation :datas="cooperation"></cooperation>
      <statement :datas="statement"></statement>
    </div>
  </div>
</template>

<script>
import Cooperation from '@/components/footer/Tools/Cooperation.vue'
import Statement from '@/components/footer/Tools/Statement.vue'
export default {
  name: 'FooterView',
  data() {
    return {
      cooperation: [{
        plate: ['友情链接', '热门驾校'],
        content: [{
          plate: '友情链接',
          tag: ['买车网', '驾考宝典手机版', '小米官网', '懂车帝', '上海房产网', '二手车交易市场', '货拉拉', '车主之家', '腾讯汽车', '新浪汽车', '太平洋汽车论坛', '平行之家', '驾校智能模拟器官网', '驾考宝典-WAP', '驾考宝典PaaS平台', '驾考宝典计时服务平台', '驾考宝典远程教育平台']
        }, {
          plate: '热门驾校',
          tag: ['天城驾校', '江宁恒通驾校', '畅通驾校', '立腾驾校', '快通驾校', '铜仁红色二八驾校', '易通驾校', '庆隆驾校', '永兴驾校', '安胜驾校', '深南驾校', '平凉驾校', '呈兴摩托车驾校', '合江安迅驾校', '安行驾校', '柏睿驾校', '创盈驾校', '诚信驾校', '交安驾校', '恒通驾校', '殷巷分校']
        }]
      }],
      statement: [{
        logo: require('@/assets/images/07.png'),
        img: require('@/assets/images/08.png')
      }, {
        tag: ['关于我们', '核心产品', '提交漏洞', '隐私政策', '服务条款', '用户协议', '投诉监管'],
        addr: '武汉市东湖高新区关山大道332号保利国际31层',
        tel: '400-056-1617（学员VIP热线）；400-056-1377（教练热线）；400-056-1600（驾校热线）',
        filing: [{
          img: require('@/assets/images/05.png')
        }, '鄂公网安备 42018502004455号', '鄂ICP备20007713号-3'],
        copyright: 'Copyright © 2024 武汉木仓科技股份有限公司版权所有',
        report: '违法和不良信息及算法推荐相关举报入口',
        reportChannels: '举报电话：18120408600，举报邮箱：ipr@mucang.cn'
      }]
    }
  },
  components: {
    Cooperation,
    Statement
  }
}
</script>

<style lang="less" scoped>
.footer {
  background: #222;
  margin-top: 60px;
  color: #fff;

  .content {
    padding: 30px 0;
  }
}
</style>
