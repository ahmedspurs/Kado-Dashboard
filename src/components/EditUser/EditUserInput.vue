<template>
  <form class="w-full p-4" ref="form" @submit.prevent="updateUser()">
    <div class="floating-input mb-5 relative">
      <input
        type="text"
        class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
        placeholder=" "
        autocomplete="off"
        name="userName"
        v-model="user.userName"
      />
      <label
        for="phone"
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
        name="phone"
        v-model="user.phone"
      />
      <label
        for="phone"
        class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
        >رقم الهاتف</label
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
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      name="role"
      v-model="user.role"
    >
      <option :value="user.role">
        {{ user.role == "admin" ? "مشرف" : "زبون" }}
      </option>
      <option value="admin">مشرف</option>
      <option value="user">زبون</option>
    </select>

    <div class="checkout py-2">
      <button
        type="submit"
        class="bg-blue-600 px-4 py-2 text-white rounded"
        expand="block"
      >
        تعديل المستخدم
      </button>

      <router-link
        :to="{ name: 'CahngePassword', params: { id: user.id || 1 } }"
      >
        <button
          type="submit"
          class="bg-blue-600 px-4 py-2 text-white rounded"
          expand="block"
        >
          تعديل كلمه السر
        </button>
      </router-link>
    </div>
  </form>
</template>

<script>
export default {
  name: "EditUserInput",
  data() {
    return {
      user: {
        id: null,
      },
    };
  },
  props: ["id"],
  methods: {
    async updateUser() {
      // loader
      let loader = this.$loading.show({
        // Optional parameters
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
        color: "#836aee",
        blur: "2px",
      });
      const id = this.user.id;
      const formData = this.user;
      const payload = { id, user: formData };
      if (await this.$store.dispatch("updateUser", payload)) {
        this.responseAlert("تم تعديل المستخدم بنجاح", "تم", "success");
      } else {
        this.responseAlert("خطاء اثناء تعدبل المستخدم", "خطاء", "error");
      }
      loader.hide();
    },
  },
  created() {
    const id = this.$route.params.id;
    const self = this;
    this.$store.state.users.users.forEach((user) => {
      if (user.id == id) {
        self.user = user;
      }
    });
  },
  inject: ["responseAlert"],
};
</script>

<style></style>
