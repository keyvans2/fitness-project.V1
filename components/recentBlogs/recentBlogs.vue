<template>
  <div class="recentBlogsContainer mt-4">
    <div class="row mt-2 m-0">
      <div class="col-lg-12">
        <div class="newBlogsTitle">
          <span class="fas fa-long-arrow-alt-left"></span>
          <!--            <i class="fas fa-dumbbell" style="position: absolute;top:3px;font-size:22px;"></i>-->
          <p class="font-weight-bold">مطالب جدید</p>
        </div>
      </div>
    </div>

    <div class="row mt-5 m-2">
      <div
        class="col-lg-12 sliderContainer"
        @mouseenter="stopSlider"
        @mouseleave="startSlider"
      >
        <transition name="fade" mode="out-in" appear>
          <div
            class="sliderItems bg-info"
            v-for="itm in recentBlogs"
            :key="itm.id"
            v-if="itm.id === num"
          >
            <div class="sliderDetail">
              <transition name="fade">
                <div class="sliderPostAuthor" v-if="itm.id === num">
                  <div class="authorImgContainer">
                    <img :src="itm.img" width="100" height="100" alt />
                    <p class="mt-1 text-right">
                      {{ itm.name }}
                      <i class="fas fa-user pl-1 text-right mr-3"></i>
                    </p>
                  </div>
                </div>
              </transition>
              <div class="sliderTitle">
                <p class="sliderTitleText">
                  {{ itm.title }}
                  <i class="fas fa-caret-left"></i>
                </p>
              </div>
              <!-- <div class="sliderDate"></div> -->
            </div>
          </div>
        </transition>
        <div class="mt-2 mr-4 sliderDots">
          <span
            v-for="itm in recentBlogs"
            :key="itm.id"
            :style="checkDots(itm.id)"
            class="mr-1"
            style="
              display: block;
              float: left;
              width: 5px;
              height: 5px;
              background-color: #00ffff;
              border-radius: 50%;
              vertical-align: middle;
            "
          ></span>
        </div>
        <div class="sliderNav">
          <p class="d-block float-left" @click="leftImage">
            <i class="fas fa-angle-left"></i>
          </p>
          <p class="d-block float-left ml-3" @click="nextImage">
            <i class="fas fa-angle-right"></i>
          </p>
        </div>
      </div>
    </div>
    <!-- <button class="btn btn-info" @click="nextImage">right</button>
    <button class="btn btn-info" @click="leftImage">left</button> -->
  </div>
</template>

<script>
export default {
  created() {
    let t = this;
    this.sliderInterval = setInterval(() => {
      t.nextImage();
    }, 4000);
  },
  data() {
    return {
      sliderInterval: "",
      num: 1,
      recentBlogs: [
        {
          id: 1,
          name: "علی",
          title: "ضربان قلب را بالا نگهدارید!",
          img: require("../../assets/images/admin.jpg"),
        },
        {
          id: 2,
          name: "مهدی",
          title: "لورم ایپسوم",
          img: require("../../assets/images/admin2.jpg"),
        },
        {
          id: 3,
          name: "محسن",
          title: "لورم ایپسوم",
          img: require("../../assets/images/medicines.jpg"),
        },
        {
          id: 4,
          name: "میثم",
          title: "جدید لورم ایپسوم",
          img: require("../../assets/images/medicines.jpg"),
        },
        {
          id: 5,
          name: "میلاد",
          title: "زیبا لورم ایپسوم",
          img: require("../../assets/images/medicines.jpg"),
        },
        {
          id: 6,
          name: "مراد",
          title: "لورم ایپسوم",
          img: require("../../assets/images/medicines.jpg"),
        },
        {
          id: 7,
          name: "محمد",
          title: "لورم ایپسوم",
          img: require("../../assets/images/medicines.jpg"),
        },
        {
          id: 8,
          name: "کریم",
          title: "لورم ایپسوم",
          img: require("../../assets/images/medicines.jpg"),
        },
        {
          id: 9,
          name: "مازیار",
          title: "لورم ایپسوم",
          img: require("../../assets/images/medicines.jpg"),
        },
      ],

      // img2: require("../../assets/images/medicine2.jpg"),
      // img3: require("../../assets/images/medicine3.png"),
    };
  },
  computed: {
    recentBlogsCom: function () {
      let t = this;
      return this.recentBlogs.filter(function (el) {
        return el.id >= t.num && el.id <= t.num + 2;
      });
      //  console.log(this.num);
    },

    fadeCheck() {
      this.num === 4 ? "fade" : false;
    },
    checkDots() {
      return (val) => {
        if (val === this.num) {
          return {
            backgroundColor: "#457b9d",
            width: "10px",
            height: "10px",
            marginTop: "-2px",
          };
        } else {
          return {
            backgroundColor: "#00ffff",
          };
        }
      };
    },
  },

  methods: {
    nextImage() {
      if (this.num >= this.recentBlogs.length) {
        this.num = 0;
      }
      this.num++;
      // console.log(this.num);
    },
    leftImage() {
      if (this.num <= 1) {
        this.num = this.recentBlogs.length + 1;
        console.log(this.recentBlogs.length);
      }
      this.num--;
    },
    stopSlider() {
      clearInterval(this.sliderInterval);
    },
    startSlider() {
      let th = this;
      this.sliderInterval = setInterval(() => {
        th.nextImage();
      }, 4000);
    },
  },
};
</script>
<style lang="less">
// .rcnItems {

// }
.sliderContainer {
  .sliderItems {
    float: right;
    width: 100%;
    height: 300px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background-image: url("../../assets/images/fit1.png");
    .sliderDetail {
      width: 300px;
      height: 100%;
      float: right;
      background-color: rgba(102, 86, 86, 0.568);

      .sliderPostAuthor {
        width: 300px;
        height: 50%;
        float: right;
        // border-bottom: 1px solid #bbbbbb;
        .authorImgContainer {
          width: 100px;
          height: 100px;
          margin: 20px auto;
          border-radius: 50%;
          img {
            border-radius: 50%;
          }
          p {
            display: block;
            color: #ffffff;
            font-family: font1;
            margin-left: 15px;
            font-weight: 400;
            width: 300px !important;
            float: right;
          }
        }
      }
      .sliderTitle {
        width: 300px;
        float: right;
        height: 50%;
        padding-top: 50px;
        margin-bottom: 0;
        .sliderTitleText {
          color: rgb(243, 237, 237);
          text-align: center;
          // font-we0ight: bold;
          font-family: font1;
          font-size: 24px;
          i {
            vertical-align: middle;
            color: dodgerblue;
          }
        }
      }
    }
  }
  .sliderDots {
    width: 100px;
    height: auto;
    float: right;
  }
  .sliderNav {
    width: 100px;
    height: auto;
    float: left;

    i {
      cursor: pointer;
    }
  }
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
.fade-enter-active {
  transition: opacity 0.2s;
  animation: left 0.5s cubic-bezier(0.17, 0.67, 0.25, 0.82) forwards;
}
.fade-leave-active {
  transition: opacity 0.2s;
  animation: right 0.5s cubic-bezier(0.17, 0.67, 0.25, 0.82) forwards;
}

.fade-enter {
  opacity: 0;
}
.fade-leave
/* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@keyframes left {
  from {
    transform: translateX(-30px);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes right {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-30px);
  }
}
@media only screen and (max-width: 500px) {
  .sliderDetail {
    width: 100% !important;
    .sliderPostAuthor {
      width: 100% !important;
    }
  }
}
</style>
