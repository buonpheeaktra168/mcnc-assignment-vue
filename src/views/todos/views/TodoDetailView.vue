<template>
    <div>
        <div v-if="store.isLoading">
            <LoadingSpinner title="Loading..." />
        </div>
        <div>
            <h1>{{ todosDetails.title }}</h1>
            <p>{{ todosDetails.description }}</p>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useTodoStore } from '../store/useTodoStore';
import LoadingSpinner from '../../../components/LoadingSpinner.vue';

const route = useRoute()
const store = useTodoStore()
const todosDetails = ref('')
onMounted(async () => {
    todosDetails.value = await store.getTodoById(route.params.id);
    todosDetails.value;
})


</script>