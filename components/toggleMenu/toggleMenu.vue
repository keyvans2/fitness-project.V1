<template>
  <div>
    <transition name="fade" mode="out-in">
      <div class="toggleMenu" v-if="toggle">
        <i class="fas fa-arrow-up text-light ml-3 pt-2" @click="close"></i>
        <ul class="menu p-5" dir="rtl">
          <li
            class="ms"
            v-for="(title, i) in mobileMenu"
            @click="activeAcardeon(title)"
            :key="i"
          >
            <i
              class="fas fa-chevron-up float-left mt-2 text-light"
              v-if="current === title.id"
            ></i>

            <i
              class="fas fa-chevron-down float-left mt-2 text-light"
              v-else
            ></i>
            <a class="pb-3">
              {{ title.title }}
              <second-lay-mobile
                :class="[{ activate: current === title.id }]"
                class="secondLm"
              />
            </a>
          </li>
          <!--                    <n-link to="/contact" active-class="test" tag="li" class="ms"><a>تغذیه</a></n-link>-->
          <!--                    <n-link to="/about" active-class="test" tag="li" class="ms"><a> بدنسازی</a></n-link>-->
          <!--                    <n-link to="test" active-class="test" tag="li" class="ms"><a> زیبایی</a></n-link>-->
          <!--                    <n-link to="test2" active-class="test" tag="li" class="ms"><a> مشاوره و دریافت برنامه</a></n-link>-->
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import SecondLayMobile from "../secondLayMobile/secondLayMobile";

export default {
  data() {
    return {
      mobileMenu: [
        { id: 1, title: "خانه" },
        { id: 2, title: "اطلاعات ورزشی" },
        { id: 3, title: "تغذیه" },
        { id: 4, title: "بدنسازی" },
        { id: 5, title: "زیبایی" },
      ],
      activate: false,
      current: "",
    };
  },
  components: { SecondLayMobile },
  mounted() {
    // console.log(this.toggle)
  },
  props: ["toggle"],
  // toggle: false,
  methods: {
    close() {
      this.$emit("close", false);
    },
    activeAcardeon(val) {
      if (this.current === "") {
        this.current = val.id;
      } else {
        if (this.current === val.id) {
          this.current = "";
        } else {
          this.current = val.id;
        }
      }

      // return this.activate === false ? this.activate = true : this.activate = false
    },
    // fr(val) {
    //     let t = this.mobileMenu.find(function (v) {
    //         return 2 === val
    //     });
    //     if (t) {
    //         alert('dv')
    //     }
    // }
  },
};
</script>
<style lang="less">
.toggleMenu {
  width: 300px;
  height: 800px;
  top: 0;
  right: 0;
  position: fixed;
  z-index: 999;
  background-image: url("~assets/images/hero-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  overflow-y: hidden;
  i {
    cursor: pointer;
  }

  ul {
    list-style: none;

    .ms {
      text-align: right;
      padding-bottom: 5px;
      border-bottom: 1px solid #ffffff;
      width: 100%;
      cursor: pointer;

      a {
        color: #ffffff;
        font-family: font1;
        text-decoration: none;
        font-weight: 500;
        width: 100%;
        /*display: inline-block;*/

        &:hover {
          opacity: 0.8;
        }

        &:hover > .secondLm {
          /*max-height: 200px;*/
          /*transition: max-height 0.400s ease-out;*/
        }
      }
    }
  }
}

.activate {
  max-height: 200px;
  transition: max-height 0.4s ease-out;
}

// .fade-enter {
//     opacity: 0;

// }

// .fade-enter-active {
//     transition: opacity 0.500s;
//     animation: slideIn 0.500s cubic-bezier(.88, .86, .49, 1.95) forwards;
// }

// .fade-leave-active {
//     transition: opacity 0.500s;
//     animation: slideOut 0.500s cubic-bezier(.98, .24, .49, 1.95) forwards;
// }

// .fade-leave-to {
//     opacity: 0;
// }

@keyframes slideIn {
  from {
    transform: translateY(-30px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slideOut {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100px);
  }
}
</style>
