<template>
  <template>

    <div class="fenlei" v-if="isShow">
      <div class="head">
        <span class="close" @click="isShow=!isShow">  </span>
        <div class="str">选择分类</div>
      </div>
      <div class="kind">
        <div class="kindNav" >
          <el-tabs class="el-tabs1" v-model="activeName" @tab-click="handleClick" >
            <el-tab-pane label="全部" name="first"><all-kind></all-kind></el-tab-pane>
            <el-tab-pane label="网游竞技" name=""><wang-you></wang-you></el-tab-pane>
            <el-tab-pane label="单机热游" name="">45</el-tab-pane>
            <el-tab-pane label="手机休闲" name="">全456部</el-tab-pane>
            <el-tab-pane label="娱乐天地" name="">全7部</el-tab-pane>
            <el-tab-pane label="颜值" name="">全28部</el-tab-pane>
            <el-tab-pane label="科技教育" name="">全7534部</el-tab-pane>
            <el-tab-pane label="语音互动" name="">全54部</el-tab-pane>
            <el-tab-pane label="正能量" name="">全7878部</el-tab-pane>
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
      components:{
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
      z-index: 666;
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
      overflow: scroll;
      position: relative;
      background-color: #f4f4f4;
    }
    .kindNav{
      position: relative;

      /*width: 50px;*/
    }


  </style>

</template>

<script>
    export default {
        name: "FenLei1"
    }
</script>

<style scoped>

</style>
