<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="body">
      <Modal :modalActive="modalActive" @close="closeModal">
        <header>Modal title !!</header>
        <p>Are you sure do you want to close ?</p>
      </Modal>
      <button @click="openModal">Open Modal</button>
    </div>
  </div>
</template>

<script>
import Modal from "../components/Modal.vue";
import { ref } from "vue";


export default {
  components: {
    Modal,
  },
  setup() {
    const modalActive = ref(false);
    const openModal = () => {
      modalActive.value = true;
    };
    const closeModal = () => {
      modalActive.value = false;
    };
    return { modalActive, openModal, closeModal };
  },
};
</script>

<style>
.about {
  display: flex;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: rgb(255, 255, 255);
  height: 100vh;
  flex-direction: column;
  align-items: center;
}
</style>
