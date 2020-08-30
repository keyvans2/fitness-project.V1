<template>
  <div class="secondNavLay">
    <ul>
      <n-link to="#" tag="li">
        <a>تست</a>
      </n-link>
      <n-link to="#" tag="li">
        <a>تست</a>
      </n-link>
      <n-link to="#" tag="li">
        <a>تست</a>
      </n-link>
      <n-link to="#" tag="li">
        <a>تست</a>
      </n-link>
      <n-link to="#" tag="li">
        <a>تست</a>
      </n-link>
      <n-link to="#" tag="li">
        <a>تست</a>
      </n-link>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {},
  };
</script>
<style lang="less">
  .secondNavLay {
    width: 100%;
    height: 50px;
    background-color: #ffffff;
    position: absolute;
    right: 0;
    /*opacity: 0;*/
    bottom: -28px;
    z-index: 997;
    transition: visibility 0.500s;
    border: 2px solid red;
    /*display: none;*/
    visibility: hidden;

    :after {
      content: '';
      position: absolute;
      right: 0;
      top: 14px;
      width: 0;
      height: 0;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;

      border-right: 10px solid red;
    }

    ul {
      direction: rtl;
      /*border: 1px solid red;*/
      padding-top: 10px;
      padding-right: 150px;
      float: right;
      width: 100%;
      height: 100%;

      li {
        text-align: center;
        float: right;
        padding-left: 50px;


        a:last-child {
          color: black;
          font-family: font1;
          border: none !important;
          font-weight: 600;

          &:hover {
            /*color: ;*/
          }
        }

      }
    }
  }
</style>
