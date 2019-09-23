<template>
  <div id="app">
<!--    <zhu-ye></zhu-ye>-->
<head-top></head-top>
    <router-view/>
  </div>
</template>

<script>
  import ZhuYe from './pages/ZhuYe'
  // import NeiRong from './components/NeiRong'
  import HeadTop from './components/HeadTop'

export default {
  name: 'App',
  components:{
    ZhuYe,
    HeadTop
    // NeiRong
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #2c3e50;
  position: relative;

}
body{
  margin: 0;
  padding: 0;
}
.allleft{
  padding-left: 30px;
  height: 100%;
  line-height: 42px;
  color: #333;
  font-size: 15px;
  background: url(https://shark2.douyucdn.cn/front-publish/m-douyu-v3-master/assets/images/icon-live_88adc06.png) no-repeat;
  background-size: 20px 12px;
  background-position: 0;
  margin-left: 5px;
}
</style>
