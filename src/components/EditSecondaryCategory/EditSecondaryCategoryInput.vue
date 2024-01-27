<template>
  <form
    class="w-full p-4"
    enctype="multipart/form-data"
    @submit.prevent="updateSecondaryCategory()"
    ref="form"
  >
    <div class="floating-input mb-5 relative">
      <input
        type="text"
        id="name"
        class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
        placeholder=" "
        autocomplete="off"
        name="name"
        v-model="SecondaryCategory.name"
      />
      <label
        for="email"
        class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
        >الاسم
      </label>
    </div>

    <label
      for="countries"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
    >
      القسم
    </label>
    <select
      id="countries"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      name="categoryId"
    >
      <option
        :key="category.id"
        :value="category.id"
        v-for="category in allCategories"
      >
        {{ category.name }}
      </option>
    </select>

    <div class="checkout">
      <button
        class="bg-blue-600 px-4 py-2 text-white rounded"
        expand="block"
        type="submit"
      >
        تعديل قسم
      </button>
    </div>
  </form>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "EditSecondaryCategoryInput",
  data() {
    return {
      SecondaryCategory: { id: null },
    };
  },
  // props: ["SecondaryCategoryId"],
  methods: {
    async updateSecondaryCategory() {
      let loader = this.$loading.show({
        // Optional parameters
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
        color: "#836aee",
        blur: "2px",
      });
      const id = this.SecondaryCategory?.id;
      // const formData = new FormData(this.$refs.form);
      const payload = { id, secondaryCategory: this.SecondaryCategory };
      if (await this.$store.dispatch("updateSecondaryCategory", payload)) {
        this.responseAlert("تم تعديل الفئة بنجاح", "تم", "success");
      } else {
        this.responseAlert("خطاء اثناء تعدبل الفئة", "خطاء", "error");
      }
      loader.hide();
    },
  },
  async created() {
    const id = this.$route?.params?.id;
    const self = this;
    this.$store.state.secondaryCategories.secondaryCategories.forEach(
      (SecondaryCategory) => {
        if (SecondaryCategory?.id == id) {
          self.SecondaryCategory = SecondaryCategory;
        }
      }
    );
    await this.$store.dispatch("fetchCategories");
  },
  inject: ["responseAlert"],
  computed: mapGetters(["allCategories"]),
};
</script>

<style></style>
