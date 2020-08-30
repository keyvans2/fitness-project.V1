<template>
  
    <!-- <div class="row">
      <div
        style="font-weight:bold;font-family:font1;font-size:20px;display:block;position:absolute;top:-40px;left:0;right:0;text-align: center;">
        مطالب مرتبط</div> -->
      <div class="col-lg-3 col-md-6 col-sm-6 related mb-3">
        <div class="relatedItems effect">

        </div>
        <div class="mt-2" style="width:100%;height:35%;display:block;">
          <p>
            از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد.
          </p>
          <span class="float-right d-block blog-date">
            ۱۳۹۹/۴/۵
            <i class="far fa-calendar-alt pl-1"></i>

          </span>
          <span class="d-inline-block float-left blog-author-name">
            ادمین
            <i class="far fa-user d-inline pl-1"></i>
          </span>
        </div>

    <!-- </div> -->

  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="less">
  .related {
    height: 260px;
.effect{
      box-shadow: 0 8px 6px -6px black;
}
    p {
      text-align: justify;
      font-family: font1;
      font-weight: bold;
      direction: rtl;
    }

    span {
      font-family: font1;
      font-weight: bold;
    }

  }

  .relatedItems {
    background-image: url('../../assets/images/fit1.png');
    background-size: cover;
    background-position: top center;
    height: 65%;
    width: 100%;
  }
</style>