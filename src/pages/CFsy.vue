<template>
  <div>
    <div class="kong"></div>
    <div class="allleft">CF手游</div>
    <div class="cont">
      <div class="roomlink" v-for="img in arr">
        <div class="lost">
          <div class="roompic">
            <img :src="img.room_src">
          </div>
          <div class="popinf">
            <i class="user"></i>
            <span class="popname">
               {{ img.nickname }}
             </span>
          </div>
          <div class="fire">
            <i class="fireicon"></i>
            <span class="firestr"> {{ img.hn | HN}} </span>
          </div>
        </div>
        <div class="info"> {{ img.room_name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import CF from '../assets/CFSY'

  export default {
    name: "cfsy",
    components: {
      CF
    },
    data() {
      return {
        arr: []
      }
    },
    methods: {
      getCF() {
        var that = this;
        that.arr = CF.data
        console.log(that.arr)
      }
    },
    mounted() {
      this.getCF()
    }
  }
</script>

<style scoped>
  .kong {
    height: 80px;
  }

  .cont {
    padding: 5px;
  }

  .roomlink {
    box-sizing: border-box;
    padding: 0 5px 5px 0;
    width: 50%;
    float: left;
    overflow: hidden;
  }

  .lost {
    position: relative;
    border-radius: 4px;
    width: 100%;
    height: 96px;
    overflow: hidden;
    background: url(https://shark2.douyucdn.cn/front-publish/m-douyu-v3-master/assets/images/list-item-def-thumb_b10bbe8.png) no-repeat;
    background-size: 100% 100%;
  }

  .roompic {
    border-radius: 4px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1;
    /*position: absolute;*/
    top: 0;
    left: 0;
  }

  .roompic img {
    border-radius: 4px;
    width: 100%;
    /*height: 26vw;*/
  }

  .popinf {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding: 0 5px;
  }

  .popname {
    display: inline-block;
    flex: 1;
    height: 18px;
    line-height: 18px;
    font-size: 10px;
    color: #fff;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .popinf .user {
    display: inline-block;
    width: 11px;
    height: 12px;
    margin-right: 3px;
    background: url(https://shark2.douyucdn.cn/front-publish/m-douyu-v3-master/assets/images/iconfont-wo_fdcada2.png) no-repeat;
    background-size: 100% 100%
  }

  .fire {
    position: absolute;
    right: 0;
    top: 0;
    border-radius: 4px 4px 0 0;
    z-index: 5;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    box-sizing: border-box;
    padding-right: 5px;
    width: 100%;
    height: 18px;
    background: url(https://shark2.douyucdn.cn/front-publish/m-douyu-v3-master/assets/images/bg-shadow_e60f214.png) no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
  }

  .fire .fireicon {
    display: inline-block;
    margin-right: 3px;
    width: 11px;
    height: 11px;
    background: url(https://shark2.douyucdn.cn/front-publish/m-douyu-v3-master/assets/images/hotnum_6b05e5d.png) no-repeat;
    background-size: 100% 100%;
  }

  .fire .firestr {
    height: 100%;
    line-height: 18px;
    font-size: 10px;
    color: #fff;
  }

  .info {
    font-size: 12px;
    width: 100%;
    height: 27px;
    line-height: 27px;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
  }
</style>
