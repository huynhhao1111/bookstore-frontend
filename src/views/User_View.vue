<template>
  <div class="container mt-4">
    <div class="row">
      <!-- Danh sách người dùng -->
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Danh sách người dùng</h4>
            <ul class="list-group">
              <li
                class="list-group-item"
                v-for="(user, index) in users"
                :key="user.id"
                @click="selectUser(index)"
                :class="{ active: index === activeIndex }"
              >
                {{ user.name }}
              </li>
            </ul>
            <p v-if="users.length === 0" class="text-center mt-3">
              Không có người dùng nào
            </p>
          </div>
        </div>
      </div>
      <!-- Chi tiết người dùng -->
      <div class="col-md-6">
        <div v-if="selectedUser" class="card">
          <div class="card-body">
            <h4 class="card-title">Chi tiết người dùng</h4>
            <p><strong>Tên:</strong> {{ selectedUser.name }}</p>
            <p><strong>Email:</strong> {{ selectedUser.email }}</p>
            <p><strong>Số điện thoại:</strong> {{ selectedUser.phone }}</p>
            <!-- Thêm các trường thông tin khác của người dùng tại đây -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [], // Danh sách người dùng
      activeIndex: -1, // Chỉ số của người dùng được chọn
    };
  },
  computed: {
    selectedUser() {
      return this.users[this.activeIndex];
    },
  },
  methods: {
    // Phương thức để lấy danh sách người dùng từ máy chủ
    async fetchUsers() {
      try {
        // Gọi API hoặc service để lấy danh sách người dùng
        // Gán kết quả cho this.users
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },
    // Phương thức để chọn người dùng và hiển thị chi tiết
    selectUser(index) {
      this.activeIndex = index;
    },
  },
  mounted() {
    this.fetchUsers(); // Khi component được mounted, gọi phương thức fetchUsers để lấy danh sách người dùng
  },
};
</script>

<style scoped>
.card {
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
}
</style>
