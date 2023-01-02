<template>
    <div>Component C</div>
    <div v-for="user in users" :key="user.id">
        <UserCard :name="user.name" :email="user.email" />
    </div>
</template>

<script setup>
import { inject } from 'vue';
import UserCard from './UserCard.vue';

const users = inject('listUsers')
</script>