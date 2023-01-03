<template>
    <div class="todo-container">
        <div v-if="store.isLoading">
            <LoadingSpinner title="Loading..." />
        </div>
        <div>
            <form @submit.prevent="handleUpdate" id="form">
                <input type="text" v-model.trimp="todoRef.title" />
                <input type="text" v-model.trimp="todoRef.description" />
                <button type="submit" :disabled="store.isLoading">Update</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useTodoStore } from '../store/useTodoStore';
import LoadingSpinner from '../../../components/LoadingSpinner.vue';

const route = useRoute()
const router = useRouter()
const store = useTodoStore()
const todoRef = ref({ title: '', description: '' })

onMounted(async () => {
    todoRef.value = await store.getTodoById(route.params.id)
    todoRef.value;
});

const handleUpdate = async () => {
    await store.updateTodo(route.params.id, todoRef.value)
    router.replace({ name: 'todoFirebasePinia' })
}
</script>

<style scoped>
.todo-container {
    display: flex;
    flex-direction: column;
    margin-top: 80px;
}

#form {
    display: flex;
    width: 80%;
    padding: 5px 5px;
    margin: 0 auto;
    flex-direction: column;
}

#form input {
    width: 100%;
    height: 30px;
    padding: 10px 0 10px 20px;
    margin: 8px 0;
    border: 0px;
    outline-color: blue;
}
</style>