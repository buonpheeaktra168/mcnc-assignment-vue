<template>
    <div class="todo-container">
        <div>
            <form @submit.prevent="handleSubmit" id="form">
                <input v-model.trimp="title" type="text" placeholder="Add todo..." />
                <input v-model.trimp="description" type="text" placeholder="Description..." />
                <button>Add</button>
            </form>
        </div>
        <div v-if="store.isLoading">
            <LoadingSpinner title="loading todo..." />
        </div>
        <div v-if="store.isTodos.length === 0">
            <h1>Empty Todo</h1>
        </div>
        <div class="wrapper">
            <div v-for="todo in store.isTodos" :key="todo.id" class="todo-card-box">
                <div>
                    <h2>{{ todo.title }}</h2>
                </div>
                <div class="button-card">
                    <button @click="todoDetail(todo.id)">Details</button>
                    <button @click="todoUpdate(todo.id)" class="edit-button">Edit</button>
                    <button @click="store.deleteTodo(todo.id)" class="button-delete">Delete</button>
                </div>
            </div>
        </div>

    </div>

</template>

<script setup>
import { useTodoStore } from '../store/useTodoStore';
import LoadingSpinner from '../../../components/LoadingSpinner.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const title = ref('')
const description = ref('')

const store = useTodoStore()
store.getTodos();

const handleSubmit = async () => {
    await store.addTodos(title.value, description.value)
    title.value = ''
    description.value = ''
}

const todoDetail = (id) => {
    router.push({ name: 'todoDetail', params: { id: id } })
}

const todoUpdate = (id) => {
    router.push({ name: 'todoFirebasePiniaUpdate', params: { id: id } })
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


.todo-card-box {
    display: flex;
    width: 310px;
    height: 200px;
    box-shadow: 2px 6px 20px 6px rgba(0, 0, 0, 0.2);
    background-color: #ffff;
    border-radius: 12px;
    flex-direction: column;
    padding: 2px 12px 2px 12px;
    margin: 0 12px 0 12px;
    align-items: center;
    margin-top: 12px;
}

.todo-text {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.radio-button {
    width: 25px;
    height: 25px;
    margin-right: 12px;
}

.wrapper {
    display: grid;
    margin-top: 80px;
    grid-template-columns: 350px 350px 300px;
}

.button-delete {
    background-color: crimson;
}

.edit-button {
    background-color: blue;
}

.button-card {
    justify-content: flex-end;
    align-items: flex-end;
}
</style>