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
    <h1>Pinia test</h1>
    <div>
      <p>{{ store.user.name }}</p>
      <p>{{ store.user.email }}</p>
      <p>{{ store.website }}</p>
      <input type="text" v-model="nameInput" placeholder="New Name">
      <button @click="handleSubmit">Change Name</button>
      <p>Count is{{counterStore.count}}</p>
      <button @click="counterStore.increment(1)">Increment</button>
      <button @click="counterStore.waitAndAdd">wait count</button>
    </div>
  </div>

</template>

<script setup>
import { ref, defineAsyncComponent } from "vue";
import { useUserStore } from "../store/user";
import { useCounterStore } from "../store/counter";

const isModalActive = ref(null);
const store = useUserStore();
const counterStore = useCounterStore()
const nameInput = ref("");

counterStore.count++;
counterStore.increment(2);

const Modal = defineAsyncComponent({
  loader: () => import('../components/Modal.vue'),
})
const LoadingSpinner = defineAsyncComponent(() => import('../components/LoadingSpinner.vue'))

const openModal = () => {
  isModalActive.value = true
}
const closeModal = () => {
  isModalActive.value = false
}

const handleSubmit = () => {
  store.changeName(nameInput.value);
  nameInput.value = "";
}
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
