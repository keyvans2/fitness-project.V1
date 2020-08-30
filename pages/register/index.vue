<template>
  <div>
    <div class="container">
      <div class="row a pt-3 pb-3 mt-2">
        <div
          class="col-xl-4 col-lg-5 offset-md-2 col-md-8 col-12 ml-xl-5 ml-lg-4 pl-xl-5 pl-lg-5 pt-sm-0 pb-sm-0"
        >
          <div class="row bg-light pt-2 pb-2">
            <div class="m-auto col-xl-10 col-lg-9 col-md-9 registerContainer">
              <form action="#">
                <!-- <label for="name" class="float-right p-0 m-0" style="text-align:right;display:block;color:black;margin-left:10;px;font-family:font1;font-size:18px;">نام</label> -->
                <span
                  class="text-right float-right text-danger"
                  style="font-size:14px;font-family:font1;font-weight:800;"
                >نام اجباری است *</span>

                <input type="text" placeholder="نام" class="mb-2 pr-3" />
                <span
                  class="text-right float-right text-danger"
                  style="font-size:14px;font-family:font1;font-weight:800;"
                >نام اجباری است *</span>

                <input type="text" placeholder="نام خانوادگی" class="mb-2 pr-3" />
                <span
                  class="text-right float-right text-danger"
                  style="font-size:14px;font-family:font1;font-weight:800;"
                >نام اجباری است *</span>

                <input type="email" placeholder="ایمیل" class="mb-2 pr-3" />
                <span
                  class="text-right float-right text-danger"
                  style="font-size:14px;font-family:font1;font-weight:800;"
                >نام اجباری است *</span>

                <input type="number" placeholder="شماره موبایل" class="mb-2 pr-0" />
                <!-- <input type="text" placeholder="شهر" class="mb-2 pr-3" /> -->
                <!-- <label
                  class="m-0"
                  for="target"
                  style="text-align:right;display:block;color:black;margin-left:10px;font-family:font1;font-size:18px;"
                >: انتخاب هدف</label>-->
                <span
                  class="text-right float-right text-danger"
                  style="font-size:14px;font-family:font1;font-weight:800;"
                >نام اجباری است *</span>

                <select class="pr-3 mb-2" id="target" v-model="selected" @change="select($event)">
                  <option
                    v-for="(target ,i) in targets"
                    :key="i"
                    :disabled="target.key===1"
                  >{{target.text}}</option>
                </select>
                <!-- <span
                  class="text-right float-right text-danger"
                  style="font-size:14px;font-family:font1;font-weight:800;"
                >نام اجباری است *</span>-->

                <input
                  v-if="selected !== 'انتخاب هدف' && selected !== 'ثبت نام معمولی'"
                  type="number"
                  class="mb-2"
                  min="20"
                  max="200"
                  placeholder="وزن بین 20 تا 200 کیلوگرم"
                />
                <!-- <span
                  class="text-right float-right text-danger"
                  style="font-size:14px;font-family:font1;font-weight:800;"
                >نام اجباری است *</span>-->

                <input
                   v-if="selected !== 'انتخاب هدف' && selected !== 'ثبت نام معمولی'"
                  type="number"
                  class="mb-2"
                  min="50"
                  max="200"
                  placeholder="قد بین 50 تا 200 سانتی متر"
                />
                <!-- <span
                  class="text-right float-right text-danger"
                  style="font-size:14px;font-family:font1;font-weight:800;"
                >نام اجباری است *</span>-->

                <input
                   v-if="selected !== 'انتخاب هدف' && selected !== 'ثبت نام معمولی'"
                  type="number"
                  class="mb-2"
                  min="50"
                  max="200"
                  placeholder="( دورشکم ( سانتی متر"
                />
                <!-- <span
                  class="text-right float-right text-danger"
                  style="font-size:14px;font-family:font1;font-weight:800;"
                >نام اجباری است *</span>-->

                <input
                 v-if="selected !== 'انتخاب هدف' && selected !== 'ثبت نام معمولی'"
                  type="number"
                  class="mb-2"
                  min="50"
                  max="200"
                  placeholder="( اندازه دور بازو ( سانتی متر"
                />
                <!-- <span
                  class="text-right float-right text-danger"
                  style="font-size:14px;font-family:font1;font-weight:800;"
                >نام اجباری است *</span>-->

                <input
                 v-if="selected !== 'انتخاب هدف' && selected !== 'ثبت نام معمولی'"
                  type="number"
                  class="mb-2"
                  min="50"
                  max="200"
                  placeholder="دور ران بین 50 تا 200 سانتی متر"
                />
                <button class="btn btn-danger">ثبت نام</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    // ["","", "چربی سوزی", "", ""]
    return {
      getBodyInfo: false,
      targets: [
        { key: 1, text: "انتخاب هدف" },
        { key: 2, text: "ثبت نام معمولی" },
        { key: 3, text: "افزایش وزن" },
        { key: 4, text: "افزایش حجم" },
      ],
      selected: "انتخاب هدف",
      moreOpt:false
    };
  },
  methods: {
    select(event) {
      // console.log(event.target.options===1);
    },
  },
};
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
    // width: 350px;
    input {
      width: 100%;
      height: 40px;
      border: 1px solid black;
      border-radius: 5px;
      // background-color: transparent;
      color: black;
      text-align: right;
      font-family: font1;
      font-size: 16px;
      //   font-weight: bold;
      // padding: 5px;
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
  }
}
</style>