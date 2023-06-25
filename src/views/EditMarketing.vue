<template>
  <div class="p4 w-full">
    <h2 class="text-center py-8">تعديل الاعلان</h2>
    <edit-marketing />
  </div>
</template>

<script>
import EditMarketing from '../components/EditMarketing/EditMarketing.vue';

export default {
  components: { EditMarketing },
  name: "EditProduct",
  inject: ["checkCookie"],
  created() {
    this.checkCookie();
  },
};
</script>

<style></style>
