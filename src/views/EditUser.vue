<template>
  <div class="p4 w-full">
    <h2 class="text-center py-8">تعديل المستخدم</h2>
    <edit-user-input />
  </div>
</template>

<script>
import EditUserInput from "@/components/EditUser/EditUserInput.vue";
export default {
  components: { EditUserInput },
  inject: ["checkCookie"],
  async created() {
    this.checkCookie();
    await this.$store.dispatch("fetchUsers");
  },
};
</script>

<style></style>
