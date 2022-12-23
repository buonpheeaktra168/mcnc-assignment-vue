<template>
    <div>Component A</div>
    <div v-for="user in users" :key="user.id">
        <UserCard :name="user.name" :phoneNumber="user.phone"/>
    </div>
    <ComponentB />
</template>

<script setup>
import { inject } from 'vue';
import ComponentB from './ComponentB.vue';
import UserCard from './UserCard.vue';

const users = inject('listUsers');

</script>