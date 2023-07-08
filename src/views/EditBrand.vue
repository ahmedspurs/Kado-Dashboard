<template>
  <div class="p-4 w-full">
    <h2 class="text-center">تعديل قسم</h2>
    <edit-Brand-input />
  </div>
</template>

<script>
import EditBrandInput from "@/components/EditBrand/EditBrandInput.vue";
export default {
  components: { EditBrandInput },
  inject: ["checkCookie"],
  async created() {
    this.checkCookie();
    await this.$store.dispatch("fetchCategories");
  },
};
</script>

<style></style>
