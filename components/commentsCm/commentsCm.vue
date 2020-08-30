<template>
  <div class="col-lg-6 pt-2 float-right pl-xl-2 pr-xl-0 pr-lg-0 pr-md-0 pr-sm-0 pl-md-0 pl-sm-0 yourCommentsCon">
    <h6 class="pb-2  yourComments">
      نظرات شما
    </h6>
    <div class="row p-0 ml-1 mr-0" dir="rtl" style="background-color:whitesmoke;border:1px solid #c4ffff;">
      <div class="col-lg-3 col-md-3 col-sm-3 col-12" style="position:relative;">
        <div class="userCommentImage">

        </div>

      </div>
      <div class="pr-0 col-lg-9 col-md-9 col-sm-9 col-12">
        <div class="row pl-2 pb-2">
          <div class="col-lg-12 pl-0 commentOwnerDate">
            <p class="d-block float-right">مهدی حسینی</p>
            <p class="d-block float-left">۱۸ فروردین ۱۳۹۹ <span style="color:black;">ساعت</span> ۸:۵۵ </p>
          </div>
          <div class="col-lg-12 userCommentDiv pl-0">
            <p>ممنون
              خیلی عالی بود
              خیلی وقت بود دنبال همچین کرکی می گشتم

              خیلی عالی بود
              خیلی وقت بود دنبال همچین کرکی می گشتمخیلی عالی بود
              خیلی وقت بود دنبال همچین کرکی می گشتم</p>

          </div>
          <div class="col-lg-12 pl-0">
            <button class="btn btn-danger m-0 commentReplyBtn">
              پاسخ
            </button>
          </div>
        </div>

      </div>

    </div>
    <div class="row ml-3 mr-3 p-2 replyCommentCon" dir="rtl">
      <div class="col-lg-3 ">
        <div class="replyCommentDiv">

        </div>
      </div>
      <div class="col-lg-9">
        <p></p>
        <div class="row ">
          <div class="col-lg-12 p-0">
            <p>ادمین
            </p>
            <p>۱۸ فروردین ۱۳۹۹ <span style="color:black;">ساعت</span> ۸:۵۵
            </p>

          </div>


        </div>
        <div class="row p-0">
          <div class="p-0 col-lg-12 replyCommentText">
            <p class="m-0 p-0">خواهش میکنم لطف دارید در خدمتگذاری حاضریم</p>
          </div>
        </div>
      </div>

      <div class="col-lg-12">
        <button class="btn btn-danger float-left" style="font-family:font1;font-size:18px;">
          پاسخ
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="less">
  html {
    overflow-x: hidden;
  }

  .yourCommentsCon {
    .yourComments {
      display: block;
      width: 98%;
      border-bottom: 1px solid red;
      right: 0;
      text-align: right;
      font-family: font1;
      font-weight: bold;
      position: absolute;
      top: -30px;
    }
  }


  .userCommentImage {
    width: 100px;
    height: 100px;
    /* background-color: dodgerblue; */
    border-radius: 50%;
    background-image: url('../../assets/images/user.png');
    background-size: cover;
    background-position: top top;
    /* float: right; */
    margin: 0 auto;
  }

  .commentOwnerDate {
    p:first-of-type {
      text-align: right;
      font-weight: bold;
      font-family: font1;
    }

    p:last-of-type {
      color: #fd265c;
      text-align: right;
      font-weight: bold;
      font-family: font1;
    }
  }

  .userCommentDiv {
    width: 100%;
    height: auto;
    float: left;

    p {
      text-align: justify;
      font-family: font1;
      font-size: 16px;
      font-weight: 600;
      color: #005b5b;
    }
  }

  .commentReplyBtn {
    font-family: font1;
    font-size: 18px;
    font-weight: 800;
  }

  .replyCommentCon {
    background-color: #fbd0e7;
    position: relative;

    &::after {
      content: '';
      border-color: #fbd0e7 transparent;
      border-style: solid;
      border-width: 0px 10px 10px 10px;
      height: 0px;
      width: 0px;
      position: absolute;
      top: -10px;
      right: 20px;
    }

    .replyCommentDiv {
      width: 100px;
      height: 100px;
      /* background-color: dodgerblue; */
      border-radius: 50%;
      background-image: url('../../assets/images/user.png');
      background-size: cover;
      background-position: top top;
      /* float: right; */
      margin: 0 auto;




    }

    .replyCommentText {
      p {
        color: #005b5b !important;
      }
    }

    p:first-of-type {
      // color: #fd265c;
      text-align: right;
      font-weight: bold;
      font-family: font1;
      display: block;
      float: right;

      span {
        // background-color: rgba(255, 0, 0, 0.808);
        // padding: 3px;
        border-radius: 3px;
        // border: 1px solid red;
        color: red;
        display: inline-block;
        width: auto;
        height: auto;
        margin-right: 10px;
        position: relative;
        // &::after {
        //   content: '';
        //   border-color: transparent red;
        //   border-style: solid;
        //   border-width: 10px 0px 10px 10px;
        //   height: 0px;
        //   width: 0px;
        //   position: absolute;
        //   right: -11px;
        //   top:5px;
        // }
      }
    }

    p:last-of-type {
      color: #fd265c;
      text-align: left;
      font-weight: bold;
      font-family: font1;
    }
  }

  @media only screen and (max-width: 991px) {
    .yourCommentsCon {
     margin-top: 40px;
    //  .yourComments{
    //    right: 15px;
    //  }
    }
  }
  @media only screen and (max-width: 776px) {
   
     .yourComments{
       right: 15px!important;
     }
    
  }
</style>