<template>
  <div class="p-4 w-full">
    <h2 class="text-center">اضف قسم ثانوي جديد</h2>

    <add-SecondaryCategory-input />
  </div>
</template>

<script>
import AddSecondaryCategoryInput from "@/components/AddSecondaryCategory/AddSecondaryCategoryInput.vue";
export default {
  components: { AddSecondaryCategoryInput },
  inject: ["checkCookie"],
  created() {
    this.$store.dispatch("fetchCategories");
    this.checkCookie();
  },
};
</script>

<style></style>
