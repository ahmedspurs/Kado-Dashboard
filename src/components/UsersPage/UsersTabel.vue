<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div class="py-2 w-full">
      <label
        for="search3"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >بحث</label
      >
      <div class="relative">
        <div
          class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
        >
          <svg
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="search3"
          v-model="search"
          class="block p-4 pl-5 w-full text-left text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="البحث"
          required
        />
      </div>
    </div>

    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">رقم المستخدم</th>
          <th scope="col" class="px-6 py-3">اسم المستخدم</th>
          <th scope="col" class="px-6 py-3">رقم الهاتف</th>
          <th scope="col" class="px-6 py-3">نوع المستخدم</th>
          <th scope="col" class="px-6 py-3">
            <span class="sr-only">Edit</span>
          </th>
          <th scope="col" class="px-6 py-3">
            <span class="sr-only">Delete</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          :key="user.id"
          v-for="(user, index) in filtered"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
          >
            {{ index + 1 }}
          </th>
          <td class="px-6 py-4">{{ user.userName }}</td>
          <td class="px-6 py-4">{{ user.phone }}</td>
          <td class="px-6 py-4">
            {{ user.role == "admin" ? "مشرف" : "زبون" }}
          </td>
          <td class="px-6 py-4">
            <router-link
              :to="{ name: 'EditUser', params: { id: user.id || 1 } }"
            >
              <a
                type="button"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >تعديل
              </a>
            </router-link>
          </td>
          <td class="px-6 py-4">
            <a
              type="button"
              class="font-medium text-red-600 dark:text-blue-500 hover:underline"
              @click="deleteProduct(user.id)"
              >حذف
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "UsersTabel",
  data() {
    return {
      success: false,
      failed: false,
      showModalAdd: false,
      search: "",
    };
  },
  computed: {
    ...mapGetters(["allUsers"]),
    filtered() {
      return this.allUsers.filter((item) => {
        return item?.userName?.includes(this.search);
      });
    },
  },
  methods: {
    deleteProduct(id) {
      this.$swal
        .fire({
          title: " هل انت متاكد ؟ ",
          text: " لن تستطيع استرجاع هذا المستحدم مجددا ! ",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#1C64F2",
          cancelButtonColor: "#d33",
          confirmButtonText: " نعم, انا متاكد ",
          cancelButtonText: "الغاء",
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.$store.dispatch("deleteUser", id);
            this.$swal.fire({
              icon: "success",
              title: " تم ",
              text: " تم حذف المستخدم بنجاح ",
              confirmButtonColor: "#16a34a",
            });
          } else {
            this.$swal.fire({
              icon: "error",
              title: " الغاء ",
              text: " تم الغاء عملية الحذف ",
              confirmButtonColor: "#16a34a",
              confirmButtonText: "حسنا",
            });
          }
        });
    },
  },
};
</script>

<style></style>
