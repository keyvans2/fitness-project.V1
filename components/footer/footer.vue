<template>
  <div>
    <div class="container">
      <div class="row mt-3  footerCn" dir="rtl">

        <div class="col-lg-3 col-12 pt-2 ">
          <p class="pb-2">تماس با ما</p>
          <span>
 <i class="fa fa-phone text-primary" aria-hidden="true"></i>
       09380723587

     </span>


          <!--          <i class="fab fa-telegram-plane text-primary d-block mt-2"></i>-->


        </div>
        <div class="col-lg-3 col-12 pt-2 ">
          <p class="pb-2">لینک ها</p>
          <ul>
            <li>
              آزمایشی
            </li>
            <li>
              آزمایشی
            </li>
            <li>
              آزمایشی
            </li>
            <li>
              آزمایشی
            </li>
          </ul>
        </div>
        <div class="col-lg-3 col-12 pt-2 ">
          <p class="pb-2 "> عضویت در خبرنامه</p>
          <form action="">
            <input type="text" class="form-control " placeholder="ایمیل خود را وارد کنید">
            <button class="btn btn-block  btn-dark mt-1" style="font-family: font1;font-size: 18px;font-weight: 600;">
              عضویت
            </button>
          </form>
        </div>
        <div class="col-lg-3 pt-2 col-12">
          <p class="pb-2">
            صفحات اجتماعی
          </p>
          <i class="fab fa-whatsapp text-danger" style="font-size: 22px;float: right;"></i>

          <i class="fab fa-instagram text-danger" style="font-size: 22px;float: right;padding-right: 5px;"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "footer.vue"
  }
</script>

<style lang="less">
  .footerCn {
    height: auto;
    background-color: rgba(250, 235, 215, 0.74);

    p {
      text-align: right;
      border-bottom: 1px solid red;
      display: block;
      width: 50%;
      font-weight: 600;
      font-family: font1;
      font-size: 18px;
    }

    span {
      font-weight: bold;
      text-align: right;
      display: block;

      i {
        font-size: 18px;

      }
    }

    ul {
      padding-right: 16px;
      float: right;

      li {
        font-family: font1;
        font-weight: 600;
        text-align: right;
        display: block;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .footerCn {
      div {

        margin-bottom: 10px;

        p {
          width: 100%;
          text-align: center;
        }
        span{
          text-align: center;
        }
        ul{
          display: block;
          width: 100%;
          margin:auto;
          li{
            text-align: center!important;
          }
        }
        i{
          margin:0 auto;
        }
      }
    }
  }
</style>
