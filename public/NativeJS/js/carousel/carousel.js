const doms = {
  rolling: document.querySelector('.rolling'),
  swiper: document.querySelectorAll('.swiper-slide')
}

// 复制第一个子元素添加到最后
// const first = doms.rolling.firstElementChild.cloneNode(true)
// doms.rolling.appendChild(first)

// 记录当前索引
let index = 0

// 移动函数
function move(index) {
  doms.rolling.style.transform = 'translateX(-' + (index * 100) + '%)'
}

// 删除添加active类名
function setCalss(index) {
  for (let i = 0, j = doms.swiper.length; i < j; i++) {
    doms.swiper[i].classList.remove('active')
    if (i === index) {
      doms.swiper[i].classList.add('active')
    }
  }
}

// 给每个小点添加点击事件
for (let i = 0, j = doms.swiper.length; i < j; i++) {
  doms.swiper[i].addEventListener('click', function () {
    // 判断滚动方向
    if (index > i) {
      move(i + 1)
    } else {
      move(i - 1)
    }
    // 将点击的小点索引赋值给index
    index = i
    // 禁用transition动画
    doms.rolling.style.transition = 'none'
    doms.rolling.offsetHeight // 触发重绘
    doms.rolling.style.transition = '0.5s'

    timer(3000)
    move(index)
    setCalss(index)
  })
}

// 定时器
function timer(time) {
  clearInterval(doms.tim)
  doms.tim = setInterval(() => {
    index++
    if (index >= doms.swiper.length) {
      doms.rolling.style.transition = 'none'
      index = 0
      doms.rolling.style.transform = 'translateX(-' + (index * 100) + '%)'
      doms.rolling.offsetHeight // 触发重绘
      doms.rolling.style.transition = '0.5s'
    }
    // 移动
    move(index)
    // 小圆点切换
    setCalss(index)
  }, time)
}

move(index)
setCalss(index)
timer(3000)
