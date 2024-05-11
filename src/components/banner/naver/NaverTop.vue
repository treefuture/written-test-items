<template>
  <div class="naver-top">
    <div class="content flex">
      <div class="left">
        <ul class="coordinate">
          <li>
            <i></i><span>全国</span>
            [切换]
          </li>
          <li class="exercises">
            题库：<span>小车</span>
            <ul class="sub-menu">
              <li v-for="item in data" :key="item.title" class="flex">
                <div class="title">{{ item.title }}：</div>
                <div class="flex">
                  <span v-for="child in item.children" :key="child">{{ child }}</span>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="right flex">
        <span>
          驾校入驻
        </span>
        <span>
          驾校后台
        </span>
        <a href="javascript:;">登录</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'naver-top',
  data() {
    return {
      data: [{
        title: '驾驶证',
        children: ['小车', '客车', '货车', '摩托车']
      },
      {
        title: '资格证',
        children: ['客运资格', '证货运资格', '证危险品资格', '证教练员资格', '证出租车资格证']
      }]
    }
  }
}
</script>

<style lang="less" scoped>
.naver-top {
  background: #fafafa;
  color: #999;
  height: 34px;
  padding: 7px 0;

  .flex {
    justify-content: space-between;
  }

  span {
    color: #37b5f8;
  }

  .left {
    .coordinate {
      display: flex;
      line-height: 20px;

      & > li {
        padding: 0 15px;
        cursor: pointer;
        i {
          display: inline-block;
          background: url('@/assets/images/13.png') no-repeat center center;
          width: 10px;
          height: 14px;
          margin-right: 5px;
        }
      }

      li:first-child {
        border-right: 1px solid #ccc;
        padding-left: 0;
      }

      .exercises {
        position: relative;
        .sub-menu {
          position: absolute;
          width: 420px;
          height: 140px;
          border: 1px solid #e9e9e9;
          background: #fff;
          padding: 10px;
          z-index: 2;
          cursor: default;
          display: none;

          & > .flex {
            justify-content: start;
          }

          li {
            border: none;
          }
          .title {
            margin: 10px;
            min-width: 75px;
          }

          div.flex {
            flex-wrap: wrap;
            justify-content: start;

            span {
              margin: 10px;
              color: #666;
              cursor: pointer;
            }

            span:hover {
              color: #37b5f8;
            }
          }
        }
      }

      .exercises:hover .sub-menu {
        display: block;
      }
    }
  }

  .right {
    justify-content: space-around;
    & > span {
      cursor: pointer;
    }

    & > * {
      padding: 0 15px;
    }

    a {
      text-decoration: none;
      color: inherit;
      padding-right: 0;
    }

    a:hover {
      color: #37b5f8;
    }
  }
}
</style>
