<template>
  <div>
    <transition name="fadeIn">
      <div class="editFormCon" dir="ltr" v-if="toggle">
        {{ editDetail.target }}
        <div class="editFormDiv p-4">
          <div class="closeDiv" @click="close">
            <i class="fas fa-times text-danger"></i>
          </div>
          <form action="#" @submit.prevent="edit">
            <div class="form-group">
              <label for="name" class="float-right"> : نام </label>
              <input
                type="text"
                class="form-control"
                id="name"
                name="name"
                ref="name"
                v-focus
                :value="editDetail.name"
              />
            </div>
            <div class="form-group">
              <label for="fname" class="float-right">: نام خانوادگی </label>
              <input
                type="text"
                class="form-control"
                id="fname"
                name="fname"
                :value="editDetail.fname"
              />
            </div>
            <div class="form-group">
              <label for="username" class="float-right"> : نام کاربری</label>
              <input
                type="text"
                class="form-control"
                id="username"
                name="username"
                :value="editDetail.username"
              />
            </div>
            <div class="form-group">
              <label for="city" class="float-right">: نام شهر </label>
              <input
                type="text"
                class="form-control"
                id="city"
                name="city"
                :value="editDetail.city"
              />
            </div>
            <div class="form-group">
              <label for="mobile" class="float-right">: موبایل </label>
              <input
                type="number"
                class="form-control"
                id="mobile"
                name="mobile"
                :value="editDetail.mobile"
              />
            </div>
            <div class="form-group">
              <label for="target" class="float-right">: هدف</label>
              <select
                name="target"
                id="target"
                class="form-control text-right"
                dir="rtl"
              >
                <option>معمولی</option>
                <option>کاهش وزن</option>
                <option>افزایش حجم</option>
                <option>افزایش وزن</option>
              </select>
            </div>
            <div class="form-group">
              <label for="birthday" class="float-right">: تاریخ تولد </label>
              <input
                type="date"
                class="form-control"
                id="birthday"
                name="birthday"
                v-model="selectedBirthday"
              />
            </div>
            <div class="form-group">
              <label for="registerDate" class="float-right">
                : تاریخ ثبت نام
              </label>
              <input
                type="date"
                class="form-control"
                id="registerDate"
                name="registerDate"
              />
            </div>
            <button type="submit" class="btn btn-block btn-danger">
              ویرایش
            </button>
          </form>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  directives: {
    focus: {
      // directive definition
      inserted: function (el) {
        el.focus();
      },
    },
  },
  beforeMount() {
    // this.selectedTarget = this.editDetail.target;
    // this.$refs.selectedItem.value = "hiih";
  },
  mounted() {
    // this.selectedTarget= this.editDetail.target
    // this.$refs["name"].focus();
  },
  data() {
    return {
      editForm: false,
      selectedBirthday:JSON.stringify( this.editDetail).birthday,
    };
  },
  props: {
    toggle: {
      type: Boolean,
    },
    editDetail: {
      type: [Object, Array,String],
    },
  },
  methods: {
    edit() {
      //   console.log("ok");
    },
    close() {
      this.$emit("close", false);
    },
  },
};
</script>

<style lang="less">
.editFormCon {
  width: 100%;
  height: 100%;
  right: 0;
  background-color: rgba(5, 20, 36, 0.5);
  position: absolute;
  z-index: 999;
  .editFormDiv {
    width: 50%;
    height: 400px;
    overflow-y: scroll;
    margin: 30px auto;
    background-color: rgb(249, 252, 252);
    .closeDiv {
      cursor: pointer;
    }
    input {
      text-align: right;
      font-family: font1;
    }
    label {
      font-family: font1;
      font-size: 16px;
      font-weight: bold;
    }
    select {
      font-family: font1;
    }
    button[type="submit"] {
      font-family: font1;
    }
  }
}
</style>