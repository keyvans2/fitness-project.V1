<template>
  <div class="container-fluid">
    <div class="row mt-4">
      <div class="offset-lg-3 col-lg-6">
        <adminAddBlog />
      </div>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue';

import adminAddBlog from "@/components/admin/adminBlogsCm/adminAddBlog";
export default {
  components: {
    adminAddBlog,
  },
  data() {
    return {
     
    };
  },
};
</script>

<style lang="less">
</style>