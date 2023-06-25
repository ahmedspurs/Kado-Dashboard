<template>
  <form
    ref="form"
    class="w-full p-4"
    enctype="multipart/form-data"
    @submit.prevent="createAd()"
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
        >اسم الاعلان</label
      >
    </div>

    <div class="floating-input mb-5 relative">
      <input
        type="text"
        id="name"
        name="label"
        class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
        placeholder=" "
        autocomplete="off"
        required
        v-model="label"
      />
      <label
        for="email"
        class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
        >عنوان الاعلان</label
      >
    </div>

    <div class="floating-input mb-5 relative">
      <textarea
        id="name"
        name="discr"
        class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
        placeholder=" "
        autocomplete="off"
        required
        v-model="discr"
      >
      </textarea>
      <label
        for="email"
        class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
        >وصف الاعلان</label
      >
    </div>

    <label
      for="countries"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
    >
      خصاائص زر الاعلان
    </label>
    <select
      id="countries"
      class="px-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      name="type"
      v-model="type"
    >
      <option value="product">توجيه لقسم فرعي</option>
      <option value="external">توجيه لرابط خارجي</option>
    </select>

    <!-- product -->

    <div class="floating-input my-5 relative" v-if="type == 'product'">
      <input
        type="text"
        id="name"
        name="productId"
        class="px-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
        placeholder=" "
        autocomplete="off"
        required
        v-model="productId"
      />
      <label
        for="email"
        class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
      >
        ادخل معرف القسم الفرعي</label
      >
    </div>

    <!-- external -->

    <div class="floating-input my-5 relative" v-if="type == 'external'">
      <input
        type="text"
        id="name"
        name="productLink"
        class="px-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
        placeholder=" "
        autocomplete="off"
        required
        v-model="productLink"
      />
      <label
        for="email"
        class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
      >
        ادخل الرابط</label
      >
    </div>

    <div class="floating-input my-5 relative">
      <input
        type="text"
        id="name"
        name="content"
        class="px-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
        placeholder=" "
        autocomplete="off"
        required
        v-model="content"
      />
      <label
        for="email"
        class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
      >
        محتوي زر الاعلان</label
      >
    </div>
    <div class="drag py-2">
      <label
        for="countries"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 py-2"
      >
        صور الاعلان
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
            required
            id="dropzone-file"
            type="file"
            name="photos"
            ref="myFile"
            class="hidden"
            @change="selectedFile"
          />
        </label>
      </div>
    </div>

    <label
      for="countries"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
    >
      حاله الاعلان
    </label>
    <select
      id="countries"
      class="px-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      name="status"
      v-model="status"
    >
      <option value="true">مفعل</option>
      <option value="false">غير مفعل</option>
    </select>

    <div class="checkout py-2">
      <button
        class="bg-blue-600 px-4 py-2 text-white rounded"
        expand="block"
        type="submit"
      >
        اضف اعلان
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
      name: "",
      label: "",
      discr: "",
      type: "",
      productId: "",
      productLink: "",
      content: "",
      status: "",
      imageFile: null,
      errors: "",
    };
  },
  methods: {
    async createAd() {
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
      if (this.label == "" || this.label == undefined) {
        this.errors = "الرجاء عنوان الاعلان";
        this.responseAlert(this.errors, " عفوا ", "warning");
        loader.hide();

        return;
      }
      if (this.discr == "" || this.discr == undefined) {
        this.errors = "الرجاء وصف الاعلان";
        this.responseAlert(this.errors, " عفوا ", "warning");
        loader.hide();

        return;
      }
      if (this.type == "" || this.type == undefined) {
        this.errors = "الرجاء نوع الاعلان";
        this.responseAlert(this.errors, " عفوا ", "warning");
        loader.hide();

        return;
      }
      if (this.content == "" || this.content == undefined) {
        this.errors = "الرجاء ادخال محتوى الاعلان";
        this.responseAlert(this.errors, " عفوا ", "warning");
        loader.hide();

        return;
      }
      if (this.imageFile == null) {
        this.errors = " الرجاء ارفاق صورة ";
        this.responseAlert(this.errors, " عفوا ", "warning");
        loader.hide();

        return;
      }
      if (this.status == "" || this.status == undefined) {
        this.errors = "الرجاء ادخال حالة الاعلان";
        this.responseAlert(this.errors, " عفوا ", "warning");
        loader.hide();

        return;
      }
      const formData = new FormData(this.$refs.form);
      if (await this.$store.dispatch("addAd", formData)) {
        this.responseAlert("تمت إضافة الاعلات بنجاح", "تم", "success");
      } else {
        this.responseAlert("خطاء اثناء اضافة الاعلان", "حطاء", "error");
      }
      loader.hide();

      this.name = "";
      this.label = "";
      this.discr = "";
      this.type = "";
      this.productId = "";
      this.productLink = "";
      this.content = "";
      this.status = "";
    },
    selectedFile() {
      this.imageFile = this.$refs?.myFile?.files[0];
    },
  },
  computed: { ...mapGetters(["allCategories", "allProducts"]) },
  inject: ["responseAlert"],
};
</script>

<style></style>
