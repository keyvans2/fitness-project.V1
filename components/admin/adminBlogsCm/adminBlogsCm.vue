<template>
  <div class="container-fluid">
    <div class="row" dir="rtl">
      <div class="col-lg-12">
        <div class="table-responsive">
          <table class="table table-bordered table-striped table-hover">
            <thead>
              <tr>
                <td>آیدی</td>
                <td>عنوان</td>
                <td>متن</td>
                <td>دسته</td>
                <td>نویسنده</td>
                <td>تعداد بازدید</td>
                <td>تعداد لایک</td>
                <td>تاریخ ثبت</td>
                <td>حذف</td>
                <td>ویرایش</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="blog in blogs" :key="blog.id">
                <td>{{ blog.id }}</td>
                <td>{{ blog.title }}</td>
                <td>
                  <div id="textBlog">
                    {{ blog.text }}
                  </div>
                </td>
                <td>{{ blog.category }}</td>
                <td>{{ blog.author }}</td>
                <td>{{ blog.seenCount }}</td>
                <td>{{ blog.likeCount }}</td>
                <td>{{ blog.registerDate }}</td>
                <td><i class="fas fa-trash-alt text-danger"></i></td>
                <td>
                  <i class="far fa-edit text-primary" @click="editBlog"></i>
                </td>
              </tr>
              <tr v-for="blog in blogs" :key="blog.id">
                <td>{{ blog.id }}</td>
                <td>{{ blog.title }}</td>
                <td>
                 <div id="textBlog">
                    {{ blog.text }}
                 </div>
                </td>
                <td>{{ blog.category }}</td>
                <td>{{ blog.author }}</td>
                <td>{{ blog.seenCount }}</td>
                <td>{{ blog.likeCount }}</td>
                <td>{{ blog.registerDate }}</td>
                <td><i class="fas fa-trash-alt text-danger"></i></td>
                <td>
                  <i class="far fa-edit text-primary" @click="editBlog"></i>
                </td>
              </tr>
              <!-- <tr v-for="user in users" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.fname }}</td>
                <td>{{ user.username }}</td>
                <td>{{ user.city }}</td>
                <td>{{ user.mobile }}</td>
                <td>{{ user.target }}</td>
                <td>{{ user.birthday }}</td>
                <td>{{ user.registerdate }}</td>
                <td>
                  <i class="fas fa-trash-alt text-danger" @click="del"></i>
                </td>
                <td>
                  <i
                    class="far fa-edit text-primary"
                    @click="showEditForm(user)"
                  ></i>
                </td>
              </tr> -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [
        {
          id: 1,
          title: "زمان انجام ورزش هوازی",
          text:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
          category: "بدنسازی",
          author: "مهدی حسنی",
          seenCount: 10,
          likeCount: 20,
          registerDate: "1399/2/25",
        },
      ],
    };
  },
  methods: {
    editBlog() {
      this.$emit("openEdit", true);
    },
  },
};
</script>

<style lang="less">
.table {
  // table-layout: fixed;
  font-family: font1;
  text-align: center;
  white-space: nowrap !important;
  #textBlog {
    width: 200px !important;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  i {
    cursor: pointer;
  }
}
</style>