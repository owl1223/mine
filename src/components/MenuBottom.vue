<template>
  <div class="bottom">
    <div class="bottominfo">
      <div class="returnTop">
        <i></i>
        <span> <a href="#"> 返回顶部 </a> </span>
      </div>
      <div class="updata">
        下载客户端
      </div>
      <div class="compinfo">
        <p>
          热门主播：
          <a>乔碧萝殿下</a>
          <a>Mix晴子</a>
        </p>
        <p>客服热线：027-87750710</p>
        <p>武汉斗鱼网络科技有限公司</p>
        <p>湖北省武汉市东湖开发区光谷软件园F4栋8楼</p>
        <p>版权所有 © www.douyu.com 鄂ICP备15011961号-1</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MenuBottom"
  }
</script>

<style scoped>


  .bottom {
    position: relative;
    bottom: 0;
  }

  .returnTop {
    width: 100vw;
    height: 56px;
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .returnTop i {
    display: inline-block;
    margin-right: 5px;
    width: 15px;
    height: 16px;
    background: url(https://shark2.douyucdn.cn/front-publish/m-douyu-v3-master/assets/images/icon-v2_ed53f03.png) -190px 0 no-repeat;
    background-size: 245px 20px;
  }

  .returnTop span {
    font-size: 13px;
  }

  .updata {
    width: 319px;
    height: 45px;
    margin: 0 auto 20px;
    text-align: center;
    background: #ff7700;
    line-height: 45px;
    border-radius: 4px;
    color: white;
  }

  .compinfo {
    width: 100vw;
    padding-bottom: 70px;
  }

  .compinfo p {
    width: 100vw;
    text-align: center;
    font-size: 12px;
    color: #a2a2a2;
    margin: 0;
  }

  .compinfo p a {
    color: #ff6600;
  }

  a {
    text-decoration: none;
    color: #a2a2a2;
  }


</style>
