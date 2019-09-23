<template>
  <div>
    <nav>
      <div class="top1">
        <span class="img"></span>
        <span class="search">
          <div>搜索</div>
        </span>
        <span class="span1">
          充值
        </span>
        <span class="span2">
          打开APP
        </span>
      </div>
      <div class="top2">
        <span @click="show()">
          <router-link to="/" :class="{active:number==0}">
              推荐
          </router-link>
        </span>
        <span v-for="(nam,num) in arr" @click="number=num+1">
          <router-link :to="nam.shortName" :class="{active:number==num+1}">
             {{ nam.name }}
          </router-link>
        </span>
        <span class="kong"></span>
        <p class="icon" @click="isShow1 = !isShow1">
        </p>
      </div>
    </nav>
    <fen-lei v-if="!isShow1"></fen-lei>
  </div>
</template>

<script>
  import axios from "axios"
  import FenLei from "./FenLei"
  import '../assets/jquery'
  import $ from '../assets/jquery'

  export default {
    name: "HeadTop",
    data() {
      return {
        arr: [],
        isShow1: true,
        number: 0,
        bold: true
      }
    },
    components: {
      FenLei
    },
    methods: {
      show() {
        console.log(123)
        this.number = 0
      },
      getMenu() {
        var that = this;
        axios.get("/douyu/api/cate/recList?cid=&ct=").then(function (val) {
          // console.log(val);
          that.arr = val.data.data
          console.log(that.arr)

        }).catch(function (err) {
          console.log(err);
        })
      },
    },
    mounted() {
      this.getMenu();
    }
  }

</script>

<style scoped>
  nav {
    /*width: 100%;*/
    position: fixed;
    z-index: 111;
  }

  .top1 {
    width: 100%;
    height: 54px;
    background-color: #fff;
    overflow: hidden;
    display: flex;
    justify-content: space-around;
  }

  span {
    display: inline-block;
  }

  .top1 .img {
    margin-left: 10px;
    margin-top: 10px;
    width: 76px;
    height: 34px;
    background: url("https://shark2.douyucdn.cn/front-publish/m-douyu-v3-master/assets/images/logo_864f3ef.png");
    background-size: 100% 100%;
  }

  .search {
    width: 70px;
    height: 28px;
    border-radius: 14px;
    background: #f2f2f2;
    margin-left: 10px;
    background-image: url(https://shark2.douyucdn.cn/front-publish/m-douyu-v3-master/assets/images/search_0f4cda6.png);
    background-size: 16px 16px;
    background-position: 10px 6px;
    background-repeat: no-repeat;
    padding-left: 32.5px;
    font-size: 14px;
    color: #bbb;
    line-height: 28px;
    margin-top: 12px;
  }

  .span1 {
    background: #fff;
    border: 1px solid #eee;
    border-radius: 14px;
    color: #666;
    letter-spacing: .92px;
    font-size: 12px;
    margin-left: 8px;
    width: 49px;
    height: 28px;
    text-align: center;
    line-height: 28px;
    margin-top: 12px;
  }

  .span2 {
    background: #ff5d23;
    border-radius: 14px;
    color: #fff;
    letter-spacing: .92px;
    margin-left: 8px;
    width: 74px;
    height: 28px;
    text-align: center;
    line-height: 28px;
    font-size: 12px;
    margin-top: 12px;
  }

  .top2 {
    overflow-Y: scroll;
    width: 100vw;
    height: 22px;
    position: relative;
    white-space: nowrap;

    background-color: #fff;
  }

  .top2 .icon {
    position: fixed;
    top: 25px;
    right: 0;
    z-index: 10;
    width: 40px;
    height: 39px;
    background: url(https://shark2.douyucdn.cn/front-publish/m-douyu-v3-master/assets/images/category_0148919.png) no-repeat;
    background-size: 100% 100%;
  }

  .top2 span {
    margin: 0 4px;
    font-size: 13px;
    /*font-weight: bold;*/

  }

  .top2 a {
    text-decoration: none;
    color: #000;
  }

  .top2 .kong {
    width: 20px;
  }

  .top2 span a.active {
    box-sizing: border-box;
    border-bottom: 2px solid #fca370;
    color: #fca370 !important;
  }
</style>
