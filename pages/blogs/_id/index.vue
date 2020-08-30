<template>
  <div class="container ">
    <div class="row m-0 detailContainer">
      <div class="col-lg-12  blogDetailImg">

      </div>
      <div class="blogDetailTitle">

        <p class=" mt-0 mr-5 d-block float-right blogTitle">

          تاثیر دمبل روی بدن
          <i class="fas fa-dumbbell text-left pl-2 pt-3 pt-3"></i>
        </p>
        <div class="mt-2 ml-5 blogAuthorRate">
          <div class="blogAuthor">
            <p class="text-left p-0 m-0 d-block float-left ">
              محمد امین حسنی

              <i class="far fa-user pl-1"></i>
            </p>
          </div>
          <div class="pr-3 blogRate">
            <i class="far fa-star mt-1"></i>
            <i class="far fa-star mt-1"></i>
            <i class="fas fa-star mt-1 text-primary"></i>
            <i class="fas fa-star mt-1 text-primary"></i>
            <i class="fas fa-star mt-1 text-primary"></i>

          </div>
        </div>

      </div>
    </div>
    <div class="row ">
      <div class="col-lg-12 blogDetailText ">
        <p>
          لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی
          گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل
          ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن
          باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری
          یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد
          و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه
          رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات
          ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.
        </p>
        <span>
          <strong>منبع:</strong>
          ام نیوز
        </span>
      </div>
    </div>
    <div class="row pt-3 mt-5 relatedContainer" style="position:relative;">


      <div class="relatedTitle">
        مطالب مرتبط</div>
      <related-blogs v-for="(n , i) in 10" :key="i">

      </related-blogs>
    </div>
    <div class="row mt-5">
      <div class="col-lg-12">
          <div class="row" dir="rtl">
             <commentForm />
           <commentsCm/>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  import commentForm from '~/components/commentForm/commentForm'
  import relatedBlogs from '~/components/relatedBlogs/relatedBlogs'
  import commentsCm from '~/components/commentsCm/commentsCm'
  export default {
    components: {
      commentForm,
      relatedBlogs,
      commentsCm
    },
    // data(){
    //   return{
    //     related:[
    //       {id:1,title:'lorem1'}
    //     ]
    //   }
    // }
  }
</script>

<style lang="less">
  .detailContainer {
    position: relative;
  }

  .blogDetailImg {
    height: 400px;
    background-color: red;
    background-image: url(../../../assets/images/fit1.png);
    background-size: cover;
    background-position: center top;
    background-attachment: inherit;
    opacity: 0.7;
  }

  .blogDetailTitle {
    width: 100%;
    height: auto;
    color: #ffffff;
    // background-color: black;
    /* For browsers that do not support gradients */
    background-image: linear-gradient(rgba(39, 6, 6, 0.041), rgba(19, 19, 3, 0.795));
    position: absolute;
    bottom: 0;

    .blogTitle {
      font-family: font1;
      font-size: 18px;

      i {
        font-size: 14px;
      }
    }

    .blogAuthorRate {
      width: auto;
      height: 50px;
      float: left;

      .blogAuthor {
        width: 100%;
        height: 50%;

        p {
          font-size: 18px;
          font-family: font1;

          i {
            font-size: 14px;
          }
        }
      }

      .blogRate {
        width: 100%;
        height: 50%;

        i {
          font-size: 12px;
          text-align: center;
          float: right;
        }
      }
    }
  }

  .blogDetailText {
    p {
      text-align: justify;
      font-family: font1;
      font-size: 18px;
      font-weight: bold;
      direction: rtl;

    }

    span {
      font-family: font1;
    }
  }

  .relatedContainer {
    .relatedTitle {
      border-bottom: 1px solid red;
      width: 97.5%;
      z-index: 999;
      font-weight: bold;
      font-family: font1;
      font-size: 20px;
      display: block;
      position: absolute;
      top: -40px;
      left: 0;
      right: 0;
      text-align: center;
      margin: auto;
      padding-bottom: 10px;
    }
  }
</style>