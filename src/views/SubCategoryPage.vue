<template>
  <div class="w-full p-4">
    <h2 class="text-center py-4 text-black">الاقسام الفرعية</h2>
    <div class="text-center pb-4">
      <router-link to="/AddSubCategory">
        <button class="px-4 py-2 bg-blue-600 text-white">
          اضف قسم فرعي جديدة
        </button>
      </router-link>
    </div>
    <sub-category-tabel />
  </div>
</template>

<script>
import SubCategoryTabel from "@/components/SubCategory/SubCategoryTabel.vue";

export default {
  components: { SubCategoryTabel },
  name: "SubCategoryPage",
  data() {
    return {
      showModalAdd: false,
    };
  },
  inject: ["checkCookie"],
  created() {
    this.checkCookie();
    this.$store.dispatch("fetchSubCategories");
  },
};
</script>

<style></style>
