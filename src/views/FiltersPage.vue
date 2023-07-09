<template>
  <div class="w-full py-8">
    <h2 class="text-center py-4 text-black">كل الفلاتر</h2>
    <div class="text-center pb-4">
      <router-link to="/AddFilter">
        <button class="px-4 py-2 bg-blue-600 text-white">اضف فلتر جديد</button>
      </router-link>
    </div>
    <div class="flex justify-center items-center">
      <filters-table />
    </div>
  </div>
</template>

<script>
import FiltersTable from "@/components/FiltersPage/FiltersTable.vue";

export default {
  name: "UsersPage",
  components: { FiltersTable },
  data() {
    return {
      showModalAdd: false,
    };
  },
  inject: ["checkCookie"],
  async created() {
    this.checkCookie();
    await this.$store.dispatch("fetchFIlters");
  },
};
</script>

<style></style>
