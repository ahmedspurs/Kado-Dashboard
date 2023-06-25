<template>
  <div class="p-4 w-full">
    <h2 class="text-center">تعديل فلتر</h2>
    <edit-filter-input />
  </div>
</template>

<script>
import EditFilterInput from "@/components/EditFilter/EditFilterInput.vue";
export default {
  components: { EditFilterInput },
  inject: ["checkCookie"],
  created() {
    this.$store.dispatch("fetchCategories");
    this.checkCookie();
  },
};
</script>

<style></style>
