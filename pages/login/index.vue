<template>
  <div class="container">
    <div class="row a pt-5" style="height:400px;">
      <div
        class="col-xl-4 col-lg-5 offset-md-2 col-md-8 col-12 ml-xl-5 ml-lg-4 pl-xl-5 pl-lg-5 pt-sm-0 pb-sm-0"
      >
        <div class="row bg-light pt-2 pb-2">
          <div class="m-auto col-xl-10 col-lg-9 col-md-9 registerContainer">
            <form action="#">
              <!-- <label for="name" class="float-right p-0 m-0" style="text-align:right;display:block;color:black;margin-left:10;px;font-family:font1;font-size:18px;">نام</label> -->
              <span class="text-right float-right text-danger">ایمیل اجباری است *</span>

              <input type="email" placeholder="ایمیل" class="mb-2 pr-3" />
              <span class="text-right float-right text-danger">رمزعبور اجباری است *</span>
              <input type="password" placeholder="رمزعبور" class="mb-2 pr-3" />
              <div class="rememberMe">
                <label for="remember"  dir="rtl" class="font-weight-bold mt-1">منو به خاطر بسپار</label>
                <input type="checkbox" id="remember" dir="rtl" />
              </div>
              <button class="btn btn-danger">ورود</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
*::placeholder {
  color: black;
}
.a {
  background-image: url("../../assets/images/registerBack2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: auto;
  .registerContainer {
    span {
      font-size: 14px;
      font-family: font1;
      font-weight: 800;
    }
    input[type="text"],
    input[type="email"],
    input[type="number"],
    input[type="password"] {
      width: 100%;
      height: 40px;
      border: 1px solid black;
      border-radius: 5px;
      color: black;
      text-align: right;
      font-family: font1;
      font-size: 16px;
    }
    select {
      display: block;
      width: 100%;
      height: 40px;
      border: 1px solid black;
      border-radius: 5px;
      background-color: transparent;
      color: black;
      text-align: center;
      font-family: font1;
      font-size: 18px;
      text-align: center;
      direction: rtl;
    }
    button {
      width: 100%;
      height: 40px;
      font-family: font1;
      font-size: 18px;
      //   font-weight: bold;
    }
    .rememberMe {
      float: right;
      label {
        font-size: 14px;
        font-family: font1;
        vertical-align: middle;

      }
    }
  }
}
</style>