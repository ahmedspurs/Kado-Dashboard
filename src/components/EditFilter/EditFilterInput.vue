<template>
  <form
    class="w-full p-4"
    enctype="multipart/form-data"
    @submit.prevent="editFilter()"
    ref="form"
  >
    <div class="floating-input mb-5 relative">
      <input
        type="text"
        id="name"
        class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
        placeholder=" "
        autocomplete="off"
        v-model="selectedFilter.name"
        required
        name="name"
      />
      <label
        for="name"
        class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
        >الاسم</label
      >
    </div>

    <div class="mb-2">
      <button
        @click="
          selectedFilter?.tags.push({
            filterId: selectedFilter?.id,
          })
        "
        type="button"
        class="bg-blue-600 px-4 py-2 text-white rounded"
        expand="block"
      >
        اضف قيمة جديدة
      </button>
    </div>

    <div
      class="floating-input mb-5 relative"
      v-for="(option, index) in selectedFilter?.tags"
      :key="option"
    >
      <div style="display: flex">
        <div>
          <input
            type="text"
            id="name"
            class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
            placeholder="القيمة"
            autocomplete="off"
            v-model="option.tag"
            name="name"
          />
        </div>
        <div>
          <button
            :disabled="selectedFilter?.tags.length <= 1"
            class="p-1 rounded-full"
            @click="deleteTag(index)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-red-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div class="checkout my-2">
      <button
        class="bg-blue-600 px-4 py-2 text-white rounded"
        expand="block"
        type="submit"
      >
        تعديل الفلتر
      </button>
    </div>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "EditFilter",
  data() {
    return {
      errors: "",
      selectedFilter: {},
      options: [{}],
    };
  },
  methods: {
    // all components response alert
    responseAlert(text, title, icon) {
      this.$swal.fire({
        title: `${title}`,
        text: ` ${text} `,
        icon: `${icon}`,
        toast: true,
        position: "top-start",
        showConfirmButton: false,
        timer: 2000,
      });
    },
    async editFilter() {
      let loader = this.$loading.show({
        // Optional parameters
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
        color: "#836aee",
        blur: "2px",
      });
      const id = this.selectedFilter?.id;
      const payload = { id, data: this.selectedFilter };
      if (await this.$store.dispatch("updateFilter", payload)) {
        this.responseAlert("تم تعديل الفلتر بنجاح", "تم", "success");
      } else {
        this.responseAlert("خطاء اثناء تعديل الفلتر", "خطاء", "error");
      }
      loader.hide();
    },
    deleteTag(index) {
      this.selectedFilter?.tags.splice(index, 1);
    },
  },
  async mounted() {
    const id = this.$route?.params?.id;
    try {
      const response = await axios.get(`/api/v1/filters/${id}`);
      this.selectedFilter = response.data;
      console.log(this.selectedFilter);
    } catch (err) {
      console.log(err);
    }
  },
  provide() {
    return {
      responseAlert: this.responseAlert,
    };
  },
};
</script>

<style></style>
