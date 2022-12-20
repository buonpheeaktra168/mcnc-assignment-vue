<script setup>
import { ref, defineAsyncComponent } from "vue";
const isModalActive = ref(false);

const Modal = defineAsyncComponent({
  loader: () => import('../components/Modal.vue'),
})
const LoadingSpinner = defineAsyncComponent({
  loader: () => import('../components/LoadingSpinner.vue')
})

const openModal = () => {
  isModalActive.value = true
}
const closeModal = () => {
  isModalActive.value = false
}


</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="body">
      <Suspense v-if="isModalActive">
        <Modal @isClose="closeModal" title="Hello" close="close" message="Do you want to close?" />
        <template #fallback>
          <LoadingSpinner title="Loading ..." />
        </template>
      </Suspense>
    </div>
    <button @click="openModal">Open Modal</button>
  </div>
</template>

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
