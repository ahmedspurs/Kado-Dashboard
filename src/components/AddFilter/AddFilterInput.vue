<template>
  <form
    class="w-full p-4"
    enctype="multipart/form-data"
    @submit.prevent="newFilter()"
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

    <div class="floating-input mb-5 relative">
      <input
        type="text"
        id="name"
        class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
        placeholder=" "
        autocomplete="off"
        v-model="option"
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
      @click="pushValues()"
      class="bg-blue-600 px-4 py-2 text-white rounded"
      expand="block"
    >
      اضف قيمة جديدة
    </button>
    <ul>
      <li v-for="value in values" :key="value" class="flex items-center py-2">
        <div>
          {{ value.tag }}
          <button class="p-1 rounded-full" @click="deleteTag(value)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-red-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </div>
      </li>
    </ul>
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
      values: [],
      option: "",
    };
  },
  methods: {
    deleteTag(value) {
      this.values.splice(value.id, 1);
    },
    pushValues() {
      this.values.push({ tag: this.option });
      this.option = "";
      console.log(this.values);
    },
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
    async newFilter() {
      // loader  //
      let loader = this.$loading.show({
        // Optional parameters
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
        color: "#836aee",
        blur: "2px",
      });

      if (this.name == "") {
        this.errors = " الرجاء ادخال اسم الفلتر ";
        this.responseAlert(this.errors, " عفوا ", "warning");
        loader.hide();

        return;
      }
      if (this.values.lenght <= 0) {
        this.errors = " الرجاء ادخال الاسم ";
        this.responseAlert(this.errors, " عفوا ", "warning");
        loader.hide();

        return;
      }
      this.values.push({ tag: this.option });
      const data = {
        name: this.name,
        values: JSON.stringify(this.values),
      };
      if (await this.$store.dispatch("addFilter", data)) {
        this.responseAlert("تمت إضافة الفلتر بنجاح", "تم", "success");
      } else {
        this.responseAlert(" حدث خطاء اثناء اضافة الفلتر ", "عفوا", "error");
      }

      this.name = "";
      this.option = "";
      this.values = [];
      loader.hide();
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
