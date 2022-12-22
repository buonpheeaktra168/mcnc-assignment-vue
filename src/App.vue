<script setup>
import { defineAsyncComponent } from 'vue';
import { RouterView } from 'vue-router'
const NavigationBar = defineAsyncComponent(
  () => import('./components/NavigationBar.vue')
)
</script>

<template>
  <NavigationBar />
  <RouterView />
</template>

<style>
button {
  padding: 12px;
  border: none;
  font-size: 16px;
  background-color: brown;
  color: aliceblue;
  cursor: pointer;
  border-radius: 5px;
}
</style>