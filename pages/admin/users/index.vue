<template>
  <div dir="rtl" class="container-fluid">
    <edit-user-cm
      :toggle="toggleEdForm"
      @close="T"
      :editDetail="editItemClicked"
    />
    <div class="table-responsive">
      <table class="table table-bordered table-striped table-hover">
        <thead>
          <tr>
            <td>آیدی</td>
            <td>نام</td>
            <td>نام خانوادگی</td>
            <td>نام کاربری</td>
            <td>ایمیل</td>
            <td>نام شهر</td>
            <td>موبایل</td>
            <td>هدف</td>
            <td>تاریخ تولد</td>
            <td>تاریخ ثبت نام</td>
            <td>حدف</td>
            <td>ویرایش</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.fname }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.city }}</td>
            <td>{{ user.mobile }}</td>
            <td>{{ user.target }}</td>
            <td>{{ user.birthday }}</td>
            <td>{{ user.registerdate }}</td>
            <td><i class="fas fa-trash-alt text-danger" @click="del"></i></td>
            <td>
              <i
                class="far fa-edit text-primary"
                @click="showEditForm(user)"
              ></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import editUserCm from "@/components/admin/editUserCm/editUserCm";

export default {
  data() {
    return {
      toggleEdForm: false,
      editItemClicked: "",
      users: [
        {
          id: 1,
          name: "حسن",
          fname: "بابامحمودی",
          username: "hassanbaba",
          email: "hassanbaba@gmail.com",
          city: "شیراز",
          mobile: "09380723587",
          target: "چربی سوزی",
          birthday: "1372/2/28",
          registerdate: "1372/2/28",
        },
        {
          id: 2,
          name: "میلاد",
          fname: "حسنی",
          username: "miladH",
          email: "milad@gmail.com",
          city: "اهواز",
          mobile: "09380724187",
          target: "افزایش وزن",
          birthday: "1372/2/28",
          registerdate: "1372/2/28",
        },
        {
          id: 3,
          name: "مصطفی",
          fname: "ایرانی",
          username: "most",
          email: "mostafa@gmail.com",
          city: "تبریز",
          mobile: "09380453587",
          target: "افزایش حجم",
          birthday: "1372/2/18",
          registerdate: "1372/2/24",
        },
      ],
    };
  },
  components: {
    editUserCm,
  },
  methods: {
    del() {
      let d = confirm("آیا برای حذف مطمنی؟");
      if (d) {
        return true;
      } else {
        return false;
      }
    },
    T() {
      this.toggleEdForm = false;
    },
    showEditForm(val) {
      this.toggleEdForm = !this.toggleEdForm;
      this.editItemClicked = val;
    },
  },
};
</script>

<style lang="less">
table {
  font-family: font1;
  text-align: center;
  white-space: nowrap;
  i {
    cursor: pointer;
  }
}
</style>