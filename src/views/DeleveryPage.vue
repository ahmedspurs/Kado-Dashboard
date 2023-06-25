<template>
  <div class="w-full p-4">
    <h2 class="text-center py-4 text-black">مناطق التوصيل</h2>
    <div class="text-center pb-4">

      <router-link to="/AddDelivery">
                <button class="px-4 py-2 bg-blue-600 text-white">
          اضف منطقه جديدة
        </button>
      </router-link>

    </div>
    <delevery-tabel />

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
        <delevery-add />
      </div>
    </vue-final-modal>
  </div>
</template>

<script>
import DeleveryTabel from "@/components/DeleveryPage/DeleveryTabel.vue";
import DeleveryAdd from "@/components/AddDelivery/AddDelivery.vue";
import { VueFinalModal  } from "vue-final-modal";

export default {
  components: { DeleveryTabel, DeleveryAdd , VueFinalModal },
  name: "DelevaryPage",
  data(){
return {
  showModalAdd : false
}
  },
  inject: ["checkCookie"],
  created() {
    this.checkCookie();
    this.$store.dispatch("fetchDeliveries");
  },
};
</script>

<style></style>
