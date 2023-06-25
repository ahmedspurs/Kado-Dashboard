<template>
  <div class="p-4">
    <div class="flex justify-between items-center">
      <div class="inputs w-full">
        <label
          for="countries"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          الحاله
        </label>
        <select
          id="countries"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          v-model="status"
        >
          <option value="process">تغيير الحاله الي قيد التنفيد</option>
          <option value="complete">تغيير الحاله الي مكتمل</option>
          <option value="canceled">تغيير الحاله الي ملغي</option>
        </select>
      </div>
      <div class="button w-full text-center">
        <button
          class="bg-blue-600 px-4 py-2 text-white rounded mt-4"
          expand="block"
          @click="changeStatus()"
        >
          تعديل الحاله
        </button>
      </div>
    </div>
    <div class="user py-4">
      <h2 class="text-center py-4">تفاصيل العميل</h2>
      <customer-details :user="user" :order="order" />
    </div>
    <div class="poducts py-4">
      <h2 class="text-center py-4">تفاصيل المنتجات</h2>
      <products-details
        :cart="cart"
        :total="total"
        :deliveryPrice="deliveryPrice"
      />
    </div>

    <div class="poducts py-4" v-if="order.attachment !== '-'">
      <h2 class="text-center py-4">تفاصيل الدفع</h2>
      <order-payments :order="order" />
    </div>
  </div>
</template>

<script>
import CustomerDetails from "@/components/OrderDetails/CustomerDetails.vue";
import ProductsDetails from "@/components/OrderDetails/ProductsDetails.vue";
import OrderPayments from "@/components/OrderDetails/OrderPayments.vue";
import axios from "axios";
export default {
  data() {
    return {
      order: {},
      user: {},
      deliveryPrice: 0,
      cart: [],
      total: 0,
      status: "",
      id: null,
    };
  },
  components: { CustomerDetails, ProductsDetails, OrderPayments },
  name: "OrderDetails",
  methods: {
    async changeStatus() {
      if (this.status == "") {
        this.responseAlert(" خطاء ", " الرجاء اختيار تحديث للحالة", "error");
        return;
      }
      // loader
      let loader = this.$loading.show({
        // Optional parameters
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
        color: "#836aee",
        blur: "2px",
      });
      const id = this.id;
      const response = await axios.put(`/api/v1/orders/${id}`, {
        status: this.status,
      });
      if (response.data.success) {
        this.responseAlert(" تم ", " تم تحديث حالة المنتج", "success");
      } else {
        this.responseAlert(" خطاء ", " حدث خطاء اثناء تحديث الحالة", "error");
      }
      loader.hide();
    },
  },
  inject: ["checkCookie", "responseAlert"],
  created() {
    this.checkCookie();
    const id = this.$route?.params?.id;
    this.id = id;
    const self = this;
    this.$store.state.orders.orders.forEach((order) => {
      if (order?.id == id) {
        self.order = order;
        self.cart = order.cart;
        (self.deliveryPrice = order.deliveryPrice),
          (self.total = order.totalPrice);
        self.user = {
          id: order.userId,
          userName: order?.user?.userName,
          address: order.address,
          addrDetails: order.addrDetails,
          status: order.status,
          tel: order.user.tel,
          createdAt: order.createdAt,
        };
      }
    });
  },
};
</script>

<style></style>
