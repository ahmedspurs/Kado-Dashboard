<template>
  <div class="flex items-cnter justify-between px-4 py-2">
    <div class="p-4"></div>
    <h2>تغيير كلمه المرور</h2>
    <div class="flex items-center"></div>
  </div>
  <div class="min-h-screen py-6 px-2">
    <!-- reg altert -->
    <div
      v-if="$store.state.reg"
      class="flex p-4 mb-4 bg-green-100 rounded-lg dark:bg-green-200"
      role="alert"
    >
      <div class="ml-3 text-sm font-medium text-green-700 dark:text-green-800">
        تم تسجيل حسابك بنجاح , يمكنك الان تسجيل الدخول
      </div>
      <button
        type="button"
        @click="$store.state.reg = false"
        class="ml-auto -mx-1.5 -my-1.5 bg-green-100 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300"
      >
        <span class="sr-only">Close</span>
        <svg
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div class="relative px-4 py-10 sm:rounded-3xl sm:p-20">
        <div class="max-w-md mx-auto">
          <div class="">
            <div
              class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
            >
              <div class="floating-input mb-5 relative">
                <input
                  type="password"
                  v-model="newPassword"
                  id="newPassword"
                  class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
                  placeholder=" "
                  autocomplete="off"
                />
                <label
                  for="email"
                  class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
                >
                  كلمه السر الجديدة</label
                >
              </div>
              <div class="floating-input mb-5 relative">
                <input
                  type="password"
                  v-model="confirmPassword"
                  id="confirmPassword"
                  class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
                  placeholder=" "
                  autocomplete="off"
                />
                <label
                  for="email"
                  class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
                >
                  اعد كتابه كلمه السر الجديدة</label
                >
              </div>
              <div class="relative">
                <button
                  class="bg-violet-600 w-full p-2 text-white rounded text-xl"
                  @click="ChangePassword"
                >
                  تغيير كلمه المرور
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      empty: false,
      newPassword: "",
      confirmPassword: "",
      password: "",
      id: null,
      user: {
        email: "",
      },
      config: {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user_token"),
        },
      },
    };
  },
  created() {
    // this.veirfy();
    this.id = this.$route.params.id;
    const self = this;
    this.$store.state.users.users.forEach((user) => {
      if (user.id == self.id) {
        self.user = user;
      }
    });
  },
  methods: {
    async ChangePassword() {
      /*
      let loader = this.$loading.show({
        // Optional parameters
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
        color: "#836aee",
        blur: "2px",
      });
      */
      if (this.newPassword == "" || this.confirmPassword == "") {
        // loader.hide();
        // this.failed();
        console.log("error");
      } else {
        try {
          const userData = {
            email: this.user.email,
            newPassword: this.newPassword,
            confirmPassword: this.confirmPassword,
          };
          const res = await axios.put(
            "http://localhost:5000/api/v1/auth/adminupdatepassword",
            userData,
            this.config
          );

          if (res.data.success) {
            this.responseAlert(
              " تم ",
              " تم تغيير كلمة المرور بنجاح ",
              "success"
            );
            /*
            loader.hide();

            this.$swal.fire({
              position: "top",
              icon: "success",
              title: "تم تعديل كلمة المرور بنجاح",
              showConfirmButton: false,
              timer: 2000,
            });

            this.clearFields();
            */
          } else {
            // loader.hide();

            // this.wrong();
            console.log("error2");
          }
        } catch (error) {
          // loader.hide();

          console.error(error);
          // this.wrong();
          // expected output: ReferenceError: nonExistentFunction is not defined
          // Note - error messages will vary depending on browser
        }
      }
    },
    async failed() {
      await this.$swal.fire({
        icon: "error",
        title: "حدث خطأ ...",
        text: "الرجاء ملئ حميع الحقول",
        confirmButtonText: "حسنا",
      });
    },
    async wrong() {
      await this.$swal.fire({
        icon: "error",
        title: "حدث خطأ ...",
        text: " كلمه المرور خاطئه  ",
        confirmButtonText: "حسنا",
      });
    },
    inject: ["responseAlert"],
    clearFields() {
      this.newPassword = "";
      this.confirmPassword = "";
    },
  },
};
</script>

<style></style>
