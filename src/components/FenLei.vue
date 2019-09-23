<template>

  <div class="fenlei" v-if="isShow">
    <div class="head">
      <span class="close" @click="isShow=!isShow">  </span>
      <div class="str">选择分类</div>
    </div>
    <div class="kind">
      <div class="kindNav">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="全部" name="first">
            <div class="qb_div" v-for="(listen,index) in arr3.cate2Info">
              <div class="gameimg">
                <img :src="listen.icon" alt="">
              </div>
              <p class="qb_name">{{listen.cate2Name}}</p>
              <!--{{listen.icon}}-->
            </div>
          </el-tab-pane>
          <el-tab-pane :label="lists.cate1Name" v-for="(lists,index ) in arr3.cate1Info" class="clear">
            <div class="classification" v-for="(listed,inde) in arr3.cate2Info" v-if="lists.cate1Id == listed.cate1Id">
              <div class="icon">
                <img :src="listed.icon" alt="">
              </div>
              <p class="qb_name">{{listed.cate2Name}}</p>
            </div>
          </el-tab-pane>
        </el-tabs>

      </div>
    </div>

  </div>
</template>

<script>
  import axios from "axios"
  import AllKind from "./AllKind"
  import WangYou from "./WangYou"

  export default {
    name: "FenLei",
    data() {
      return {
        isShow: true,
        arr3: [],
        activeName: 'first'
      }
    },
    components: {
      AllKind,
      WangYou
    },
    methods: {
      getkind() {
        var that = this;
        axios.get("/douyu/api/cate/list").then(function (val) {
          // console.log(val);
          that.arr3 = val.data.data
          console.log(that.arr3.cate1Info)

        }).catch(function (err) {
          console.log(err);
        })
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    mounted() {
      this.getkind()
    }

  }
</script>

<style scoped>
  .fenlei {
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, .5);
    position: fixed;
    z-index: 999;
    overflow: scroll;
  }

  .head {
    position: relative;
    width: 100%;
    height: 54px;
    background: #fff
  }

  .str {
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 54px;
    font-size: 16px;
    color: #3f3f3f;
  }

  .close {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 26px;
    height: 26px;
    background: url(https://shark2.douyucdn.cn/front-publish/m-douyu-v3-master/assets/images/close_8b63a1d.png) no-repeat;
    background-size: 16px 16px;
    background-position: 50%;
    z-index: 777;
  }

  .kind {
    /*overflow: scroll;*/
    position: relative;
    background-color: #f4f4f4;
    height: 390px;
  }

  .kindNav {
    position: relative;
    /*height: 375px;*/

  }

  #pane-first.el-tab-pane {
    background: #f4f4f4;
    height: 360px;
    overflow: scroll;
  }

  .el-tabs__content {
    width: 300px;
    overflow: scroll;
  }

  .clear {
    height: 360px;
    overflow: scroll;

  }

  .classification {
    width: 33.33vw;
    height: 33vw;
    display: inline-block;
    /*margin: 0 1px;*/
    box-sizing: border-box;
    border-right: 1px dashed #ddd;
    border-bottom: 1px dashed #ddd;


  }

  .classification img {
    width: 100%;
    border-radius: 50%;
  }

  .icon {
    width: 61px;
    height: 61px;
    border-radius: 50%;
    position: relative;
    top: 25%;
    left: 25%;
  }

  p {
    margin: 0;
    font-size: 5px;
    display: inline-block;
    height: 15px;
    width: 100%;
    text-align: center;
    position: relative;
    top: 30px;
  }

</style>
