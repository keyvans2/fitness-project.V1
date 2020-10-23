<template>
  <div>
    <!-- {{ submenus }} -->
    <li class="text-right text-light" @click="showSub(subId)">
      <i
        class="fas fa-chevron-down text-left float-left pr-3 pl-3 mt-1"
        v-if="subMenuNum != subId"
      ></i>
      <i
        class="fas fa-chevron-up text-left float-left pr-3 pl-3 mt-1"
        v-if="subMenuNum == subId"
        :class="{ 'text-info': subMenuNum == subId }"
      ></i>
      <span class="mr-3" :class="{ 'text-info': subMenuNum == subId }">
        <slot> </slot>
      </span>

      <div class="m-0 mt-2" v-if="subMenuNum == subId">
        <ul class="m-0 p-0">
          <!-- <li class="text-right pr-4" v-for="itm in submenu" :key="itm.id">
            {{ itm.title }}
          </li> -->
          <nuxt-link
            class="text-right pr-4"
            tag="li"
            :to="{ path: itm.link }"
            v-for="itm in submenu"
            :key="itm.id"
            ><a>{{ itm.title }}</a></nuxt-link
          >
          <!-- <li class="text-right pr-4">مشاهده کاربران</li>

          <li class="text-right pr-4">اضافه کردن</li> -->
        </ul>
      </div>
    </li>
    <!-- <li class="text-right text-light" @click="showSub(2)">
      <i
        class="fas fa-chevron-down text-left float-left pr-3 pl-3 mt-1"
        v-if="subMenuNum !== 2"
      ></i>
      <i
        class="fas fa-chevron-up text-left float-left pr-3 pl-3 mt-1"
        v-if="subMenuNum == 2"
        :class="{ 'text-info': subMenuNum == 2 }"
      ></i>
      <span class="mr-3" :class="{ 'text-info': subMenuNum == 2 }"> بلاگ </span>
      <div class="m-0 p-0" v-if="subMenuNum == 2">
        <ul class="m-0 p-0">
          <li class="text-right pr-4">مشاهده کاربران</li>

          <li class="text-right pr-4">اضافه کردن</li>
        </ul>
      </div>
    </li> -->
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.submenu);
  },
  data() {
    return {
      subMenuNum: 0,
      //   submenus: this.subMenu,
    };
  },
  props: ["submenu", "subId"],
  methods: {
    showSub(val) {
      //   return  this.subMenuNum=val
      return this.subMenuNum === val
        ? (this.subMenuNum = 0)
        : (this.subMenuNum = val);
    },
  },
};
</script>

<style lang="less">
li {
  width: 100%;
 
cursor: pointer;
  list-style: none;
  font-family: font1;
  font-size: 18px;
  //   position: relative;
  //   font-weight: bold;
  // text-align: center;
  i {
    font-size: 14px;
    vertical-align: middle;
  }
  div {
    width: 100%;
    float: right;
    margin: 0;
    background-color: rgb(1, 7, 12) !important;
    border: 1px solid rgba(255, 0, 0, 0.253);
    ul {
      width: 100%;
      li {
       
        a {
          width: 100%;
          font-size: 16px;
          color: #ffffff;
          text-decoration: none !important;
         
          &:hover {
            color: #ffffff;
            opacity: 0.6;
          }
        }
        // background-color: cyan;
      }
    }
  }
}
</style>