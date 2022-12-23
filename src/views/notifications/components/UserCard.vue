<template>
    <div class="user-card">
        <div v-if="props.name"> Name: {{ props.name }}</div>
        <div v-if="props.username">username: {{ props.username }}</div>
        <div v-if="props.email">Email: {{ props.email }}</div>
        <div v-if="props.companyName">Company Name: {{ props.companyName }}</div>
        <div v-if="props.phoneNumber">Phone Number: {{ props.phoneNumber }}</div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    name: String,
    username: String,
    email: String,
    companyName: String,
    phoneNumber: String,
})
</script>

<style>
.user-card {
    display: flex;
    flex-direction: column;
    background-color: aliceblue;
    position: relative;
    max-width: 340px;
    box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.2);
    padding: 12px;
    margin-top: 12px;
    border-radius: 12px;
}
</style>