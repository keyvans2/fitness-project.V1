<template>
  <div>
    <adminBlogsCm @openEdit="fadeEdit = true" />
    <adminEditBlogsCm :fadeEdit="fadeEdit" @closeEditBlog="fadeEdit=false"/>
  </div>
</template>

<script>
import adminBlogsCm from "@/components/admin/adminBlogsCm/adminBlogsCm";
import adminEditBlogsCm from "@/components/admin/adminEditBlogsCm/adminEditBlogsCm";
export default {
  data() {
    return {
      fadeEdit: false,
    };
  },
  components: {
    adminBlogsCm,
    adminEditBlogsCm,
  },
};
</script>

<style lang="less">
</style>