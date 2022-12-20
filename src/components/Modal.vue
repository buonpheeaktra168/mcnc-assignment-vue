<template>
  <transition name="modal-animation">
    <div class="modal">
      <transition name="modal-animation-inner">
        <div class="modal-inner">
          <h1 v-if="props.title">{{ title }}</h1>
          <p v-if="props.message">{{ props.message }}</p>
          <i class="fa fa-times-circle"></i>
          <slot />
          <button @click="onClose" v-if="props.close">{{ props.close }}</button>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup>

import { defineProps, defineEmits } from 'vue';
await new Promise((res) => setTimeout(res, 200));
const props = defineProps({
  title: String,
  message: String,
  close: String
})

const emits = defineEmits(["isClose"])
const onClose = () => { emits("isClose") }

</script>

<style>
.modal-animation-enter-active,
.modal-animation-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animation-enter-from,
.modal-animation-leave-to {
  opacity: 0;
}

.modal-animation-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-animation-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-animation-enter-from {
  opacity: o;
  transform: scale(0.002s);
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  background-color: rgb(255, 255, 255, 0.7);
  left: 0;
  border-radius: 12px;
}

.modal-inner {
  display: flex;
  position: relative;
  max-width: 640px;
  width: 80%;
  box-shadow: 2px 6px 20px 6px rgba(0, 0, 0, 0.2);
  background-color: #ffff;
  padding: 64px 16px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

i {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 20px;
  cursor: pointer;
}

.button {
  display: flex;
  justify-content: flex-end;
}
</style>