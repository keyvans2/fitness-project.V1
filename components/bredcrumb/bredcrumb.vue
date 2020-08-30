<template>
  <div class="container">
    <!-- <div class="row p-0" dir="rtl">
      <div class="col-lg-12">


        <nav aria-label="breadcrumb ">
          <ol class="breadcrumb">
            <li class="breadcrumb-item "><a href="#" class="m-0">تست</a></li>
            <li class="breadcrumb-item p-0"><a href="#">تست</a></li>
            <li class="breadcrumb-item active">تست</li>
          </ol>
        </nav>
      </div>
    </div> -->
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="less">
  .breadcrumb-item {
    font-family: font1;
    font-weight: bold;

    &::before {
    //   content: '>' !important;
    //   padding-left: 5px;
    //   font-family: font1!important;
    content: "\25AE";  /* this is your text. You can also use UTF-8 character codes as I do here */
    font-family: FontAwesome;
  
    }
  }

  .breadcrumb-item:first-of-type {


    &::before {
      content: '' !important;

    }
  }
</style>