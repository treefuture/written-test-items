// 回到顶部
function toTop() {
  // const timer = setInterval(function () {
  //   const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  //   const speed = Math.floor(-scrollTop / 10)
  //   document.documentElement.scrollTop = document.body.scrollTop = scrollTop + speed
  //   if (scrollTop === 0) {
  //     clearInterval(timer)
  //   }
  // }, 30)

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth' // 平滑滚动
  })
}
