<template>
  <div>
    <vue-final-modal
      v-model="showModal"
      classes="modal-container"
      content-class="modal-content"
    >
      <button class="modal__close" @click="showModal = false">
        <mdi-close></mdi-close>
      </button>
      <span class="modal__title">Hello, vue-final-modal</span>
      <div class="modal__content">
        <p>
          Vue Final Modal is a renderless, stackable, detachable and lightweight
          modal component.
        </p>
      </div>
    </vue-final-modal>
    <v-button @click="showModal = true">Open modal</v-button>
  </div>
</template>

<script>
import { VueFinalModal } from "vue-final-modal";
export default {
  data: () => ({
    showModal: false,
  }),
  components: {
    VueFinalModal,
  },
};
</script>

<style scoped>

</style>

<style scoped>
.dark-mode div::v-deep .modal-content {
  border-color: #2d3748;
  background-color: #1a202c;
}
</style>
