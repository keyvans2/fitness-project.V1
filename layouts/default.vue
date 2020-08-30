<template>
  <div>

    <header-cm @toggleM="toggleM"/>
    <bredcrumb/>
    <second-nav-lay/>
    <toggle-menu @close="close" :toggle="toggle"/>
    <hero-cm/>

    <nuxt/>
    <footer-cm/>
  </div>

</template>
<script>
  import heroCm from '~/components/heroCm/heroCm.vue'
  import headerCm from '~/components/headerCm/headerCm.vue'
  import toggleMenu from '~/components/toggleMenu/toggleMenu.vue'
  import secondNavLay from '~/components/secondNavLay/secondNavLay.vue'
  import footerCm from "~/components/footer/footer.vue";
import bredcrumb from "~/components/bredcrumb/bredcrumb.vue"
  export default {
    data() {
      return {
        toggle: false,
      }
    },
    components: {
      footerCm,
      heroCm,
      headerCm,
      toggleMenu,
      secondNavLay,
      bredcrumb
    },
    methods: {
      toggleM(val) {
        this.toggle = val;

      },
      close(val) {
        this.toggle = val
      }
    }, mounted() {
      console.log('test')
    }
  }
</script>
<style lang="less">
  body {
    /*background-image: url("../assets/images/hero-bg.jpg");*/
    /*background-position: center center;*/
    /*background-repeat: no-repeat;*/
    /*background-size: cover;*/
    /*height: 800px;*/
    /*background-attachment: fixed;*/

    /*height: 880px;*/
    /*padding-top: 335px;*/
  }

</style>
