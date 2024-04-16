<!-- <script>
export default {
  props: {
    book: { type: Object, required: true },
  },
};
</script>
<template>
  <div>
    <div class="p-1">
      <strong>Mã Sách:</strong>
      {{ book.masach }}
    </div>
    <div class="p-1">
      <strong>Tên Sách:</strong>
      {{ book.tensach }}
    </div>
    <div class="p-1">
      <strong>Đơn Giá:</strong>
      {{ book.dongia }}
    </div>
    <div class="p-1">
      <strong>Số Quyển:</strong>
      {{ book.soquyen }}
    </div>
    <div class="p-1">
      <strong>Năm Xuất Bản:</strong>
      {{ book.namxuatban }}
    </div>
    <div class="p-1">
      <strong>Tác Giả</strong>
      {{ book.tacgia }}
    </div>
    
  </div>
</template> -->
<template>
  <div class="book-details">
    <div class="detail">
      <strong>Mã Sách:</strong>
      {{ book.masach }}
    </div>
    <div class="detail">
      <strong>Tên Sách:</strong>
      {{ book.tensach }}
    </div>
    <div class="detail">
      <strong>Đơn Giá:</strong>
      {{ book.dongia }}
    </div>
    <div class="detail">
      <strong>Số Quyển:</strong>
      {{ book.soquyen }}
    </div>
    <div class="detail">
      <strong>Năm Xuất Bản:</strong>
      {{ book.namxuatban }}
    </div>
    <div class="detail">
      <strong>Tác Giả:</strong>
      {{ book.tacgia }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    book: { type: Object, required: true },
  },
};
</script>

<style scoped>
.book-details {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}

.detail {
  margin-bottom: 5px;
}
</style>
