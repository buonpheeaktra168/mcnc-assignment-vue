<script setup>
import {  RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue';
</script>

<template>
  <NavigationBar />
  <RouterView />
</template>

<style>
  button {
    padding: 20px 40px;
    border: none;
    font-size: 16px;
    background-color: brown;
    color: aliceblue;
    cursor: pointer;
    border-radius: 5px;
  }
</style>