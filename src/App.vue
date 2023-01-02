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
  background-color: #04AA6D;
  border: none;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
}
</style>