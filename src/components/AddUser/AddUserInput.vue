<template>
  <form class="w-full p-4" @submit.prevent="addUser()">
    <div class="floating-input mb-5 relative">
      <input
        type="text"
        id="name"
        class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
        placeholder=" "
        autocomplete="off"
        v-model="userName"
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
        id="email"
        class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
        placeholder=" "
        autocomplete="off"
        v-model="email"
      />
      <label
        for="email"
        class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
        >االايميل</label
      >
    </div>

    <div class="floating-input mb-5 relative">
      <input
        type="text"
        id="city"
        class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
        placeholder=" "
        autocomplete="off"
        v-model="city"
      />
      <label
        for="city"
        class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
        >المدينة</label
      >
    </div>

    <div class="floating-input mb-5 relative">
      <input
        type="text"
        id="address"
        class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
        placeholder=" "
        autocomplete="off"
        v-model="address"
      />
      <label
        for="address"
        class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
        >العنوان</label
      >
    </div>

    <div class="floating-input mb-5 relative">
      <input
        type="number"
        id="tel"
        class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
        placeholder=" "
        autocomplete="off"
        v-model="tel"
      />
      <label
        for="tel"
        class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
      >
        رقم الهاتف</label
      >
    </div>
    <div class="floating-input mb-5 relative">
      <input
        type="password"
        id="password"
        class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
        placeholder=" "
        autocomplete="off"
        v-model="password"
      />
      <label
        for="password"
        class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
        >كلمه السر</label
      >
    </div>

    <label
      for="countries"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
    >
      نوع المستخدم
    </label>
    <select
      id="countries"
      v-model="role"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option value="admin">مشرف</option>
      <option value="user">زبون</option>
    </select>

    <div class="checkout py-2">
      <button
        class="bg-blue-600 px-4 py-2 text-white rounded"
        expand="block"
        type="submit"
      >
        اضف المستخدم
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "AddUserInput",
  data() {
    return {
      userName: "",
      email: "",
      password: "",
      city: "",
      address: "",
      tel: "",
      role: "",
      errors: "",
    };
  },
  methods: {
    async addUser() {
      // loader
      let loader = this.$loading.show({
        // Optional parameters
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
        color: "#836aee",
        blur: "2px",
      });
      if (this.userName == "" || this.userName == undefined) {
        this.errors = "الرجاء ادخال اسم المستحدم";
        this.responseAlert(this.errors, " عفوا ", "warning");
        loader.hide();

        return;
      }
      if (this.email == "" || this.email == undefined) {
        this.errors = "الرجاء ادخال ايميل المستحدم";
        this.responseAlert(this.errors, " عفوا ", "warning");
        loader.hide();

        return;
      }
      if (this.password == "" || this.password == undefined) {
        this.errors = "الرجاء ادخال كلمة سر المستحدم";
        this.responseAlert(this.errors, " عفوا ", "warning");
        loader.hide();

        return;
      }
      if (this.city == "" || this.city == undefined) {
        this.errors = "الرجاء ادخال مدينة المستحدم";
        this.responseAlert(this.errors, " عفوا ", "warning");
        loader.hide();

        return;
      }
      if (this.address == "" || this.address == undefined) {
        this.errors = "الرجاء ادخال عنوان المستحدم";
        this.responseAlert(this.errors, " عفوا ", "warning");
        loader.hide();

        return;
      }
      if (this.tel == "" || this.tel == undefined) {
        this.errors = "الرجاء ادخال هاتف المستحدم";
        this.responseAlert(this.errors, " عفوا ", "warning");
        loader.hide();

        return;
      }
      if (this.role == "" || this.role == undefined) {
        this.errors = "الرجاء ادخال دور المستحدم";
        this.responseAlert(this.errors, " عفوا ", "warning");
        loader.hide();

        return;
      }
      const formData = {
        userName: this.userName,
        email: this.email,
        password: this.password,
        city: this.city,
        address: this.address,
        tel: this.tel,
        role: this.role,
      };
      if (await this.$store.dispatch("register", formData)) {
        this.responseAlert("تمت إضافة المستخدم بنجاح", "تم", "success");
        loader.hide();
      } else {
        this.responseAlert("خطاء اثناء اضافة المستخدم", "خطاء", "error");
        loader.hide();
      }
      this.userName = "";
      this.email = "";
      this.password = "";
      this.city = "";
      this.address = "";
      this.tel = "";
      this.role = "";
    },
  },

  inject: ["responseAlert"],
};
</script>

<style></style>
