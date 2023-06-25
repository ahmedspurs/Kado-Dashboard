<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">رقم المستلم</th>
          <th scope="col" class="px-6 py-3">العنوان بالتفصيل</th>
          <th scope="col" class="px-6 py-3">رسالة الزبون</th>
          <th scope="col" class="px-6 py-3">الحاله</th>
          <th scope="col" class="px-6 py-3">تاريخ الطلب</th>
          <th scope="col" class="px-6 py-3">
            <span class="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <td class="px-6 py-4">{{ order?.phone }}</td>
          <!-- <td class="px-6 py-4">{{ user?.address }}</td> -->
          <td class="px-6 py-4">{{ order?.addrDetails }}</td>
          <td class="px-6 py-4">
            {{ order?.message ? order?.message : " بدون رسالة " }}
          </td>
          <td class="px-6 py-4" v-if="user?.status == 'wait'">قيد الانتظار</td>
          <td class="px-6 py-4" v-if="user?.status == 'process'">
            قيد التنفيذ
          </td>
          <td class="px-6 py-4" v-if="order?.status == 'complete'">مكتمل</td>
          <td class="px-6 py-4" v-if="order?.status == 'canceled'">ملغي</td>
          <td class="px-6 py-4">{{ dateTime(order?.createdAt) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "CustomerDetails",
  props: ["user", "order"],
  inject: ["dateTime"],
};
</script>

<style></style>
