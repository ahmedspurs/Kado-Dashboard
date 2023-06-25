<template>
  <div class="p-4 w-full">
    <h2 class="text-center">اضف اعلان جديد</h2>
    <add-marketing />
  </div>
</template>

<script>
import AddMarketing from "@/components/AddMarketing/AddMarketing.vue";
export default {
  components: { AddMarketing },
  inject: ["checkCookie"],
  created() {
    this.checkCookie();
  },
};
</script>

<style></style>
