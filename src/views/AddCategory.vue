<template>
  <div class="p-4 w-full">
    <h2 class="text-center">اضف قسم جديد</h2>

    <add-category-input />
  </div>
</template>

<script>
import AddCategoryInput from "@/components/AddCategory/AddCategoryInput.vue";
export default {
  components: { AddCategoryInput },
  inject: ["checkCookie"],
  created() {
    this.$store.dispatch("fetchCategories");
    this.checkCookie();
  },
};
</script>

<style></style>
