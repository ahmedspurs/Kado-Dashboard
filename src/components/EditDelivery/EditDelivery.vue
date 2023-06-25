<template>
  <form class="w-full p-4" @submit.prevent="updateDelivery()" ref="form">
    <div class="floating-input mb-5 relative">
      <input
        type="text"
        id="name"
        class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
        placeholder=" "
        autocomplete="off"
        name="addr"
        v-model="delivery.addr"
      />
      <label
        for="email"
        class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
        >المنطقه</label
      >
    </div>

    <!-- price -->

    <div class="floating-input mb-5 relative">
      <input
        type="number"
        id="name"
        class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
        placeholder=" "
        autocomplete="off"
        name="deliveryTax"
        v-model="delivery.deliveryTax"
      />
      <label
        for="email"
        class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
        >السعر</label
      >
    </div>

    <label
      for="countries"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
    >
      المدينه
    </label>
    <select
      id="countries"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      name="city"
      v-model="delivery.city"
    >
      <option :value="delivery.city">الخرطوم</option>
      <option value="khartoum">الخرطوم</option>
      <option value="bahri">بحري</option>
      <option value="omduramn">امدرمان</option>
    </select>

    <div class="checkout py-2">
      <button class="bg-blue-600 px-4 py-2 text-white rounded" expand="block">
        تعديل المنطقه
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "EditDelivery",
  data() {
    return {
      delivery: {
        id: null,
      },
    };
  },
  props: ["id"],
  methods: {
    async updateDelivery() {
      // loader
      let loader = this.$loading.show({
        // Optional parameters
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
        color: "#836aee",
        blur: "2px",
      });
      const id = this.delivery.id;
      const formData = this.delivery;
      const payload = { id, delivery: formData };
      if (await this.$store.dispatch("updateDelivery", payload)) {
        this.responseAlert("تم تعديل المنطقة بنجاح", "تم", "success");
      } else {
        this.responseAlert("حدث خطاء اثناء تعديل المنطقة", "خطاء", "error");
      }
      loader.hide();
    },
  },
  created() {
    const id = this.$route.params.id;
    const self = this;
    this.$store.state.deliveries.deliveries.forEach((delivery) => {
      if (delivery.id == id) {
        self.delivery = delivery;
      }
    });
  },
  inject: ["responseAlert"],
};
</script>

<style></style>
