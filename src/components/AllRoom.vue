<template>
  <div>
    <div class="kong1"></div>
    <all-place></all-place>
    <div class="room" v-for="(name,ins) in arr1">
      <div class="top">
        <div class="left">
          <img class="icon" :src="name.icon">
          <span class="tabname">
         {{ name.tabName }}
       </span>
        </div>
        <div class="left2">
          <div>
            <div>
              {{ name.tabName }}
            </div>
          </div>
        </div>
        <div class="icon1">
          更多
        </div>
      </div>
      <div class="cont">
        <div class="roomlink" v-for="img in name.list">
          <div class="lost">
            <div class="roompic">
              <img :src="img.roomSrc">
            </div>
            <div class="popinf">
              <i class="user"></i>
              <span class="popname">
               {{ img.nickname }}
             </span>
            </div>
            <div class="fire">
              <i class="fireicon"></i>
              <span class="firestr"> {{ img.hn }} </span>
            </div>
          </div>
          <div class="info"> {{ img.roomName }}</div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  import axios from "axios"
  import allPlace from "./allPlace"

  export default {
    name: "",
    data() {
      return {
        arr1: []
      }
    },
    methods: {
      getRoom() {
        var that = this;
        axios.get("/douyu/api/home/mix").then(function (val) {
          // console.log(val);
          that.arr1 = val.data.data
          console.log(that.arr1[0].tabName)
        }).catch((function (err) {
          console.log(err)
        }))
      }

    },
    mounted() {
      this.getRoom();
    },
    components: {
      allPlace
    }

  }
</script>

<style scoped>
  div, span {
    display: inline-block;
  }

  .icon {
    width: 18px;

  }

  .kong1 {
    height: 90px;
  }

  .room {
    width: 100vw;
    margin-top: 5px;
    /*border: 1px solid black;*/
    box-sizing: border-box;
  }

  .top .tabname {
    font-size: 15px;
    line-height: 15px;
    margin-left: 8px;
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 2px;
  }

  .left {
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .left2 {
    text-align: left;
    width: 210px;
  }

  .left2 > div {
    float: left;
    box-sizing: border-box;
    padding: 10.5px 0 10.5px 10px;
    height: 100%;
  }

  .left2 > div > div {
    box-sizing: border-box;
    border: 1px solid #f70;
    border-radius: 10.5px;
    padding: 0 10px;
    height: 100%;
    line-height: 19px;
    font-size: 11px;
    color: #f70;
  }

  .icon1 {
    flex-shrink: 0;
    margin-left: 5px;
    padding-right: 18px;
    height: 100%;
    line-height: 42px;
    font-size: 13px;
    color: #999;
    background: url(https://shark2.douyucdn.cn/front-publish/m-douyu-v3-master/assets/images/icon-more_6c08756.png) no-repeat;
    background-size: 13px 13px;
    background-position: 100%;
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
