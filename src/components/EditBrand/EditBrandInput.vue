<template>
  <form
    class="w-full p-4"
    enctype="multipart/form-data"
    @submit.prevent="editBrand()"
    ref="form"
  >
    <div class="floating-input mb-5 relative">
      <input
        type="text"
        id="name"
        class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
        placeholder=" "
        autocomplete="off"
        v-model="brand.name"
        required
        name="name"
      />
      <label
        for="name"
        class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
        >الاسم</label
      >
    </div>
    <label
      for="countries"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
    >
      القسم
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
        :selected="selectedCategory"
      >
        {{ category.name }}
      </option>
    </select>
    <div class="drag py-2">
      <label
        for="countries"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 py-2"
      >
        صورة الماركة
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
          <input id="dropzone-file" type="file" name="photos" class="hidden" />
        </label>
      </div>
    </div>

    <div class="checkout">
      <button
        class="bg-blue-600 px-4 py-2 text-white rounded"
        expand="block"
        type="submit"
      >
        اضافه ماركة
      </button>
    </div>
  </form>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "EditBrandInput",
  data() {
    return {
      brand: { id: null },
      selectedCategory: null,
    };
  },
  methods: {
    async editBrand() {
      // loader
      let loader = this.$loading.show({
        // Optional parameters
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
        color: "#836aee",
        blur: "2px",
      });
      const id = this.brand?.id;
      const formData = new FormData(this.$refs.form);
      const payload = { id, brand: formData };
      console.log(payload);
      if (await this.$store.dispatch("updateBrand", payload)) {
        this.responseAlert("تم تعديل الماركة بنجاح", "تم", "success");
      } else {
        this.responseAlert("خطاء اثناء تعديل الماركة", "خطاء", "error");
      }
      loader.hide();
    },
  },
  async created() {
    const id = this.$route?.params?.id;
    // const self = this;
    try {
      const brand = await axios.get(`/api/v1/brands/${id}`);
      this.brand = brand.data;
      this.selectedCategory = this.brand.category.name;
      console.log(brand);
    } catch (err) {
      console.log(err);
    }
    // this.$store.state.brands.brands.forEach((brand) => {
    //   if (brand?.id == id) {
    //     self.brand = brand;
    //     self.selectedCategory =
    //   }
    // });
  },
  computed: mapGetters(["allCategories"]),
  inject: ["responseAlert"],
};
</script>

<style></style>
