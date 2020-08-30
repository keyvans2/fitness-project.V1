<template>


  <div style="height:auto;" class="col-lg-6 pt-2 form-group float-right pl-xl-2 pr-xl-0 pr-lg-0 pr-md-0 pr-sm-0 pl-md-0 pl-sm-0">
    <h6 class="pb-2" style="display:block;width:99%;border-bottom:1px solid red;right:0;text-align:right;font-family:font1;font-weight:bold;position:absolute;top:-30px;">
      ارسال نظر
    </h6>
    <form>
      <input type="text" name="" id="" class="form-control" placeholder="email">
      <textarea class="form-control mt-2">
        </textarea>
      <button class="btn btn-danger mt-2 float-right" style="font-weight:bold;font-family:font1;">
        ارسال نظر
      </button>
    </form>

  </div>

</template>

<script>
  export default {

  }
</script>

<style lang="less">
  .related {
    height: 155px;

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
    height: 100%;
    width: 100%;
  }
</style>