<template>
  <!-- 驾校排行榜具体实现 -->
  <div class="ranking">
    <div class="rank flex">
      <h3>{{ datas.listName }}</h3>
      <span>更多</span>
    </div>
    <ul class="list">
      <li v-for="(item, index) in datas.listData" :key="index" class="flex">
        <!-- 前三名下标背景不同 -->
        <div :class="{'coach-index':item.coach}">
          <i :class=" {active: index <=2}">{{ index + 1 }}</i>
        </div>

        <!-- 驾校特殊样式 -->
        <div v-if="item.recommendation" class="flex">
          <div>
            <img :src="item.img" alt="" width="100">
          </div>
          <div class="item-info-content">
            <p>{{ item.name }}</p>
            <span v-if="item.desc">{{ item.desc }}</span>
            <van-rate v-if="item.star" :value="item.star" :size="16" color="#ffd21e" void-icon="star" void-color="#eee" />
            <br>
            <span>{{ item.address }}</span>
          </div>
        </div>

        <div v-else class="flex item-info" :class="{'coach-info':item.coach}">
          <!-- 驾校名称 -->
          <el-link v-if="item.name" :underline="false">{{ item.name }}</el-link>
          <!-- 明星教练特殊样式 -->
          <div v-if="item.coach" class="item-info-coach flex">
            <img :src="item.coach.img" :alt="item.coach.name">
            <div class="coach">
              <el-link :underline="false">{{item.coach.name}}</el-link><br>
              <span>学员：{{ item.coach.student }}</span>
            </div>
          </div>
          <!-- 描述信息 -->
          <span v-if="item.comment" class="item-info-comment">{{ item.comment }}点评</span>
          <van-rate v-if="item.star" :value="item.star" :size="16" color="#ffd21e" void-icon="star" void-color="#eee" />
          <span class="item-info-desc" v-if="item.desc">{{ item.desc }}人</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'RankingView',
  props: ['datas']
}
</script>

<style lang="less" scoped>
.ranking {
  width: 386px;
  border: 1px solid #e9e9e9;

  .rank {
    justify-content: space-between;
    padding: 10px 20px;
    border-bottom: 1px solid #e9e9e9;

    & > h3 {
      font-weight: inherit;
    }

    & > span {
      color: #999;
      cursor: pointer;
    }

    & > span:hover {
      color: #54c0f9;
    }
  }

  .list {
    margin: 5px 20px;

    .item-info {
      width: 100%;
      justify-content: space-between;

      .item-info-coach {
        & > img {
          width: 44px;
          height: 44px;
          border-radius: 50%;
        }

        .coach {
          margin-left: 10px;
          line-height: 22px;
          .el-link {
            font-size: 15px;
          }

          span {
            color: #999;
            font-size: 14px;
          }
        }
      }

      .el-link {
        font-size: 15px;
      }

      .item-info-desc {
        color: #f90;
      }

      .item-info-comment {
        color: #999;
      }

      .item-info-line {
        position: relative;
        width: 90px;
        background: url('@/assets/images/icon/10.png') center center no-repeat;

        div {
          position: relative;
          width: 90px;
          background: url('@/assets/images/icon/10.png') center center no-repeat;
        }
      }
    }

    .coach-index {
      padding: 20px 0;
    }

    .coach-info {
      align-items: center;
    }

    & > li {
      padding: 10px 0;

      i {
        font-style: normal;
        width: 18px;
        line-height: 18px;
        display: inline-block;
        margin-right: 10px;
        background-color: #999;
        border-radius: 50%;
        color: #fff;
        text-align: center;
      }

      .item-info-content {
        margin-left: 10px;
        line-height: 24px;

        & > p {
          font-size: 16px;
          cursor: pointer;
        }

        & > p:hover {
          color: #37b5f8;
        }

        & > span {
          color: #999;
        }
      }
    }

    .active {
      background-color: #37b5f8;
    }
  }
}
</style>
