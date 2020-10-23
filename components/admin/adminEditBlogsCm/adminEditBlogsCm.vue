<template>
  <div>
    <div class="adminEditBlogContainer" v-show="fadeEdit">
      <div class="container-fluid">
        <div class="row mt-3">
          <div class="pt-3 offset-lg-3 col-lg-5 bg-light">
            <div class="closeDiv">
              <i class="fas fa-times text-danger" @click="closeEditBlog"></i>
            </div>
            <form action="#">
              <div class="form-group">
                <label for="title" class="float-right">: عنوان </label>
                <input type="text" id="title" class="form-control" />
              </div>

              <label for="text" class="float-right">: متن </label>
              <section class="container p-0 mt-5 mb-2" id="text">
                <div
                  class="quill-editor"
                  :content="content"
                  @change="onEditorChange($event)"
                  @blur="onEditorBlur($event)"
                  @focus="onEditorFocus($event)"
                  @ready="onEditorReady($event)"
                  v-quill:myQuillEditor="editorOption"
                ></div>
              </section>
              <div class="form-group">
                <label for="cats" class="float-right">: دسته بندی </label>
                <select id="cats" class="form-control">
                  <option value="">نمونه</option>
                  <option value="">نمونه</option>
                  <option value="">نمونه</option>
                </select>
              </div>
              <button type="submit" class="btn btn-block btn-danger mb-2">
                ویرایش
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fadeEdit: {
      type: Boolean,
    },
  },
  data() {
    var toolbarOptions = [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction

      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],

      ["clean"], // remove formatting button
    ];
    return {
      content: "<p>I am Example</p>",
      editorOption: {
        // some quill options
        modules: {
          toolbar: toolbarOptions,
        },
      },
    };
  },
  mounted() {
    console.log("app init, my quill insrance object is:", this.myQuillEditor);
    setTimeout(() => {
      this.content = "i am changed";
    }, 3000);
  },
  methods: {
    closeEditBlog() {
      this.$emit("closeEditBlog", false);
    },
    onEditorBlur(editor) {
      console.log("editor blur!", editor);
    },
    onEditorFocus(editor) {
      console.log("editor focus!", editor);
    },
    onEditorReady(editor) {
      console.log("editor ready!", editor);
    },
    onEditorChange({ editor, html, text }) {
      console.log("editor change!", editor, html, text);
      this.content = html;
    },
  },
};
</script>

<style lang="less" scoped>
.adminEditBlogContainer {
  width: 100%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 999;
  background-color: rgba(5, 20, 36, 0.5);
  label {
    font-family: font1;
    font-weight: bold;
  }
  input[type="text"] {
    border-color: rgba(30, 143, 255, 0.637) !important;
  }
  select {
    border-color: rgba(30, 143, 255, 0.637) !important;
    font-family: font1;
    direction: rtl;
    font-weight: bolder !important;
    option {
      font-weight: bolder !important;
    }
  }
  button {
    font-family: font1;
    //   font-weight: bold;
    //   font-size: 14px;
  }
  .container {
    width: 100%;
    margin: 0 auto;
    padding: 50px 0;
    border: 1px solid rgba(30, 143, 255, 0.637);
    .quill-editor {
      min-height: 200px;
      height: 100%;
      overflow-y: auto;
    }
  }
  .closeDiv {
    position: absolute;
  }
}
</style>