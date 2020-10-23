<template>
  <div>
    <div class="outer" ref="container" id="container">
      <div class="inner" ref="inner" :style="checkSize">1</div>
      <div class="inner" ref="inner" :style="checkSize">2</div>
      <div class="inner" ref="inner" :style="checkSize">3</div>
      <div class="inner" ref="inner" :style="checkSize">4</div>
      <div class="inner" ref="inner" :style="checkSize">5</div>
      <div class="inner" ref="inner" :style="checkSize">6</div>
      <div class="inner" ref="inner" :style="checkSize">7</div>
      <div class="inner" ref="inner" :style="checkSize">8</div>
      <div class="inner" ref="inner" :style="checkSize">9</div>
      <div class="inner" ref="inner" :style="checkSize">10</div>
      <div class="inner" ref="inner" :style="checkSize">11</div>
      <div class="inner" ref="inner" :style="checkSize">12</div>
    </div>
    <button type="button" class="btn btn-primary btn-lg" @click="slider('next')">next</button>
    <button type="button" class="btn btn-primary btn-lg" @click="slider('prev')">left</button>
  </div>
</template>

<script>
export default {
  created() {},
  data() {
    return {
      container: "",
    };
  },
  computed: {
    checkSize() {
      if (process.browser) {
        if (screen.width <= 1366 && screen.width >= 1200) {
          return {
            width: 33 + "%",
            marginLeft: 0 + "!important",
          };
        }
      }
    },
  },
  mounted() {
    let t = this;
    if (process.browser) {
      window.addEventListener("resize", this.changedSize);
      this.container = t.$refs["container"].offsetWidth;
    }
  },
  methods: {
    changedSize() {
      this.container = this.$refs["container"].offsetWidth;
      container.scrollLeft -= this.container;
    },
    slider(val) {
      let container = this.$refs["container"];

      if (val === "next") {
        container.scrollLeft += this.$refs["container"].offsetWidth + 2;

        // container.scrollLeft += this.container;
      } else {
        container.scrollLeft -= this.$refs["container"].offsetWidth + 2;
      }
      // console.log(this.container);
    },
  },
};
</script>

<style lang="less">
@media only screen and (max-width: 940px) {
  // .inner {
  //   width: 50% !important;
  // }
}
.outer {
  width: 80%;
  height: 200px;
  margin: 0 auto;
  overflow-x: hidden;
  overflow-y: hidden;
  white-space: nowrap;
  scroll-behavior: smooth;
  padding: 0;
  background-color: dodgerblue;
  .inner {
    margin: 0 auto !important;
    display: inline-block;
    // width: 33%;
    height: 200px;
    background-color: red;
    box-shadow: 1px 1px 10px #999;
    // *display: inline; /* For IE7*/
    // *zoom: 1; /* For IE7*/
    // vertical-align: top;
    text-align: center;
  }
}
</style>