<template>
  <Form @submit="submitBook" :validation-schema="bookFormSchema">
    <div class="form-group">
      <label for="masach">Mã Sách</label>
      <Field
        name="masach"
        type="text"
        class="form-control"
        v-model="bookLocal.masach"
      />
      <ErrorMessage name="masach" class="error-feedback" />
    </div>
    <div class="form-group">
      <label for="tensach">Tên Sách</label>
      <Field
        name="tensach"
        type="text"
        class="form-control"
        v-model="bookLocal.tensach"
      />
      <ErrorMessage name="tensach" class="error-feedback" />
    </div>
    <div class="form-group">
      <label for="dongia">Đơn Giá</label>
      <Field
        name="dongia"
        type="text"
        class="form-control"
        v-model="bookLocal.dongia"
      />
      <ErrorMessage name="dongia" class="error-feedback" />
    </div>
    <div class="form-group">
      <label for="soquyen">Số Quyển</label>
      <Field
        name="soquyen"
        type="text"
        class="form-control"
        v-model="bookLocal.soquyen"
      />
      <ErrorMessage name="soquyen" class="error-feedback" />
    </div>
    <div class="form-group">
      <label for="namxuatban">Năm Xuất Bản</label>
      <Field
        name="namxuatban"
        type="text"
        class="form-control"
        v-model="bookLocal.namxuatban"
      />
      <ErrorMessage name="namxuatban" class="error-feedback" />
    </div>
    <div class="form-group">
      <label for="tacgia">Tác Giả</label>
      <Field
        name="tacgia"
        type="text"
        class="form-control"
        v-model="bookLocal.tacgia"
      />
      <ErrorMessage name="tacgia" class="error-feedback" />
    </div>
    <div class="form-group">
      <button class="btn btn-primary">Lưu</button>
      <button
        v-if="bookLocal._id"
        type="button"
        class="ml-2 btn btn-danger"
        @click="deleteBook"
      >
        Xóa
      </button>
    </div>
  </Form>
</template>
<script>
import { ErrorMessage, Field, Form } from "vee-validate";
import * as yup from "yup";
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  emits: ["submit:book", "delete:book"],
  props: {
    book: { type: Object, required: true },
  },
  data() {
    const bookFormSchema = yup.object().shape({
      tensach: yup
        .string()
        .required("Tên phải có giá trị.")
        .min(2, "Tên phải ít nhất 2 ký tự.")
        .max(50, "Tên có nhiều nhất 50 ký tự."),
    });
    return {
      // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
      // bookLocal để liên kết với các input trên form
      bookLocal: this.book,
      bookFormSchema,
    };
  },
  methods: {
    submitBook() {
      this.$emit("submit:book", this.bookLocal);
    },
    deleteBook() {
      this.$emit("delete:book", this.bookLocal.id);
    },
  },
};
</script>
<style scoped>
@import "@/assets/form.css";
</style>
