<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <!-- success added alert -->
    <div
      id="toast-success"
      v-show="success"
      class="flex items-center w-full w-full flex justify-between items-center p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
      role="alert"
    >
      <div class="flex items-center">
        <div
          class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200"
        >
          <svg
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div class="mr-2 text-sm font-normal">تمت لافه العنصر بنجاح</div>
      </div>

      <button
        type="button"
        class="-mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        data-dismiss-target="#toast-success"
        aria-label="Close"
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
    <!-- failed added alert -->

    <div
      id="toast-danger"
      v-show="failed"
      class="flex items-center justify-between w-full p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
      role="alert"
    >
      <div class="flex items-center">
        <div
          class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200"
        >
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
        </div>
        <div class="mr-2 text-sm font-normal">الرجاء ملء كل الحقول</div>
      </div>

      <button
        type="button"
        class="-mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        data-dismiss-target="#toast-danger"
        aria-label="Close"
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
    <div>
      <button class="px-4 py-1 bg-blue-600 text-white mx-1" @click="reset()">
        الكل
      </button>
      <button
        class="px-1 py-1 bg-blue-600 text-white mx-1"
        @click="
          isCommon = true;
          isFavorite = false;
          isSpecial = false;
        "
      >
        الافضل مبيعا
      </button>
      <button
        class="px-1 py-1 bg-blue-600 text-white mx-1"
        @click="
          isFavorite = true;
          isCommon = false;
          isSpecial = false;
        "
      >
        هدايا وصلتنا حديثا
      </button>
      <button
        class="px-1 py-1 bg-blue-600 text-white mx-1"
        @click="
          isSpecial = true;
          isCommon = false;
          isFavorite = false;
        "
      >
        هدايا و تنسيقات مميزة
      </button>
    </div>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">رقم المنتج</th>
          <th scope="col" class="px-6 py-3">معرف المنتج</th>
          <th scope="col" class="px-6 py-3">صورة المنتج</th>
          <th scope="col" class="px-6 py-3">اسم المنتج</th>
          <th scope="col" class="px-6 py-3">سعر الشراء</th>
          <th scope="col" class="px-6 py-3">سعر البيع</th>
          <th scope="col" class="px-6 py-3">الكمية</th>
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
          :key="product.id"
          v-for="(product, index) in isSpecial == true
            ? filtered4
            : isCommon == true
            ? filtered3
            : isFavorite == true
            ? filtered2
            : filtered"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
          >
            {{ index + 1 }}
          </th>
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
          >
            {{ product.id }}
          </th>
          <td class="px-6 py-4">
            <img
              :src="'/uploads/' + product.images[0].name"
              alt=""
              class="w-20"
            />
          </td>
          <td class="px-6 py-4">{{ product.name }}</td>
          <td class="px-6 py-4">{{ product.buyPrice }}</td>
          <td class="px-6 py-4">{{ product.sellPrice }}</td>
          <td class="px-6 py-4">{{ product.qty }}</td>
          <td class="px-6 py-4">متوفر</td>
          <td class="px-6 py-4">
            <router-link
              :to="{ name: 'EditProduct', params: { id: product.id || 1 } }"
            >
              <a
                type="button"
                data-modal-toggle="EditUser"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >تعديل
              </a>
            </router-link>
          </td>
          <td class="px-6 py-4">
            <a
              type="button"
              @click="deleteProduct(product.id)"
              class="font-medium text-red-600 dark:text-blue-500 hover:underline"
              >حذف
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- start edit modal -->

    <vue-final-modal
      v-model="showModalAdd"
      classes="modal-container"
      content-class="modal-content"
      class="overflow-scroll"
    >
      <div
        class="modal__content overflow-scroll md:w-1/2 py-10 mx-auto bg-white my-4 relative"
      >
        <button
          class="absolute top-4 right-4 bg-white"
          @click="showModalAdd = false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <edit-product-input :id="id" />
      </div>
    </vue-final-modal>

    <!-- end edit modal -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import EditProductInput from "../EditProduct/EditProductInput.vue";
import { VueFinalModal } from "vue-final-modal";

export default {
  name: "OrdersTable",
  computed: {
    ...mapGetters(["allProducts"]),
    filtered() {
      let self = this;
      return this.allProducts.filter((item) => {
        return item?.name?.includes(self?.search);
      });
    },
    filtered2() {
      let self = this;
      return this.allProducts.filter((item) => {
        return item?.name?.includes(self?.search) && item.isFavorite == true;
      });
    },
    filtered3() {
      let self = this;
      return this.allProducts.filter((item) => {
        return item?.name?.includes(self?.search) && item.isCommon == true;
      });
    },
    filtered4() {
      let self = this;
      return this.allProducts.filter((item) => {
        return item?.name?.includes(self?.search) && item.isSpecial == true;
      });
    },
  },

  components: { EditProductInput, VueFinalModal },
  data() {
    return {
      success: false,
      failed: false,
      showModalAdd: false,
      id: "",
      search: "",
      isCommon: false,
      isFavorite: false,
      isSpecial: false,
      all: false,
    };
  },
  methods: {
    reset() {
      this.isCommon = false;
      this.isFavorite = false;
      this.isSpecial = false;
    },
    deleteProduct(id) {
      this.$swal
        .fire({
          title: " هل انت متاكد ؟ ",
          text: " لن تستطيع استرجاع هذا المنتج مجددا ! ",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#1C64F2",
          cancelButtonColor: "#d33",
          confirmButtonText: " نعم, انا متاكد ",
          cancelButtonText: "الغاء",
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.$store.dispatch("deleteProduct", id);
            this.$swal.fire({
              icon: "success",
              title: " تم ",
              text: " تم حذف المنتج بنجاح ",
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
