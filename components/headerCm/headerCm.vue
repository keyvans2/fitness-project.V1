<template>
  <div class="m-0 p-0">
    <header  :class="{scroll:scroll}">
      <div class="container-fluid">
        <transition name="scale" mode="out-in">
          <div class="mobile-search" v-if="fadeInput">
            <form action>
              <label>
                <input type="text" placeholder="دنبال چی میگردی؟" />
              </label>
              <div>
                <i @click="fadeInput=!fadeInput" class="fas fa-times fI"></i>
                <button class="text-warning">
                  <i class="fas fa-arrow-right sI"></i>
                </button>
              </div>
            </form>
          </div>
        </transition>

        <div class="logo">
          <a href="#">
            <img src="~/assets/images/logo.png" alt />
          </a>
        </div>
        <p id="hamburger" class="pt-4 mt-1 text-right text-light" @click="change">
          <i class="fas fa-bars"></i>
        </p>
        <nav class="mb-0">
          <ul class="menu pt-4 " dir="rtl">
            <nuxt-link
              to="about"
              active-class="test"
              tag="li"
              v-for="(title , i) in navMenu"
              :key="i"
             
              style="height:100%;"
            >
              <a class="pb-3" :class="{link:scroll}">{{title.title}}</a>
              <!--              <transition name="fade" mode="out-in">-->
              <!--                <second-nav-lay/>-->
              <!--              </transition>-->
            </nuxt-link>
          </ul>
        </nav>
        <div id="signUpAndSearch">
          <div class="search p-0">
            <form action="#">
              <input
                type="text"
                class="text-right"
                placeholder="... جست و جو"
                :class="{link:scroll,signUpAndSearch:scroll}"
              />
              <i class="fab fa-searchengin magnifier1"></i>
              <i class="fab fa-searchengin magnifier2" @click="fadeInput=!fadeInput"></i>
              <!--                            <img class="magnifier1" src="../../assets/images/search.svg" width="30px" height="30px"-->
              <!--                                 alt="">-->
              <!--                            <img @click="fadeInput=!fadeInput" class="magnifier2" src="../../assets/images/search.svg"-->
              <!--                                 width="30px"-->
              <!--                                 height="30px" alt="">-->
            </form>
          </div>
          <div class="signUp mt-1">
            <!-- <a
              href="#"
              class="p-2 mt-3"
              :class="{link:scroll,signUpAndSearch:scroll}"
            >ورود | ثبت نام</a>-->
            <nuxt-link
              :to="{name:'register'}"
              class="p-2 mt-3"
              :class="{link:scroll,signUpAndSearch:scroll}"
            >ورود | ثبت نام</nuxt-link>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import secondNavLay from "~/components/secondNavLay/secondNavLay.vue";

