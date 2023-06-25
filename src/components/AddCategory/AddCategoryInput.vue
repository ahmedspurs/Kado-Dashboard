<template>
  <form
    class="w-full p-4"
    enctype="multipart/form-data"
    @submit.prevent="newCategory()"
    ref="form"
  >
    <div class="floating-input mb-5 relative">
      <input
        type="text"
        id="name"
        class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
        placeholder=" "
        autocomplete="off"
        v-model="name"
        required
        name="name"
      />
      <label
        for="name"
        class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
        >الاسم</label
      >
    </div>

    <div class="drag py-2">
      <label
        for="countries"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 py-2"
      >
        صورة القسم
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
            id="dropzone-file"
            type="file"
            name="photos"
            class="hidden"
            ref="myFile"
            required
            @change="selectedFile"
          />
        </label>
      </div>
    </div>

    <div class="checkout">
      <button
        class="bg-blue-600 px-4 py-2 text-white rounded"
        expand="block"
        type="submit"
      >
        اضافه قسم
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "AddCategoryInput",
  data() {
    return {
      errors: "",
      name: "",
      imageFile: null,
    };
  },
  methods: {
    // all components response alert
    responseAlert(text, title, icon) {
      this.$swal.fire({
        title: `${title}`,
        text: ` ${text} `,
        icon: `${icon}`,
        toast: true,
        position: "top-start",
        showConfirmButton: false,
        timer: 2000,
      });
    },
    selectedFile() {
      this.imageFile = this.$refs?.myFile?.files[0];
    },
    async newCategory() {
      // loader  //
      let loader = this.$loading.show({
        // Optional parameters
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
        color: "#836aee",
        blur: "2px",
      });

      if (this.name == "" && this.imageFile == null) {
        this.errors = " الرجاء ادخال الاسم و الصورة ";
        this.responseAlert(this.errors, " عفوا ", "warning");
        loader.hide();

        return;
      }
      if (this.name == "" || this.name === undefined) {
        this.errors = " الرجاء ادخال الاسم ";
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
      const formData = new FormData(this.$refs.form);
      if (await this.$store.dispatch("addCategory", formData)) {
        this.responseAlert("تمت إضافة الفئة بنجاح", "تم", "success");
      } else {
        this.responseAlert(" حدث خطاء اثناء اضافة الفئة ", "عفوا", "error");
      }
      loader.hide();

      this.name = "";
    },
  },
  provide() {
    return {
      responseAlert: this.responseAlert,
    };
  },
};
</script>

<style></style>
