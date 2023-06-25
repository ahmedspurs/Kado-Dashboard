<template>
  <div class="p-4 w-full">
    <h2 class="text-center">تعديل قسم</h2>
    <edit-category-input />
  </div>
</template>

<script>
import EditCategoryInput from "@/components/EditCategory/EditCategoryInput.vue";
export default {
  components: { EditCategoryInput },
  inject: ["checkCookie"],
  created() {
    this.$store.dispatch("fetchCategories");
    this.checkCookie();
  },
};
</script>

<style></style>
