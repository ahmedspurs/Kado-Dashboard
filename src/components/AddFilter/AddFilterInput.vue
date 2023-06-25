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

        <div class="floating-input mb-5 relative" v-for="item in counter" :key="item">
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
        >القيمة</label
      >
    </div>

        <button
        @click="counter += 1"
        class="bg-blue-600 px-4 py-2 text-white rounded"
        expand="block"
      >
        اضف قيمة جديدة
      </button>

    


    <div class="checkout my-2">
      <button
        class="bg-blue-600 px-4 py-2 text-white rounded"
        expand="block"
        type="submit"
      >
        اضافه فلتر
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
      counter : 1
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
