<template>
  <div class="p-4">
    <div class="flex justify-between items-center">
      <h2>رقم العمليه</h2>
      <span> {{ order?.transferNumber }} </span>
    </div>
    <div class="flex justify-center">
      <img class="w-56" :src="'/uploads/' + order?.attachment" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["order"],
};
</script>

<style></style>
