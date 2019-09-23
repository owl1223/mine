<template>
  <div class="allkind">
    <ul class="kindinfo">
      <li v-for="info in arr4">
        <div class="infocont">
          <div class="iconinfo">
            <img :src="info.icon">
          </div>
          <div class="str1"> {{ info.cate2Name }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from "axios"

  export default {
    name: "FenLei",
    data() {
      return {
        isShow: true,
        arr4: [],
      }
    },
    methods: {
      getkind() {
        var that = this;
        axios.get("/douyu/api/cate/list").then(function (val) {
          // console.log(val);
          that.arr4 = val.data.data.cate2Info
          console.log(that.arr4)

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

  .allkind {
    width: 100Vw;
    height: 300px;
    overflow: scroll;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  .kindinfo li {
    width: 33vw;

    display: inline-block;
    box-sizing: border-box;
    border-right: 1px dashed #ddd;
    border-bottom: 1px dashed #ddd;
    align-items: center;
    position: relative;
  }

  .infocont {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
  }

  .iconinfo {
    width: 61px;
    height: 61px;
    border-radius: 50%;
    margin: 15px auto 2px auto;

  }

  .kindinfo li img {
    width: 100%;
    border-radius: 50%;
  }

  .str1 {
    height: 14px;
    line-height: 14px;
    font-size: 12px;
    margin: 5px 0;
  }
</style>
