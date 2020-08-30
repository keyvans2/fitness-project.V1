<template>
  <div class="morabianCon">
    <div class="row mt-3">
      <div class="col-lg-12">
        <div class="morabianTitle">
          <span class="fas fa-long-arrow-alt-left"></span>
          <p>مربیان</p>
        </div>
      </div>
    </div>
    <div class="row pb-3 pt-3 pr-5">
      <div class="offset-lg-2 offset-md-0 offset-2">

      </div>
      <div class="col-lg-3 col-md-4 ml-md-0 morabiItems">
        <transition name="fade">
          <div class="morabiPics" :style="{backgroundImage:'url('+ img+')'}" @mouseenter="currentMorabi=1"
               @mouseleave="currentMorabi=''">
            <div class="morabiDesc pt-1 " v-if="currentMorabi===1">

              <p class="text-right mr-2">حسن احمدی<i class="fa fa-user ml-2 mt-1" aria-hidden="true"></i>
              </p>
              <span>
              <i class="fas fa-align-right" style="font-size: 12px;"></i>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </span>
            </div>
          </div>
        </transition>
      </div>
      <div class="col-lg-3 col-md-4 ml-md-0 morabiItems">
        <transition name="fade">
          <div class="morabiPics" :style="{backgroundImage:'url('+ img+')'}" @mouseenter="currentMorabi=2"
               @mouseleave="currentMorabi=''">
            <div class="morabiDesc pt-1 " v-if="currentMorabi===2">

              <p class="text-right mr-2">حسن احمدی<i class="fa fa-user ml-2 mt-1" aria-hidden="true"></i>
              </p>
              <span>
              <i class="fas fa-align-right" style="font-size: 12px;"></i>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </span>
            </div>
          </div>
        </transition>
      </div>
      <div class="col-lg-3 col-md-4 ml-md-0 morabiItems">
        <transition name="fade">
          <div class="morabiPics" :style="{backgroundImage:'url('+ img+')'}" @mouseenter="currentMorabi=3"
               @mouseleave="currentMorabi=''">
            <div class="morabiDesc pt-1 " v-if="currentMorabi===3">

              <p class="text-right mr-2">حسن احمدی<i class="fa fa-user ml-2 mt-1" aria-hidden="true"></i>
              </p>
              <span>
              <i class="fas fa-align-right" style="font-size: 12px;"></i>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </span>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "morabian",
    data() {
      return {
        img: require('../../assets/images/morabian.jpeg'),
        currentMorabi: ''
      }
    },
    methods: {}
  }
</script>

<style lang="less">
.morabianCon{
      border: 1px none rgba(255, 0, 0, 0.274);
    border-top-style: solid;
}
  .morabianTitle {
    width: 100px;
    float: right;
    height: 30px;
    border: 1px solid red;
    border-radius: 2px;
    position: relative;

    span {
      color: black;
      position: absolute;
      left: -10px;
      top: 3px;
      font-size: 22px;
      display: block;
    }

    p {
      text-align: center;
      font-family: font1;
      font-size: 18px;
      font-weight: bold;
    }
  }

  .morabiPics {
    width: 200px;
    height: 200px;
    background-color: dodgerblue;
    border-radius: 50%;
    margin: 0 auto;
    /*background-position: center center;*/
    background-size: cover;
    background-repeat: no-repeat;

    .morabiDesc {
      position: absolute;
      z-index: 999;
      top: 100px;
      right: 0;
      left: 0;
      margin: 0 auto;
      width: 300px;
      height: auto;
      background-color: whitesmoke;
      padding: 5px;
      border: 1px groove rgba(255, 0, 0, 0.46);

      &:after {
        content: '';
        top: -20px;
        right: 0;
        left: 0;
        margin: 0 auto;
        position: absolute;
        border-color: #ffffff transparent;
        border-style: solid;
        border-width: 0px 20px 20px 20px;
        height: 0px;
        width: 0px;
      }

      p {
        font-family: font1;
        font-size: 18px;
        font-weight: bold;

      }

      span {
        direction: rtl;
        text-align: justify;
        display: block;
        font-family: font1;
        font-size: 18px;
        font-weight: 600;
      }
    }
  }
</style>
