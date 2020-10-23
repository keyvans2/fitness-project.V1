<template>
  <div class="container-fluid">
    <editSliderFormCm/>
    <div class="row" dir="rtl">
      <div class="col-lg-12 table-responsive">
        <table
          class="table table-bordered table-striped text-center table-hovered"
        >
          <thead>
            <tr>
              <td>آیدی</td>
              <td>عنوان</td>
              <td>تصویر</td>
              <td>حذف</td>
              <td>ویرایش</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>فواید مصرف کراتین</td>
              <td>
                <img
                  src="~assets/images/creatine.jpg"
                  title="فواید  مصرف کراتین"
                  alt="فواید  مصرف کراتین"
                  width="300px"
                  class="img-fluid"
                />
              </td>
              <td><i class="fas fa-trash-alt text-danger"></i></td>
              <td>
                <i class="far fa-edit text-primary"></i>
              </td>
            </tr>
            <tr>
              <td>۲</td>
              <td>میزان مصرف کراتین</td>
              <td>
                <img
                  src="~assets/images/creatine2.png"
                  title="میزان مصرف کراتین"
                  alt="میزان مصرف کراتین"
                  width="300px"
                  class="img-fluid"
                />
              </td>
              <td><i class="fas fa-trash-alt text-danger"></i></td>
              <td>
                <i class="far fa-edit text-primary"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import editSliderFormCm from "~/components/admin/editSliderFormCm/editSliderFormCm";

export default {
  components: {
    editSliderFormCm,
  },
};
</script>
<style lang="less">
table {
  font-family: font1;
}
</style>