<!-- <template>
  <div class="page row">
    <div class="col-md-10">
      <InputSearch v-model="searchText" />
    </div>
    <div class="mt-3 col-md-6">
      <h4>
        Sách
        <i class="fas fa-address-book"></i>
      </h4>
      <BookList
        v-if="filteredBooksCount > 0"
        :books="filteredBooks"
        v-model:activeIndex="activeIndex"
      />
      <p v-else>Không có sách nào</p>
      <div class="mt-3 row justify-content-around align-items-center">
        <button class="btn btn-sm btn-primary" @click="refreshList()">
          <i class="fas fa-redo"></i> Làm mới
        </button>
        <button class="btn btn-sm btn-success" @click="goToAddBook">
          <i class="fas fa-plus"></i> Thêm mới
        </button>
        <button class="btn btn-sm btn-danger" @click="removeAllBooks">
          <i class="fas fa-trash"></i> Xóa tất cả
        </button>
      </div>
    </div>
    <div class="mt-3 col-md-6">
      <div v-if="activeBook">
        <h4>
          Chi tiết Liên hệ
          <i class="fas fa-address-card"></i>
        </h4>
        <BookCard :book="activeBook" />
      </div>
    </div>
  </div>
</template>
<script>
import BookCard from "@/components/BookCard.vue";
import BookList from "@/components/BookList.vue";
import InputSearch from "@/components/InputSearch.vue";
import BookService from "@/services/book.service";

export default {
  components: {
    BookCard,
    InputSearch,
    BookList,
  },
  // Đoạn mã xử lý đầy đủ sẽ trình bày bên dưới

  data() {
    return {
      books: [],
      activeIndex: -1,
      searchText: "",
    };
  },
  watch: {
    // Giám sát các thay đổi của biến searchText.
    // Bỏ chọn phần tử đang được chọn trong danh sách.
    searchText() {
      this.activeIndex = -1;
    },
  },
  computed: {
    // Chuyển các đối tượng book thành chuỗi để tiện cho tìm kiếm.
    bookStrings() {
      return this.books.map((book) => {
        const { masach, tensach, dongia, soquyen, namxuatban, tacgia } = book;
        return [masach, tensach, dongia, soquyen, namxuatban, tacgia].join("");
      });
    },
    // Trả về các book có chứa thông tin cần tìm kiếm.
    filteredBooks() {
      if (!this.searchText) return this.books;
      return this.books.filter((_book, index) =>
        this.bookStrings[index].includes(this.searchText)
      );
    },
    activeBook() {
      if (this.activeIndex < 0) return null;
      return this.filteredBooks[this.activeIndex];
    },
    filteredBooksCount() {
      return this.filteredBooks.length;
    },
  },
  methods: {
    async retrieveBooks() {
      try {
        this.books = await BookService.getAll();
      } catch (error) {
        console.log(error);
      }
    },
    refreshList() {
      this.retrieveBooks();
      this.activeIndex = -1;
    },
    async removeAllBooks() {
      if (confirm("Bạn muốn xóa tất cả Sách?")) {
        try {
          await BookService.deleteAll();
          this.refreshList();
        } catch (error) {
          console.log(error);
        }
      }
    },
    goToAddBook() {
      this.$router.push({ name: "book.add" });
    },
  },
  mounted() {
    this.refreshList();
  },
};
</script>
<style scoped>
.page {
  text-align: left;
  max-width: 1900px;
}
</style> -->
<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-8">
        <div class="card">
          <div class="card-body">
            <InputSearch v-model="searchText" />
            <div v-if="filteredBooksCount > 0">
              <BookList
                :books="filteredBooks"
                v-model:activeIndex="activeIndex"
              />
            </div>
            <p v-else class="text-center mt-3">Không có sách nào</p>
            <div class="mt-4 d-flex justify-content-between">
              <button class="btn btn-primary" @click="refreshList()">
                <i class="fas fa-redo"></i> Làm mới
              </button>
              <button class="btn btn-success" @click="goToAddBook()">
                <i class="fas fa-plus"></i> Thêm mới
              </button>
              <button class="btn btn-danger" @click="removeAllBooks()">
                <i class="fas fa-trash"></i> Xóa tất cả
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div v-if="activeBook" class="card">
          <div class="card-body">
            <h4 class="card-title">
              Chi tiết sách
              <i class="fas fa-info-circle"></i>
            </h4>
            <BookCard :book="activeBook" />
            <router-link
              :to="{
                name: 'book.edit',
                params: { id: activeBook._id },
              }"
            >
              <span class="mt-2 badge badge-warning">
                <i class="fas fa-edit"></i> Hiệu chỉnh</span
              >
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BookCard from "@/components/BookCard.vue";
import BookList from "@/components/BookList.vue";
import InputSearch from "@/components/InputSearch.vue";
import BookService from "@/services/book.service";

export default {
  components: {
    BookCard,
    InputSearch,
    BookList,
  },
  data() {
    return {
      books: [],
      activeIndex: -1,
      searchText: "",
    };
  },
  watch: {
    searchText() {
      this.activeIndex = -1;
    },
  },
  computed: {
    bookStrings() {
      return this.books.map((book) => {
        const { masach, tensach, dongia, soquyen, namxuatban, tacgia } = book;
        return [masach, tensach, dongia, soquyen, namxuatban, tacgia].join("");
      });
    },
    filteredBooks() {
      if (!this.searchText) return this.books;
      return this.books.filter((_book, index) =>
        this.bookStrings[index].includes(this.searchText)
      );
    },
    activeBook() {
      if (this.activeIndex < 0) return null;
      return this.filteredBooks[this.activeIndex];
    },
    filteredBooksCount() {
      return this.filteredBooks.length;
    },
  },
  methods: {
    async retrieveBooks() {
      try {
        this.books = await BookService.getAll();
      } catch (error) {
        console.log(error);
      }
    },
    refreshList() {
      this.retrieveBooks();
      this.activeIndex = -1;
    },
    async removeAllBooks() {
      if (confirm("Bạn muốn xóa tất cả Sách?")) {
        try {
          await BookService.deleteAll();
          this.refreshList();
        } catch (error) {
          console.log(error);
        }
      }
    },
    goToAddBook() {
      this.$router.push({ name: "book.add" });
    },
  },
  mounted() {
    this.refreshList();
  },
};
</script>

<style scoped>
.container {
  max-width: 1600px;
}

.card {
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
}

.card-body {
  padding: 1.25rem;
}

.btn {
  margin-top: 1rem;
}

.text-center {
  text-align: center;
}
</style>
