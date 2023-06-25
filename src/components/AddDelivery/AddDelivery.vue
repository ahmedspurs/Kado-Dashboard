<template>
  <form class="w-full p-4" @submit.prevent="createDelivery()" ref="form">
    <div class="floating-input mb-5 relative">
      <input
        type="text"
        id="name"
        class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
        placeholder=" "
        autocomplete="off"
        name="addr"
        required
        v-model="addr"
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
        required
        v-model="deliveryTax"
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
      v-model="city"
    >
      <option value="khartoum">الخرطوم</option>
      <option value="bahri">بحري</option>
      <option value="omdurman">امدرمان</option>
    </select>

    <div class="checkout py-2">
      <button
        type="submit"
        class="bg-blue-600 px-4 py-2 text-white rounded"
        expand="block"
      >
        اضف المنطقه
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      city: "",
      deliveryTax: "",
      addr: "",
      errors: "",
    };
  },
  name: "AddDelivery",
  methods: {
    async createDelivery() {
      // loader
      let loader = this.$loading.show({
        // Optional parameters
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
        color: "#836aee",
        blur: "2px",
      });
      if (this.city == "" && this.deliveryTax == "" && this.addr == "") {
        this.errors = " الرجاء ادخال اسم المدينة و تكلفة التوصيل ";
        this.responseAlert(this.errors, " عفوا ", "warning");
        loader.hide();

        return;
      }
      if (this.deliveryTax == undefined || this.deliveryTax == "") {
        this.errors = " الرجاء ادخال تكلفة التوصيل ";
        this.responseAlert(this.errors, " عفوا ", "warning");
        loader.hide();

        return;
      }
      if (this.addr == undefined || this.deliveryTax == "") {
        this.errors = " الرجاء ادخال العنوان ";
        this.responseAlert(this.errors, " عفوا ", "warning");
        loader.hide();

        return;
      }
      if (this.city == "" || this.city === undefined) {
        this.errors = " الرجاء ادخال اسم المدينة ";
        this.responseAlert(this.errors, " عفوا ", "warning");
        loader.hide();

        return;
      }
      const formData = {
        city: this.city,
        deliveryTax: this.deliveryTax,
        addr: this.addr,
      };
      if (await this.$store.dispatch("addDelivery", formData)) {
        this.responseAlert("تمت إضافة منطقة التوصبل بنجاح", "تم", "success");
      } else {
        this.responseAlert("خطاء اثناء اضافة المنطقة", "خطاء", "error");
      }
      loader.hide();

      this.city = "";
      this.deliveryTax = "";
      this.addr = "";
    },
  },
  inject: ["responseAlert"],
};
</script>

<style></style>
