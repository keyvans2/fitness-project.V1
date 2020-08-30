<template>
  <div class="recentBlogsContainer mt-4">
    <div class="row mt-2 m-0">
      <div class="col-lg-12 ">
        <div class="newBlogsTitle">
          <span class="fas fa-long-arrow-alt-left"></span>
          <!--            <i class="fas fa-dumbbell" style="position: absolute;top:3px;font-size:22px;"></i>-->
          <p class="font-weight-bold">مطالب جدید</p>
        </div>
      </div>
    </div>
    <div class="row mt-4 pt-5 pb-4">
      <div class="offset-xl-1 offset-md-0 "></div>
      <div
        class="col-xl-3 col-md-6 mb-sm-4 newBlogsItems ml-xl-1  ml-md-0"
        :style="{ backgroundImage: 'url(' + img3 + ')' }"
      >
        <p class="blogTitle text-light  text-right pt-2">
          چند نکته راجب قلب
        </p>
      </div>
      <div
        class="col-xl-3 col-md-6 mb-sm-4 newBlogsItems ml-xl-1 ml-md-0"
        :style="{ backgroundImage: 'url(' + img2 + ')' }"
      >
        <p class="blogTitle text-light text-right pt-2">
          نکاتی برای لاغری
        </p>
      </div>
      <div
        class="col-xl-3 col-md-6 mb-sm-4 newBlogsItems ml-xl-1 ml-md-0"
        :style="{ backgroundImage: 'url(' + img + ')' }"
      >
        <p class="blogTitle text-light text-right pt-2">
          ترفند هایی برای لاغر شدن
        </p>
        <!--                <img src="../assets/images/medicines.jpg" alt="" class="img-fluid">-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: require("../../assets/images/medicines.jpg"),
      img2: require("../../assets/images/medicine2.jpg"),
      img3: require("../../assets/images/medicine3.png")
    };
  }
};
</script>
<style lang="less">
.recentBlogsContainer {
  // border: 1px none rgba(255, 0, 0, 0.274);
  // border-top-style: solid;
}

.newBlogsItems {
  position: relative;
  height: 300px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  // box-shadow: initial;
  border-radius: 20px;
  border: 1px groove rgba(255, 101, 30, 0.267);
  box-shadow: 0 8px 6px -6px black;

  .blogTitle {
    position: absolute;
    display: block;
    right: 15px;
    bottom: -5px;
    /*top:100%;*/
    z-index: 990;
    font-size: 18px;
    font-family: font1;
    text-align: center;
    padding: 0;
  }

  &:before {
    content: "";
    position: absolute;
    right: 0;
    bottom: -1px;
    width: 100%;
    height: 50px;
    background-color: rgba(53, 26, 8, 0.637);
    border-radius: 0 0 20px 20px;
    // background: linear-gradient(rgba(255, 0, 0, 0.07), rgba(0, 0, 0, 0.54));
  }

  /*&::before {*/
  /*  content: '';*/
  /*  position: absolute;*/
  /*  bottom: 0;*/
  /*  right: 0;*/
  /*  !*z-index: 990;*!*/
  /*  width: 100%;*/
  /*  height: 50px;*/
  /*  background:  linear-gradient(rgba(255, 0, 0, 0.07), rgba(0, 0, 0, 0.54));*/
  /*  !*border-radius: 30px 0 0 0;*!*/
  /*  !*border-bottom: 120px solid rgba(255, 0, 0, 0.71);*!*/
  /*  !*border-left: 290px solid transparent;*!*/
  /*  overflow: hidden;*/
  /*}*/
}

.newBlogsTitle {
  position: absolute;
  top: 10px;
  right: 0;
  width: 100px;
  height: 30px;
  // background-color: red;
  border: 1px solid red;
  border-radius: 2px;
  color: #666666;
  text-align: center;
  font-family: font1;

  span {
    color: black;
    position: absolute;
    left: -10px;
    top: 3px;
    font-size: 22px;
    display: block;
  }
}
</style>
