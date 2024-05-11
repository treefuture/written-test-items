<template>
  <div id="app">
    <template v-if="!this.$equipment()">
      <router-view />
    </template>
    <template v-else>
      <div class="not-support">
        <h1>非常抱歉<br>暂不支持<br>移动端访问</h1>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    // if (this.$equipment()) {
    //   window.addEventListener('load', function () {
    //     window.scrollTo(0, document.body.scrollHeight / 2)
    //   })
    // }
  }
}
</script>

<style lang="less" scoped>
.not-support {
  padding: 50vh 0;
  font-size: 2em;
  text-align: center;
  h1 {
    margin: auto;
    vertical-align: middle;
    background: linear-gradient(black 50%, transparent 50%) center center / 100vw 100vh fixed;
    // height: 100vh;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-stroke: 2px red;
  }
}
</style>
