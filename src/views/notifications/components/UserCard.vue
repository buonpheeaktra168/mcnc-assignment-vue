<template>
    <div class="user-card">
        <div v-if="props.name"> Name: {{ props.name }}</div>
        <div v-if="props.username">username: {{ props.username }}</div>
        <div v-if="props.email">Email: {{ props.email }}</div>
        <div v-if="props.companyName">Company Name: {{ props.companyName }}</div>
        <div v-if="props.phoneNumber">Phone Number: {{ props.phoneNumber }}</div>
        <div v-if="props.userId">UserId: {{ props.userId }}</div>
        <div v-if="props.id">Id: {{ props.id }}</div>
        <div v-if="props.title">
            <h4>title: {{ props.title }}</h4>
        </div>
        <div v-if="props.body">body: {{ props.body }}</div>
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
    userId: Number,
    id: Number,
    title: String,
    body: String,
})
</script>

<style>
.user-card {
    display: flex;
    flex-direction: column;
    background-color: aliceblue;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
    padding: 12px;
    margin: 12px 20px 12px 20px;
    border-radius: 12px;
    max-width: 720px;
}

.user-card:hover {
    background-color: #b9b9b9;

}
</style>