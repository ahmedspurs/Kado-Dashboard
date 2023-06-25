<template>
  <div class="p-4 w-full">
    <h2 class="text-center">اضف فلتر جديد</h2>

    <add-filter-input />
  </div>
</template>

<script>
import AddFilterInput from "@/components/AddFilter/AddFilterInput.vue";
export default {
  components: { AddFilterInput },
  inject: ["checkCookie"],
  created() {
    this.$store.dispatch("fetchCategories");
    this.checkCookie();
  },
};
</script>

<style></style>
