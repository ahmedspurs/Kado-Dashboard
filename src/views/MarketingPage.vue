<template>
  <div class="w-full py-8">
    <h2 class="text-center py-4 text-black">كل الاعلانات</h2>
    <div class="text-center pb-4">
      <router-link to="/AddMarketing">
        <button class="px-4 py-2 bg-blue-600 text-white">اضف اعلان جديد</button>
      </router-link>
    </div>
    <div class="flex justify-center items-center">
      <marketing-table />
    </div>
  </div>
</template>

<script>
import MarketingTable from "../components/MarketingPage/MarketingTable.vue";

export default {
  components: { MarketingTable },
  name: "MarketingPage",
  data() {
    return {
      showModalAdd: false,
    };
  },
  inject: ["checkCookie"],
  created() {
    this.checkCookie();
    this.$store.dispatch("fetchAds");
  },
};
</script>

<style></style>
