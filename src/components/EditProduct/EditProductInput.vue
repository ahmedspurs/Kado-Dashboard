<template>
  <form class="w-full p-4" @submit.prevent="updateProduct()" ref="form">
    <div class="floating-input mb-5 relative">
      <input
        type="text"
        id="name"
        name="name"
        class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
        placeholder=" "
        autocomplete="off"
        v-model="product.name"
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
        v-model="product.store"
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
        id="phone"
        name="storePhone"
        class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
        placeholder=" "
        autocomplete="off"
        v-model="product.storePhone"
      />
      <label
        for="email"
        class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
        >رقم المحل</label
      >
    </div>

    <div class="floating-input mb-5 relative">
      <input
        type="text"
        id="collectionPrice"
        name="collectionPrice"
        class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
        placeholder=" "
        autocomplete="off"
        v-model="product.collectionPrice"
      />
      <label
        for="email"
        class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
      >
        سعر التغليف</label
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
        v-model="product.buyPrice"
      />
      <label
        for="phone"
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
        v-model="product.sellPrice"
      />
      <label
        for="phone"
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
        v-model="product.discount"
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
        v-model="product.qty"
      />
      <label
        for="phone"
        class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
      >
        الكميه</label
      >
    </div>

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
      <option :value="product.isFavorite">
        {{ product.isFavorite ? "نعم" : "لا" }}
      </option>
      <option value="false">لا</option>
      <option value="true">نعم</option>
    </select>

    <label
      for="isSpecial"
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
      <option :value="product.isSpecial">
        {{ product.isSpecial ? "نعم" : "لا" }}
      </option>
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
      <option :value="product.isCommon">
        {{ product.isCommon ? "نعم" : "لا" }}
      </option>
      <option value="false">لا</option>
      <option value="true">نعم</option>
    </select>

    <label
      for="countries"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
    >
      التصنيف
    </label>
    <select
      id="countries"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      name="categoryId"
    >
      <option
        :key="category.id"
        :value="category.id"
        v-for="category in allCategories"
      >
        {{ category.name }}
      </option>
    </select>

    <div class="floating-input mb-5 relative">
      <input
        type="text"
        id="name"
        name="discr"
        class="border text-center border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
        placeholder=" "
        autocomplete="off"
        v-model="product.discr"
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
        تعديل منتج
      </button>
    </div>
  </form>
  <form ref="form2" @submit.prevent="updateImages">
    <div class="mt-5">
      <div class="grid grid-cols-4">
        <div v-for="item in product.images" :key="item.id">
          <div class="flex justify-center items-center mx-2 flex-col">
            <img class="w-24 h-24" :src="'/uploads/' + item.name" alt="" />
            <label :for="item.id">
              <div
                class="cursor-pointer flex items-center bg-blue-600 rounded-2xl w-32 text-sm p-2 text-white text-center my-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>

                <span @click="logger(item.id)"> تعديل الصورة </span>
              </div>
            </label>
            <input
              type="file"
              accept="image/*"
              :id="item.id"
              class="hidden"
              @change="updatePhoto($event, item.id)"
            />

            <div
              @click="deleteImage(item.id)"
              class="cursor-pointer flex items-center bg-red-600 rounded-2xl w-32 text-sm p-2 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
              <span> حذف الصورة </span>
            </div>
          </div>
        </div>
      </div>
      <button
        class="my-5 mx-auto px-4 py-2 rounded shadow-lg bg-blue-600 text-white"
        type="submit"
      >
        تعديل الصور
      </button>
    </div>
  </form>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "EditProductInput",
  data() {
    return {
      photos: [],
      files: [],
      config: {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user_token"),
          "Content-Type": "multipart/form-data",
        },
      },
      product: {
        id: null,
      },
    };
  },
  methods: {
    // images methods
    async deleteImage(id) {
      try {
        let loader = this.$loading.show({
          // Optional parameters
          container: this.fullPage ? null : this.$refs.formContainer,
          canCancel: false,
          color: "#836aee",
          blur: "2px",
        });
        let config = this.config;
        const response = await axios.delete(`/api/v1/products/${id}`, config);
        loader.hide();
        if (response.status) {
          this.responseAlert("تم حذف صورة المنتج بنجاح", "تم", "success");
        }
      } catch (err) {
        this.responseAlert("خطاء اثناء حذف صورة المنتج", "خطاء", "error");
      }
    },
    updatePhoto(event, id) {
      if (!event.target.files.length) return;
      let found = false;
      this.photos.forEach((photo) => {
        if (photo.id == id) {
          photo.file = event.target.files[0];
          found = true;
        }
      });
      if (found == false) {
        this.photos.push({ file: event.target.files[0], id });
      }
      console.log(this.photos);
    },
    async updateImages() {
      let loader = this.$loading.show({
        // Optional parameters
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
        color: "#836aee",
        blur: "2px",
      });
      const formData = new FormData();
      let self = this;
      this.photos.forEach((photo) => {
        self.files.push({ File: photo.file });
        formData.append("ids", photo.id);
        formData.append("photos", photo.file);
      });

      try {
        const id = this.$route.params.id;
        let config = this.config;
        if (this.photos.length < 1) {
          this.responseAlert(
            "الرجاء اختيار صورة واحدة على الاقل",
            "خطاء",
            "error"
          );
          loader.hide();
          return;
        }
        const response = await axios.put(
          `/api/v1/products/image/${id}`,
          formData,
          config
        );
        loader.hide();
        if (response.status) {
          this.responseAlert("تم تعديل صور المنتج بنجاح", "تم", "success");
          console.log(response.data);
          this.files = [];
          formData.delete("photos");
          formData.delete("ids");
          return;
        } else {
          this.responseAlert("خطاء اثناء تعديل المنتج", "خطاء", "error");
        }
      } catch (err) {
        console.log(err);
      }
    },
    // end images methods
    async updateProduct() {
      // loader
      let loader = this.$loading.show({
        // Optional parameters
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
        color: "#836aee",
        blur: "2px",
      });
      const id = this.product?.id;
      const payload = { id, product: this.product };
      if (await this.$store.dispatch("updateProduct", payload)) {
        this.responseAlert("تم تعديل المنتج بنجاح", "تم", "success");
      } else {
        this.responseAlert("خطاء اثناء تعديل المنتج", "خطاء", "error");
      }
      loader.hide();
    },
  },
  props: ["id"],
  created() {
    const id = this.$route?.params?.id;
    const self = this;
    this.$store.state.products.products.forEach((product) => {
      if (product.id == id) {
        self.product = product;
      }
    });
  },
  computed: mapGetters(["allCategories"]),
  inject: ["responseAlert"],
};
</script>

<style></style>
