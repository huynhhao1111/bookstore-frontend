<template>
  <div v-if="book" class="page">
    <h4>Thêm Liên hệ</h4>
    <BookForm :book="book" @submit:book="addBook" />
    <p>{{ message }}</p>
  </div>
</template>
<script>
import BookForm from "@/components/BookForm.vue";
import BookService from "@/services/book.service";
export default {
  components: {
    BookForm,
  },
  props: {
    id: { type: String, required: true },
  },
  data() {
    return {
      book: null,
      message: "",
    };
  },
  methods: {
    async getBook() {
      try {
        this.book = await {
          masach: "",
          tensach: "",
          dongia: "",
          soquyen: "",
          namxuatban: "",
          tacgia: "",
        };
      } catch (error) {
        console.log(error);
        this.$router.push({
          tensach: "notfound",
          params: {
            pathMatch: this.$route.path.split("/").slice(1),
          },
          query: this.$route.query,
          hash: this.$route.hash,
        });
      }
    },
    async addBook(data) {
      try {
        await BookService.create(data);
        this.message = "Liên hệ được thêm thành công.";
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getBook();
    this.message = "";
  },
};
</script>
