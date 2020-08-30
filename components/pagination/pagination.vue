<template>
  <div class="pagination mt-3">
    <a href="#" class="mt-1"><i class="fas fa-angle-double-left"></i></a>
    <ul>
      <li v-for=" (n , i) in 5" :key="i" @click="page=i">
        <span :class="{actPage:page===i}" >{{n}}</span>
      </li>

    </ul>
    <a href="#" class="ml-2 mt-1"><i class="fas fa-angle-double-right"></i></a>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        page: 1
      }
    }
  }
</script>

<style lang="less">
  .actPage {
    background-color: rgba(255, 0, 0, 0.733) !important;
  }


  .pagination {
    width: auto;
    height: auto;
    margin: 0 auto;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        float: right;
cursor: pointer;
        span {
          display: block;
          width: 30px;
          height: 30px;
          background-color: rgba(184, 216, 238, 0.541);
          margin-left: 10px;
          border-radius: 50%;
          text-align: center;
          padding: 2px;
        }
      }
    }

    a {
      font-family: font1;
      font-weight: bold;
      color: cyan;
    }

    // a:last-child {
    //   color: rgba(30, 143, 255, 0.062)!important;
    // }
  }
</style>