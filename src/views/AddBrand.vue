<template>
  <div class="p-4 w-full">
    <h2 class="text-center">اضف قسم جديد</h2>

    <add-Brand-input />
  </div>
</template>

<script>
import AddBrandInput from "@/components/AddBrand/AddBrandInput.vue";
export default {
  components: { AddBrandInput },
  inject: ["checkCookie"],
  created() {
    this.$store.dispatch("fetchCategories");
    this.checkCookie();
  },
};
</script>

<style></style>
