<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">المنطقه</th>
          <th scope="col" class="px-6 py-3">المدينه</th>
          <th scope="col" class="px-6 py-3">السعر</th>
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
          :key="delivery.id"
          v-for="delivery in allDeliveries"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
          >
            {{ delivery.city == "khartoum" ? "الخرطوم" : "" }}
            {{ delivery.city == "bahri" ? "بحري" : "" }}
            {{ delivery.city == "omdurman" ? "امدرمان" : "" }}
          </th>

          <td class="px-6 py-4">{{ delivery.addr }}</td>

          <td class="px-6 py-4">{{ delivery.deliveryTax }}</td>

          <td class="px-6 py-4">
            <router-link
              :to="{ name: 'EditDelivery', params: { id: delivery.id || 1 } }"
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
              @click="deleteDelivery(delivery.id)"
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
  name: "DeleveryTabel",
  data() {
    return {
      success: false,
      failed: false,
      showModalAdd: false,
      id: "",
    };
  },
  computed: mapGetters(["allDeliveries"]),
  methods: {
    async deleteDelivery(id) {
      this.$swal
        .fire({
          title: " هل انت متاكد ؟ ",
          text: " لن تستطيع استرجاع هذه المنطقة مجددا ! ",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#1C64F2",
          cancelButtonColor: "#d33",
          confirmButtonText: " نعم, انا متاكد ",
          cancelButtonText: "الغاء",
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.$store.dispatch("deleteDelivery", id);
            this.$swal.fire({
              icon: "success",
              title: " تم ",
              text: " تم حذف المنطقة بنجاح ",
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
    modal(id) {
      this.id = id;
      this.showModalAdd = true;
    },
  },
};
</script>

<style></style>
