<template>
  <div>
    <div class="adminContainer">
      <div class="adminRightMenu">
        <div class="loggedInUserImg"></div>
        <div class="adminName" ref="name">
          <p
            @mouseenter="scrollName"
            @mouseleave="removeScroll"
            title="حسن احمدپور اصل اصل"
          >
            حسن احمدپور اصل اصل <i class="fa fa-user"></i>
          </p>
        </div>
        <div class="adminRightMenuItemsCon mt-5 pt-2">
          <ul class="p-0">
            <rightMenuCm
              v-for="itm in MenuItems"
              :key="itm.id"
              :submenu="itm.subMenus"
              subId="itm.id"
            >
              {{ itm.title }}
            </rightMenuCm>
          </ul>
        </div>
      </div>
      <div class="adminLeftPart">
           <nuxt-child/>
      </div>
    </div>
  </div>
</template>

<script>
import rightMenuCm from "../components/admin/rightMenuCm/rightMenuCm";
export default {
  mounted() {
    this.$refs.name.scrollLeft = this.scrollNum;
  },
  components: {
    rightMenuCm,
  },
  data() {
    return {
      MenuItems: [
        {
          id: 1,
          title: "کاربران",
          subMenus: [
            { id: 1, title: "مشاهده", link: "/admin/users" },
            { id: 2, title: "اضافه کردن", link: "/admin/users/addUser" },
          ],
        },
        {
          id: 2,
          title:'بلاگ',
          subMenus: [
            { id: 1, title: "مشاهده", link: "/admin/blogs" },
            { id: 2, title: "اضافه کردن", link: "/admin/blogs/addBlog" },
          ],
        },
        {
          id: 3,
          title:'اسلایدر',
          subMenus: [
            { id: 1, title: "مشاهده", link: "/admin/mainSlider" },
            { id: 2, title: "اضافه کردن", link: "/admin/mainSlider/addSlider" },
          ],
        },
      ],
      scroll: "",
      scrollNum: 100,
    };
  },
  methods: {
    scrollName() {
      this.scrollNum = 0;
      this.$refs.name.scrollLeft = this.scrollNum;
    },
    removeScroll() {
      this.scrollNum = 100;
      this.$refs.name.scrollLeft = this.scrollNum;
    },
  },
};
</script>

<style lang="less">
.adminContainer {
  width: 100%;
  height: 100vh;
  // background-color: dodgerblue;
  .adminRightMenu {
    width: 10%;
    height: 100%;
    background-image: linear-gradient(rgba(1, 9, 41, 0.856), rgb(22, 22, 6));
    float: right;
    .adminName {
      margin: -20px auto;
      width: 100px;
      overflow-x: hidden;
      white-space: nowrap;
      scroll-behavior: smooth;
      p {
        margin: 0;
        padding: 0;
        font-size: 18px;
        font-family: font1;
        text-align: left;
        float: left;
        color: #ffffff;
        white-space: nowrap;

        i {
          color: rgb(160, 252, 252);
          margin-left: 10px;
          text-align: right;
        }
      }
    }
    .loggedInUserImg {
      width: 100px;
      height: 100px;
      // background-color: blue;
      margin: 30px auto;
      border-radius: 50%;
      background-image: url("../assets/images/admin.jpg");
      background-size: cover;
    }
    .adminRightMenuItemsCon {
      width: 100%;
      height: 300px;
      border-top: 1px solid #ffffff44;
      // background-color: red;
    }
  }
  .adminLeftPart {
    width: 90%;
    height: 100%;
    // background-color: cyan;
    float: left;
  }
}

@media only screen and (max-width: 1100px) {
  .adminRightMenu {
    width: 15% !important;
  }
  .adminLeftPart{
    width:85%!important;
  }
}
@media only screen and (max-width: 800px) {
  .adminRightMenu {
    width: 18% !important;
  }
  .adminLeftPart{
    width: 82%!important;
  }
}
@media only screen and (max-width: 640px) {
  .adminRightMenu {
    width: 25% !important;
  }
  .adminLeftPart{
    width: 75%!important;
  }
}
</style>