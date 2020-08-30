<template>
  <!--  <div class="container">-->
  <div class="aboutCon">
    <div class="row mt-3">
      <div class="col-lg-12">
        <div class="aboutUsTitle p-1">
          <p class="text-right mr-3 mt-3"> مختصری درباره ما</p>
          <span class="fas fa-long-arrow-alt-left"></span>
        </div>
      </div>
    </div>
    <div class="row mt-5 mb-5 pb-4 p-0 " dir="rtl" style="background-color:#ffffff;height:auto;">


      <div class="col-lg-12 ">

        <div class="aboutUsText text-dark">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع
          با
          هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
          متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
          پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط
          سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
          طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
          طراحان گرافیک است، چاپگرها و متون
          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع
          با
          هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
          متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
          پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط
          سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
          طراحی اساسا مورد استفاده قرار گیرد.
        </div>
        <div class="aboutUsPic p-2">

        </div>
        <!--      <img src="../../assets/images/running.jpg" alt="">-->
      </div>
    </div>
  </div>
  <!--  </div>-->
</template>

<script>
  export default {
    name: "about.vue"
  }
</script>

<style lang="less">
  .aboutCon {
    border: 1px none rgba(255, 0, 0, 0.274);
    border-top-style: solid;
  }

  .aboutUsTitle {
    width: 120px;
    height: 30px;
    text-align: center;
    line-height: 15px;
    float: right;

    position: relative;
   border: 1px solid red;
    border-radius: 2px;
    p {
      padding: 0;
      margin: 0 !important;
      display: inline;
      font-family: font1;
      font-weight: bold;
    }


    span {
      display: inline;
      margin: 0;
      text-align: left;
      position: absolute;
      left: -10px;
      font-size: 22px;
      top: 5px;
    }


  }

  .aboutUsText {
    width: 70%;
    height: auto;
    float: right;
    padding: 0 10px 0 10px;
    text-align: justify;
    direction: rtl;
    font-family: font1;
    font-size: 20px;
    font-weight: 600;
  }

  .aboutUsPic {
    width: 30%;
    height: 400px;
    float: left;
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url("../../assets/images/running2.png");
  }
</style>