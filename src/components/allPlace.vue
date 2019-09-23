<template>
  <div class="allroom">
    <div class="alltop">
      <div class="allleft">全部直播</div>
      <div class="allright">
        当前 <span>88888</span>个直播
        <span></span>
      </div>
    </div>
    <div class="allcont">
      <div class="single" v-for="allimg in arr2">
        <div class="singleview">
          <div class="singleview2">
            <img :src="allimg.room_src">
          </div>
          <div class="people">
            <i class="user"></i>
            <span class="peoplename">
               {{ allimg.nickname }}
             </span>
          </div>
          <div class="fire1">
            <i class="fireicon1"></i>
            <span class="firestr1"> {{ allimg.hn | HN}} </span>
          </div>
        </div>
        <div class="info1"> {{ allimg.room_name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios"
  import live from "../assets/live1"

  export default {
    name: "",
    data() {
      return {
        arr2: []
      }
    },
    components: {
      live
    },
    methods: {
      getRoom() {
        // this.arr2 = []
        for (var i = 0; i <= live.data.length; i++) {
          if (i < 4) {
            // this.arr2 = [];
            this.arr2.push(live.data[i]);
          } else {
            console.log(this.arr2[0]);
            return
          }
        }
        // console.log(live.data.length)
        // this.arr1 = live;
        // console.log(this.arr2[0])
      }

    },
    mounted() {
      this.getRoom();
    }
  }
</script>

<style scoped>
  .allroom {
    width: 100vw;
  }

  .alltop {
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;
    box-sizing: border-box;
  }

  .allleft {
    padding-left: 30px;
    height: 100%;
    line-height: 42px;
    color: #333;
    font-size: 15px;
    background: url(https://shark2.douyucdn.cn/front-publish/m-douyu-v3-master/assets/images/icon-live_88adc06.png) no-repeat;
    background-size: 20px 12px;
    background-position: 0;
  }

  .allright {
    font-size: 13px;
    color: #999;
  }

  .allright span:first-child {
    color: #f70;
  }

  .allright span:last-child {
    display: inline-block;
    margin-left: 5px;
    width: 13px;
    height: 13px;
    background: url(https://shark2.douyucdn.cn/front-publish/m-douyu-v3-master/assets/images/icon-more_6c08756.png) no-repeat;
    background-size: 100% 100%
  }

  .allcont {
    padding: 5px;
    display: inline-block;
  }

  .single {
    box-sizing: border-box;
    padding: 0 5px 5px 0;
    width: 50%;
    float: left;
    overflow: hidden;
  }

  .singleview {
    position: relative;
    border-radius: 4px;
    width: 100%;
    height: 96px;
    overflow: hidden;
    background: url(https://shark2.douyucdn.cn/front-publish/m-douyu-v3-master/assets/images/list-item-def-thumb_b10bbe8.png) no-repeat;
    background-size: 100% 100%;
  }

  .singleview2 {
    border-radius: 4px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1;
    top: 0;
    left: 0;
  }

  .singleview2 img {
    border-radius: 4px;
    width: 100%;
  }

  .people {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding: 0 5px;
  }

  .people i {
    display: inline-block;
    width: 11px;
    height: 12px;
    margin-right: 3px;
    background: url(https://shark2.douyucdn.cn/front-publish/m-douyu-v3-master/assets/images/iconfont-wo_fdcada2.png) no-repeat;
    background-size: 100% 100%
  }

  .peoplename {
    display: inline-block;
    flex: 1;
    height: 18px;
    line-height: 18px;
    font-size: 10px;
    color: #fff;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
  }

  .fire1 {
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

  .fire1 i {
    display: inline-block;
    margin-right: 3px;
    width: 11px;
    height: 11px;
    background: url(https://shark2.douyucdn.cn/front-publish/m-douyu-v3-master/assets/images/hotnum_6b05e5d.png) no-repeat;
    background-size: 100% 100%;
  }

  .firestr1 {
    height: 100%;
    line-height: 18px;
    font-size: 10px;
    color: #fff;
  }

  .info1 {
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