export default {
  mounted() {
    window.pageYOffset >= 100 ? (this.scroll = true) : (this.scroll = false);
    window.addEventListener("scroll", this.fixPos);
  },
  props: {},
  data() {
    return {
      navMenu: [
        {
          id: 1,
          title: "خانه",
        },
        {
          id: 1,
          title: "اطلاعات ورزشی",
        },
        {
          id: 1,
          title: "تغذیه",
        },
        {
          id: 1,
          title: "بدنسازی",
        },
        {
          id: 1,
          title: "زیبایی",
        },
        {
          id: 1,
          title: "مشاوره و دریافت برنامه",
        },
      ],
      fadeInput: false,
      toggle: false,
      currentLay: "",
      scroll: false,
    };
  },
  components: {
    secondNavLay,
  },
  methods: {
    change() {
      this.toggle = true;
      this.$emit("toggleM", this.toggle);
    },
    secondLay(val) {
      // if (this.currentLay === val) {
      //   this.currentLay = ''
      // }
      this.currentLay = val;
    },
    fixPos() {
      if (process.client) {
        window.pageYOffset >= 100
          ? (this.scroll = true)
          : (this.scroll = false);
      }
    },
  },
  directives: {
    created: {
      focus(el, binding) {
        el.focus();
      },
    },
  },
  computed: {
    checkScroll() {
      return this.scroll === true ? true : false;
    },
  },
};
</script>
<style lang="less">
header {
  width: 100%;
  height: auto;
  float: right;
  border-bottom: 1px solid rgba(233, 89, 89, 0.2);

  // position: relative;
  // background-color: dodgerblue;
  .mobile-search {
    width: 100%;
    height: 115px;
    left: 0;
    top: 0;
    position: absolute;
    z-index: 999;
    transform-origin: left;

    div {
      border-top: 5px solid #ffffff;
      position: absolute;
      z-index: 999;
      right: 0;
      bottom: 0;
      width: 50px;
      height: 30px;
      background-color: #ffffff;

      .fI {
        color: red;
        display: block;
        padding: 5px;
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 999;
      }

      button {
        border: none;
        background-color: transparent;
        position: absolute;
        right: 0;
        bottom: 0;
        z-index: 999;
        outline-style: none;
      }
    }

    input {
      color: black;
      text-align: center;
      z-index: 999;
      position: absolute;
      left: 0;
      top: -5px;
      width: 100%;
      height: 90px;
      border: none;
      outline-style: unset;
    }
  }

  ::-webkit-input-placeholder {
    /* Edge */
    color: black;
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: black;
  }

  ::placeholder {
    color: black !important;
    font-family: font1;
    /*font-family: font1;*/
    font-size: 18px;
  }

  .logo {
    float: right;
    margin: 5px auto;
    padding: 18px 0 16px 0;
  }

  #hamburger {
    position: absolute;
    right: 125px;
    cursor: pointer;
  }

  nav {
    float: right;
    height: 100%;
    .menu {
      display: inline-block;
      height: 100%;
      
      li {
        display: inline-block;
        margin-right: 27px;
        height: 100%;
        &:hover > div {
          /*opacity: 1 !important;*/
          visibility: visible;
          /*display: block;*/
        }

        a {
          font-size: 20px;
          font-weight: bold;
          color: black;
          /*font-weight: 600;*/
          padding: 0 2px 30px 2px;
          // display: block;
          // background-color: red;
          height: 100%;
          // padding-bottom: 50px;
          text-decoration: none;
          font-family: font1, serif;
          transition: opacity 0.5s;

          &:hover {
            border-bottom: 3px solid red;
            padding-bottom: 9px;
          }
        }
      }
    }
  }

  .search {
    float: right;
    position: absolute;
    left: 130px;
    top: 20px;

    input {
      width: 300px;
      height: 47px;
      background-color: transparent;
      border: 3px solid red;
      padding: 10px 40px 13px 0;
      box-sizing: border-box;
      font-family: font1;
      color: black;
      outline-style: none;
    }

    ::-webkit-input-placeholder {
      /* Edge */
      color: black;
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: black;
    }

    ::placeholder {
      color: black;
      /*font-family: font1;*/
      font-size: 14px;
    }

    .magnifier1 {
      font-size: 22px;
      right: 10px;
      position: absolute;
      top: 14px;
      /*color: #ffffff;*/
      cursor: pointer;
    }

    .magnifier2 {
      font-size: 22px;
      right: 10px;
      position: absolute;
      top: 14px;
      /*color: #ffffff;*/
      cursor: pointer;
    }

    img {
      position: absolute;
      right: 10px;
      top: 7px;
      cursor: pointer;
    }
  }

  .signUp {
    width: 40%;
    background-color: dodgerblue;
    height: auto;

    a {
      display: block;
      color: black;
      font-family: font1, serif;
      border: 3px solid red;
      float: left;
      font-weight: bold;
      text-decoration: none;
      &:hover {
        // opacity: 0.6;
        border-color: rgba(255, 0, 0, 0.26);
        transition: border 0.2s;
      }
    }
  }
}

@media only screen and (max-width: 940px) {
  nav {
    display: none !important;
  }
}

@media only screen and (min-width: 940px) {
  #hamburger {
    display: none;
  }

  .toggleMenu {
    display: none;
  }
}

@media only screen and (max-width: 1200px) {
  .search {
    input {
      display: none;
    }

    .magnifier1 {
      left: 5px;
      display: none !important;
    }

    .magnifier2 {
      display: block;
      left: 5px;
    }
  }
}

@media only screen and (min-width: 1200px) {
  .magnifier1 {
    right: 5px;
    display: block !important;
  }

  .magnifier2 {
    display: none;
    left: 5px;
  }

  .mobile-search {
    display: none;
  }
}

.scale-enter {
  opacity: 0;
}

.scale-enter-active {
  transition: opacity 0.5s;
  animation: scaleIn 0.2s ease-in forwards;
}

.scale-leave-active {
  transition: opacity 0.2s;
  animation: scaleOut 0.2s ease-out forwards;
}

.scale-leave-to {
  opacity: 0;
}

@keyframes scaleIn {
  from {
    transform: translateY(-30px);
  }

  to {
    transform: translateY(0);
  }
}

// @keyframes scaleOut {
//   from {
//     transform: translateY(0);
//   }

//   to {
//     transform: translateY(-30px);
//   }
// }

.scroll {
  position: fixed !important;
  // height: 70px;
  z-index: 999;
  background-color: rgb(103, 103, 250);
  // transition: 1s;
  animation: show 0.2s linear forwards;
  // box-shadow: 0 8px 6px -6px black;
  nav {
    menu {
      ul {
        display: none;
        li {
          a {
            color: orange !important;
          }
        }
      }
    }
  }
}
.link {
  #linkOnScroll;
}
.signUpAndSearch {
  #searchAndSignUpBorder;
}
@keyframes show {
  from {
    transform: translateY(-30px);
  }
  to {
    transform: translateY(0);
  }
}
</style>