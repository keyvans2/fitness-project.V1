<template>
  <div class="container indexCon">
    <recent-blogs/>
    <morabian/>
    <about/>
  </div>

</template>

<script>
  import recentBlogs from "../components/recentBlogs/recentBlogs";
  import About from "../components/about/about";
  import morabian from "../components/morabian/morabian";

  export default {
    data() {
      return {
        img: require('../assets/images/medicines.jpg'),
        img2: require('../assets/images/medicine2.jpg'),
        img3: require('../assets/images/medicine3.png'),
      }
    },
    components: {
      morabian,
      About,
      recentBlogs
    }
  }
</script>

<style lang="less">
  .indexCon {
    /*border: 1px solid red;*/
    height: auto;
    position: relative;


  }


  /*.test{*/
  /*  width: 500px;*/
  /*  height: 500px;*/
  /*  background-color: dodgerblue;*/
  /*}*/
  .tr {
    &::after {
      content: "";
      /*background: url(image.jpg);/*/
      opacity: 0.8;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: dodgerblue;
      z-index: -1;
    }
  }

</style>
