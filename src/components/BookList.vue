<!-- <script>
export default {
  props: {
    books: { type: Array, default: [] },
    activeIndex: { type: Number, default: -1 },
  },
  emits: ["update:activeIndex"],
  methods: {
    updateActiveIndex(index) {
      this.$emit("update:activeIndex", index);
    },
  },
};
</script>
<template>
  <ul class="list-group">
    <li
      class="list-group-item"
      v-for="(book, index) in books"
      :key="book._id"
      :class="{ active: index === activeIndex }"
      @click="updateActiveIndex(index)"
    >
      {{ book.tensach }}
    </li>
  </ul>
</template> -->
<template>
  <ul class="list-group">
    <li
      v-for="(book, index) in books"
      :key="book._id"
      @click="updateActiveIndex(index)"
      :class="{ 'list-group-item': true, active: index === activeIndex }"
    >
      {{ book.tensach }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    books: { type: Array, default: [] },
    activeIndex: { type: Number, default: -1 },
  },
  emits: ["update:activeIndex"],
  methods: {
    updateActiveIndex(index) {
      this.$emit("update:activeIndex", index);
    },
  },
};
</script>

<style scoped>
.list-group-item {
  cursor: pointer;
  transition: background-color 0.3s;
}

.list-group-item:hover {
  background-color: #f8f9fa;
}

.active {
  background-color: #007bff;
  color: #fff;
}
</style>
