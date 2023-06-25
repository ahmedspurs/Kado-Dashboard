<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <!-- search -->
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
    <!-- table -->
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">اسم الزبون</th>
          <th scope="col" class="px-6 py-3">رقم الزبون</th>
          <th scope="col" class="px-6 py-3">الحاله</th>
          <th scope="col" class="px-6 py-3">تاريخ الطلب</th>
          <th scope="col" class="px-6 py-3">
            <span class="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          :key="order.id"
          v-for="order in filtered"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
          >
            {{ order?.user?.userName }}
          </th>
          <td class="px-6 py-4">{{ order?.user?.phone }}</td>
          <td class="px-6 py-4" v-if="order?.status == 'wait'">قيد الانتظار</td>
          <td class="px-6 py-4" v-if="order?.status == 'process'">
            قيد التنفيذ
          </td>
          <td class="px-6 py-4" v-if="order?.status == 'complete'">مكتمل</td>
          <td class="px-6 py-4" v-if="order?.status == 'canceled'">ملغي</td>
          <td class="px-6 py-4">
            {{ dateTime(order?.createdAt) }}
          </td>
          <td class="px-6 py-4">
            <router-link
              :to="{ name: 'OrderDetails', params: { id: order.id || 1 } }"
            >
              <a
                type="button"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >عرض التفاصيل</a
              >
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "OrdersTable",
  data() {
    return {
      search: "",
    };
  },
  computed: {
    ...mapGetters(["allOrders"]),
    filtered() {
      return this.allOrders.filter((item) => {
        return item?.user?.userName?.includes(this.search);
      });
    },
  },
  inject: ["dateTime"],
};
</script>

<style></style>
