<template>
  <div class="w-full py-8">
    <h2 class="text-center py-4 text-black">كل الاقسام</h2>
    <div class="text-center pb-4">
      
      <router-link to="/AddCategory">
                <button class="px-4 py-2 bg-blue-600 text-white">اضف قسم جديد</button>

      </router-link>
    
    </div>
    <div class="flex justify-center items-center">
      <category-table />
    </div>
    <!-- add modal -->
     <vue-final-modal
      v-model="showModalAdd"
      classes="modal-container"
      content-class="modal-content"
    >
     
      <div class="modal__content md:w-1/2 h-3/4 py-10 mx-auto bg-white my-4 relative">
         <button class=" absolute top-4 right-4 bg-white" @click="showModalAdd = false">
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>      </button>
        <add-category-input />
      </div>
    </vue-final-modal>
  </div>
</template>

<script>
import CategoryTable from "@/components/CategoryPage/CategoryTable.vue";
import AddCategoryInput from '@/components/AddCategory/AddCategoryInput.vue';
import { VueFinalModal  } from "vue-final-modal";

export default {
  components: { CategoryTable, AddCategoryInput , VueFinalModal },
  name: "CategoryPage",
  inject: ["checkCookie"],
  data(){
    return{
      showModalAdd : false
    }
  },
  created() {
    this.checkCookie();
    this.$store.dispatch("fetchCategories");
  },
};
</script>

<style></style>
