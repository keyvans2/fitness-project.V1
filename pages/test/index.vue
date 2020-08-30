<template>
  <div class="p-5">
   
    <div class="progress">

      <div class="progressCurrent" :style="checkProgress">

      </div>
      <!-- <div class="progressCurrent">

      </div>
      <div class="progressCurrent">

      </div>
      <div class="progressCurrent">

      </div>
      <div class="progressCurrent">

      </div> -->

    </div>
    <div class="container">
      <div class="row mt-3">
        <transition name="fadeIn" mode="out-in">
          <div class="col-lg-12" v-if="current==1">
            <form action="">
              <div class="form-group">
                <input type="text" name="" id="" class="form-control mb-1" placeholder="name...">
                <input type="text" name="" id="" class="form-control" placeholder="family name...">
              </div>
            </form>
          </div>
          <div class="col-lg-12" v-if="current==2" :key="2">
            <form action="">
              <div class="form-group">
                <input type="text" name="" id="" class="form-control mb-1" placeholder="name...">
                <input type="text" name="" id="" class="form-control" placeholder="family name...">
              </div>
            </form>
          </div>
          <div class="col-lg-12" v-if="current==3" :key="3">
            <form action="">
              <div class="form-group">
                <input type="text" name="" id="" class="form-control mb-1" placeholder="name...">
                <input type="text" name="" id="" class="form-control" placeholder="family name...">
              </div>
            </form>
          </div>
        </transition>
      </div>
    </div>
    <button class="btn btn-primary mt-2" @click="addNum" :disabled="current==5">next {{current}}</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        current: 1,
        state: true
      }
    },
    computed: {
      checkProgress() {
        switch (this.current) {
          case 1:
            return {
              width: 33.3 + '%'
            }
            break;
          case 2:
            return {
              width: 66.6 + '%'
            }
            break;
          case 3:
            return {
              width: 99.9 + '%'
            }
            break;

          default:
            break;
        }
      }
    },
    methods: {
      addNum() {
        if (this.current >= 3) {
          return false
        }
        if (this.current <= 0) {
          return false
        }
        this.current += 1
      }
    }
  }
</script>

<style lang="less">
  .progress {
    width: 100%;
    height: 5px;
    background-color: rgb(185, 207, 228);
    position: relative;
    z-index: 0;

    // .pNum{
    //         // display: block;
    //         width: 20px;
    //         height: 100px;
    //         background-color: red;
    //         border-radius: 50%;
    //         position: absolute;
    //         z-index: 2;
    //         top:0;
    //         padding-top: 9px;
    //         text-align: center;
    //         // margin: 0;
    //     }
    .progressCurrent {
      width: 20%;
      height: 100%;
      background-color: dodgerblue;
      transition: width 0.50s;
    }
    }

</style>