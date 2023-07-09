<template>
  <form
    ref="form"
    class="w-full p-4"
    enctype="multipart/form-data"
    @submit.prevent="createProduct()"
  >
    <div class="floating-input mb-5 relative">
      <input
        type="text"
        id="name"
        name="name"
        class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
        placeholder=" "
        autocomplete="off"
        required
        v-model="name"
      />
      <label
        for="email"
        class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
        >الاسم</label
      >
    </div>

    <div class="floating-input mb-5 relative">
      <input
        type="text"
        id="name"
        name="store"
        class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
        placeholder=" "
        autocomplete="off"
        required
        v-model="store"
      />
      <label
        for="email"
        class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
        >اسم المحل</label
      >
    </div>

    <div class="floating-input mb-5 relative">
      <input
        type="text"
        id="storePhone"
        name="storePhone"
        class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
        placeholder=" "
        autocomplete="off"
        required
        v-model="storePhone"
      />
      <label
        for="email"
        class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
        >رقم المحل</label
      >
    </div>

    <div class="floating-input mb-5 relative">
      <input
        type="number"
        id="name"
        name="collectionPrice"
        class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
        placeholder=" "
        autocomplete="off"
        required
        v-model="collectionPrice"
      />
      <label
        for="email"
        class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
        >سعر التغليف</label
      >
    </div>

    <div class="floating-input mb-5 relative">
      <input
        type="number"
        id="phone"
        name="buyPrice"
        class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
        placeholder=" "
        autocomplete="off"
        required
        v-model="buyPrice"
      />
      <label
        for="buy_price"
        class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
      >
        سعر الشراء</label
      >
    </div>
    <div class="floating-input mb-5 relative">
      <input
        type="number"
        id="phone"
        name="sellPrice"
        class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
        placeholder=" "
        autocomplete="off"
        required
        v-model="sellPrice"
      />
      <label
        for="sell_price"
        class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
      >
        سعر البيع</label
      >
    </div>

    <div class="floating-input mb-5 relative">
      <input
        type="number"
        id="discount"
        name="discount"
        class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
        placeholder=" "
        autocomplete="off"
        required
        v-model="discount"
      />
      <label
        for="discount"
        class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
      >
        سعر التخفيض</label
      >
    </div>

    <div class="floating-input mb-5 relative">
      <input
        type="number"
        id="phone"
        name="qty"
        class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
        placeholder=" "
        autocomplete="off"
        required
        v-model="qty"
      />
      <label
        for="qty"
        class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
      >
        الكميه</label
      >
    </div>

    <label
      for="countries"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
    >
      التصنيف
    </label>
    <select
      id="countries"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      name="subCategoryId"
    >
      <option
        :key="subCategory.id"
        :value="subCategory.id"
        v-for="subCategory in allSubCategories"
      >
        {{ subCategory.name }}
      </option>
    </select>

    <label
      for="isFavorite"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
    >
      هدايا وصلتنا حديثا
    </label>
    <select
      required
      id="isFavorite"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      name="isFavorite"
    >
      <option value="false">لا</option>
      <option value="true">نعم</option>
    </select>

    <label
      for="isFavorite"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
    >
      هدايا و تنسيقات مميزة
    </label>
    <select
      required
      id="isSpecial"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      name="isSpecial"
    >
      <option value="false">لا</option>
      <option value="true">نعم</option>
    </select>

    <label
      for="isCommon"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
    >
      الافضل مبيعا
    </label>
    <select
      required
      id="isCommon"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      name="isCommon"
    >
      <option value="false">لا</option>
      <option value="true">نعم</option>
    </select>
    <!-- products filters -->
    <label
      for="filters"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
    >
      الفلاتر
    </label>
    <div class="" v-for="item in allFilters" :key="item.id">
      <label
        for="tags"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      >
        {{ item.name }}
      </label>
      <div v-for="tag in item.tags" :key="tag.id">
        <label for="">{{ tag.tag }}</label>
        <input
          type="checkbox"
          v-model="tags"
          :value="tag.id"
          :name="tag.id"
          id=""
        />
      </div>
    </div>
    <button class="bg-indingo-50 p-4" @click="logger()">log tags</button>

    <div class="drag py-2">
      <label
        for="countries"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 py-2"
      >
        صور المنتج
      </label>
      <div class="flex justify-center items-center w-full">
        <label
          for="dropzone-file"
          class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div class="flex flex-col justify-center items-center pt-5 pb-6">
            <svg
              class="mb-3 w-10 h-10 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            multiple
            required
            id="dropzone-file"
            type="file"
            name="photos"
            class="hidden"
          />
        </label>
      </div>
    </div>

    <div class="floating-input mb-5 relative">
      <input
        type="text"
        id="name"
        name="discr"
        class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
        placeholder=" "
        autocomplete="off"
        v-model="discr"
      />
      <label
        for="descr"
        class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
        >الوصف</label
      >
    </div>

    <div class="checkout">
      <button
        class="bg-blue-600 px-4 py-2 text-white rounded"
        expand="block"
        type="submit"
      >
        اضف منتج
      </button>
    </div>
  </form>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "EditProductInput",
  data() {
    return {
      tags: [],
      name: "",
      store: "",
      storePhone: "",
      collectionPrice: "",
      buyPrice: "",
      sellPrice: "",
      discount: 0,
      qty: "",
      discr: "",
      errors: "",
    };
  },
  methods: {
    logger() {
      console.log(this.tags);
    },
    async createProduct() {
      // loader
      let loader = this.$loading.show({
        // Optional parameters
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
        color: "#836aee",
        blur: "2px",
      });
      if (this.name == "" || this.name == undefined) {
        this.errors = "الرجاء ادخال اسم المنتج";
        this.responseAlert(this.errors, " عفوا ", "warning");
        loader.hide();

        return;
      }
      if (this.store == "" || this.store == undefined) {
        this.errors = "الرجاء ادخال اسم المحل";
        this.responseAlert(this.errors, " عفوا ", "warning");
        loader.hide();

        return;
      }
      if (this.storePhone == "" || this.storePhone == undefined) {
        this.errors = "الرجاء ادخال رقم المحل";
        this.responseAlert(this.errors, " عفوا ", "warning");
        loader.hide();

        return;
      }
      if (this.collectionPrice == "" || this.collectionPrice == undefined) {
        this.errors = "الرجاء ادخال رسوم التغليف";
        this.responseAlert(this.errors, " عفوا ", "warning");
        loader.hide();

        return;
      }
      if (this.buyPrice == "" || this.buyPrice == undefined) {
        this.errors = "الرجاء ادخال سعر شراء المنتج";
        this.responseAlert(this.errors, " عفوا ", "warning");
        loader.hide();

        return;
      }
      if (this.sellPrice == "" || this.sellPrice == undefined) {
        this.errors = "الرجاء ادخال سعر بيع المنتج";
        this.responseAlert(this.errors, " عفوا ", "warning");
        loader.hide();

        return;
      }
      if (this.qty == "" || this.qty == undefined) {
        this.errors = "الرجاء ادخال كمية المنتج";
        this.responseAlert(this.errors, " عفوا ", "warning");
        loader.hide();

        return;
      }
      const formData = new FormData(this.$refs.form);
      // console.log(this.tags);
      formData.append("tags", this.tags);
      if (await this.$store.dispatch("addProduct", formData)) {
        this.responseAlert("تمت إضافة المنتج بنجاح", "تم", "success");
      } else {
        this.responseAlert("خطاء اثناء اضافة المنتج", "خطاء", "error");
      }
      loader.hide();

      this.name = "";
      this.store = "";
      this.storePhone = "";
      this.collectionPrice = "";
      this.buyPrice = "";
      this.sellPrice = "";
      this.discount = 0;
      this.qty = "";
      this.discr = "";
    },
  },
  computed: { ...mapGetters(["allSubCategories", "allFilters"]) },
  async created() {
    await this.$store.dispatch("fetchFilters");
  },
  inject: ["responseAlert"],
};
</script>

<style></style>
