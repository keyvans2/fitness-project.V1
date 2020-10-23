<template>
  <div>
    <div class="editSliderFormCon">
      <div class="editSliderMain p-2">
        <div class="form-group">
          <label for="sliderTitle" class="float-right">: عنوان </label>
          <input type="text" id="sliderTitle" class="form-control" />
        </div>
        <div class="form-group">
          <label for="sliderTitle" class="float-right">: انتخاب عکس </label>
          <input
            type="file"
            id="sliderTitle"
            class="form-control d-none"
            ref="file"
            @change="preview($event)"
          />

          <button class="btn btn-block btn-info" @click="selectFile">
            انتخاب عکس <i class="fas fa-upload ml-2"></i>
          </button>
          <div class="imgPrew ">
              <img v-if="url" :src="url" class="img-fluid"  alt="" srcset="">
          </div>
          <button type="submit" class="btn btn-block btn-danger">ویرایش</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: "",
    };
  },
  methods: {
    selectFile() {
      this.$refs.file.click();
    },
    preview() {
      const file = event.target.files[0];
      this.url = URL.createObjectURL(file);
      //   console.log(event.target.files[0]);
    },
  },
};
</script>

<style scoped lang="less">
.editSliderFormCon {
  width: 100%;
  height: 100%;
  background-color: rgba(5, 20, 36, 0.5);
  position: absolute;
  z-index: 999;
  right: 0;
  top: 0;
  .editSliderMain {
    width: 50%;
    height: auto;
    margin: 30px auto;
    background-color: rgb(249, 252, 252);
    label {
      font-family: font1;
      font-weight: bold;
    }
    button {
      font-family: font1;
    }
    .imgPrew {
      width: 200px;
    //   height: 200px;
    //   background-color: dodgerblue;
      margin: 20px auto;
    }
  }
}
</style>