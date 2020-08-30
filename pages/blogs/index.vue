<template>

  <div class="container-fluid t">
    <div class="container pt-2 mt-3 pb-3 filters blogsContainer">
      <!-- <div class="filterBlogs">
        <button @click="current=3" :class="{active:current===3}">
          جدیدترین
        </button>

        <button @click="current=2" :class="{active:current===2}">
          پربازدیدترین
        </button>

        <button :class="{active:current===1}" @click="current=1">
          منتخب ما
        </button>
      </div> -->
      <!-- <div class="p-1 m-0" style="z-index:990;top:-20px;right:20px;font-weight:bold;font-family:font1;font-size:18px;width:auto;height:auto;background-color:#ffffff;position:absolute;">
        جدیدترین مطالب
      </div> -->
      <div class="row ">
        <div class="col-lg-12">
          <p class="m-0 pb-3 text-right d-block float-right" style="color:#7c7c7c;font-weight:bold;font-family:font1;">
           : مرتب سازی بر اساس 
          </p>
         <select class="float-right mr-2" style="direction:rtl;font-weight:bold;font-family:font1;">
           <option value="" style="font-family:font1;font-weight:bold;">جدیدترین</option>
           <option value="" style="font-family:font1;font-weight:bold;">پربازدیدترین</option>
           <option value="" style="font-family:font1;font-weight:bold;">منتخب</option>
         </select>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 mb-2" v-for="(img , i) in images" :key="i">
          <div class="blog-items" :style="{backgroundImage:'url('+img.url +')'}">

          </div>
          <div class="p-2 m-0 blog-text">
            <p class="text-center  m-0">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
            <span class="float-right d-inline-block blog-date">
              ۱۳۹۹/۴/۵
              <i class="far fa-calendar-alt pl-1"></i>

            </span>
            <span class="d-inline-block float-left blog-author-name">
              ادمین
              <i class="far fa-user d-inline pl-1"></i>
            </span>
          </div>

        </div>
        <!--      <div class="col-lg-3">-->
        <!--        <div class="blog-items">-->

        <!--        </div>-->
        <!--      </div>-->
        <!--      <div class="col-lg-3">-->
        <!--        <div class="blog-items">-->

        <!--        </div>-->
        <!--      </div>-->
        <!--      <div class="col-lg-3">-->
        <!--        <div class="blog-items">-->

        <!--        </div>-->
        <!--      </div>-->
      </div>
      <div class="row">
        <pagination />
      </div>
    </div>
  </div>
</template>

<script>
  import pagination from "~/components/pagination/pagination";
  export default {
    data() {
      return {
        images: [{
            url: require('assets/images/fit1.png')
          },
          {
            url: require('assets/images/fit2.jpg')
          },
          {
            url: require('assets/images/fit3.jpeg')
          },
          {
            url: require('assets/images/fit4.jpg')
          },
          {
            url: require('assets/images/fit5.jpg')
          },
          {
            url: require('assets/images/fit6.jpg')
          },
          {
            url: require('assets/images/fit7.jpg')
          },
          {
            url: require('assets/images/fit8.jpg')
          },

        ],
        current: 1
      }
    },
    components: {
      pagination
    }
  }
</script>


<style lang="less">
  .active {
    color: #ffffff;
    border: 1px solid red !important;
    transform: translateY(-5px);

  }

  .blogsContainer {
    border: 3px solid red;
    position: relative;

    //     background-image: url('../../assets/images/backDesign.svg');
    //     background-repeat: no-repeat;
    // background-size: cover;
    .filterBlogs {
      width: auto;
      height: auto;
      // background-color: #80ffff;
      top: -15px;
      position: absolute;
      right: 30px;
      z-index: 990;

      button {
        width: auto;
        height: 30px;
        // background-color: dodgerbwhlue;
        border: none;
        font-family: font1, Arial, Helvetica, sans-serif;
        font-size: 18px;
        font-weight: 600;
        border-radius: 5px;
        color: rgba(0, 0, 0, 0.514);
        outline: transparent;
      }
    }
  }

  .blog-items {
    position: relative;
    height: 200px;
    background-color: dodgerblue;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    box-shadow: 0 8px 6px -6px black;
  }

  .blog-text {
    width: 100%;
    height: auto;

    p {
      font-family: font1;
      color: black;
      font-weight: bold;
    }

    .blog-date {
      font-weight: bold;
      font-family: font1;
      color: #7c6976;
    }

    .blog-author-name {
      font-weight: bold;
      font-family: font1;
      color: #7c6976;
    }
  }
</style>