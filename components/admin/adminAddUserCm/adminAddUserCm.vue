<template>
  <div>
    <div class="container-fluid">
      <div class="row addUserCon">
        <div class="offset-lg-3 col-lg-6">
          <form action="#" @click.prevent="">
            <div class="form-group">
              <label class="float-right" for="name">: نام </label>
              <input type="text" id="name" class="form-control" v-focus />
            </div>
            <div class="form-group">
              <label class="float-right" for="fname">: نام خانوادگی</label>
              <input type="text" id="fname" class="form-control" />
            </div>
            <div class="form-group">
              <label class="float-right" for="username">: نام کاربری</label>
              <input type="text" id="username" class="form-control" />
            </div>
            <div class="form-group">
              <label class="float-right" for="mobile">: موبایل</label>
              <input type="number" id="mobile" class="form-control" />
            </div>
            <div class="form-group">
              <label class="float-right" for="city">: نام شهر</label>
              <input type="text" id="city" class="form-control" />
            </div>
            <div class="form-group">
              <label class="float-right" for="title">: نقش</label>
              <select name="" id="title" class="form-control">
                <option value="">ادمین</option>
                <option value="">نویسنده</option>
              </select>
            </div>
            <div class="form-group">
              <label class="float-right" for="title">: هدف</label>
              <select name="" id="title" class="form-control">
                <option value="">معمولی</option>
                <option value="">چربی سوزی</option>
                <option value="">اضافه کردن وزن</option>
                <option value="">عضله سازی</option>
              </select>
            </div>
            <div class="form-group">
              <label class="float-right" for="birthday">: تاریخ تولد</label>
              <input type="date" id="birthday" class="form-control" />
                  <!-- <vue-cal v-model="date"/> -->
        
            </div>
            <button type="submit" class="btn btn-block btn-danger">ثبت</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// const cal = process.client ? require('vue-cal'): '';

export default {

  directives: {
    focus: {
      // directive definition
      inserted: function (el) {
        el.focus();
      },
    },
  },
  components: {
    // vueCal
  },
  data(){
      return{
          date:''
      }
  }
};
</script>

<style lang="less">
.addUserCon {
  height: 650px;
  overflow-x: hidden;
}
label {
  font-family: font1;
  font-size: 18px;
  font-weight: bold;
}
input[type="text"],
input[type="number"],
input[type="date"],
select {
  border-color: rgba(30, 143, 255, 0.637) !important;
  font-family: font1;
  direction: rtl;
}
button[type="submit"] {
  font-family: font1;
  //   font-size: 18px;
  //   font-weight: bold;
}
</style>