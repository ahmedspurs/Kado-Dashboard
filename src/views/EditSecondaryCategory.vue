<template>
  <div class="p-4 w-full">
    <h2 class="text-center">تعديل قسم</h2>
    <edit-SecondaryCategory-input />
  </div>
</template>

<script>
import EditSecondaryCategoryInput from "@/components/EditSecondaryCategory/EditSecondaryCategoryInput.vue";
export default {
  components: { EditSecondaryCategoryInput },
  inject: ["checkCookie"],
  created() {
    this.$store.dispatch("fetchCategories");
    this.checkCookie();
  },
};
</script>

<style></style>
