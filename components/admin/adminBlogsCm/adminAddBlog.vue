<template>
  <div>
    <form>
      <div class="form-group">
        <label for="title" class="float-right">: عنوان</label>
        <input type="text" id="title" class="form-control" />
      </div>
      <label for="text" class="float-right">: متن</label>
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
      <!-- <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor> -->

      <!-- <ck-editor
          v-if="test"
          :editor="editor"
          v-model="editorData"
          :config="editorConfig"
        ></ck-editor> -->

      <div class="form-group">
        <label for="cat" class="float-right">: دسته بندی</label>

        <select class="form-control" id="cat">
          <option value="">بدنسازی</option>
          <option value="">تغذیه</option>
          <option value="">تغذیه</option>
        </select>
      </div>
      <button class="btn btn-block btn-danger">اضافه کن</button>
    </form>
  </div>
</template>

<script>
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
//  import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  mounted() {
    // if (process.client) {
    //   this.test=true
    // }
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
label {
  font-family: font1;
  font-size: 18px;
  font-weight: bold;
}
input[type="text"],
input[type="number"],
input[type="date"],
textarea,
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
</style>