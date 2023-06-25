<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">الرقم</th>
          <th scope="col" class="px-6 py-3">معرف القسم الفرعي</th>
          <th scope="col" class="px-6 py-3">الاسم</th>
          <th scope="col" class="px-6 py-3 text-center">الصورة</th>
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
          :key="subCategory.id"
          v-for="(subCategory, index) in filtered"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
          >
            {{ index + 1 }}
          </th>
          <td class="px-6 py-4">{{ subCategory.id }}</td>
          <td class="px-6 py-4">{{ subCategory.name }}</td>

          <td class="px-6 py-4 flex justify-center">
            <img :src="'/uploads/' + subCategory.image" alt="" class="w-20" />
          </td>
          <td class="px-6 py-4">
            <router-link
              :to="{
                name: 'EditSubCategory',
                params: { id: subCategory.id || 1 },
              }"
            >
              <a
                type="button"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                data-modal-toggle="EditCat"
                >تعديل
              </a>
            </router-link>
          </td>
          <td class="px-6 py-4">
            <a
              type="button"
              @click="deleteSubCategory(subCategory.id)"
              class="deleteBtn font-medium text-red-600 dark:text-blue-500 hover:underline"
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
  name: "SubCategoryTabel",
  data() {
    return {
      success: false,
      failed: false,
      search: "",
      showModalAdd: false,
      id: "",
    };
  },
  computed: {
    ...mapGetters(["allSubCategories"]),
    filtered() {
      return this.allSubCategories.filter((item) => {
        return item?.name?.includes(this.search);
      });
    },
  },
  methods: {
    async deleteSubCategory(id) {
      this.$swal
        .fire({
          title: " هل انت متاكد ؟ ",
          text: " لن تستطيع استرجاع هذا القسم الفرعي مجددا ! ",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#1C64F2",
          cancelButtonColor: "#d33",
          confirmButtonText: " نعم, انا متاكد ",
          cancelButtonText: "الغاء",
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.$store.dispatch("deleteSubCategory", id);
            this.$swal.fire({
              icon: "success",
              title: " تم ",
              text: " تم حذف القسم الفرعي بنجاح ",
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
    mounted() {
      console.log(this.allSubCategories);
    },
    modal(id) {
      this.id = id;
      this.showModalAdd = true;
    },
  },
};
</script>

<style></style>
