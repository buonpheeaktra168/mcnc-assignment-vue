<template>
    <div class="todo-container">
        <div>
            <form @submit.prevent="handleSubmit" id="form">
                <input v-model.trimp="title" type="text" placeholder="New todo" />
                <input v-model.trimp="description" type="text" placeholder="Description" />
                <button>Add</button>
            </form>
        </div>
        <div v-if="store.isLoading">
            <LoadingSpinner title="loading todo..." />
        </div>
        <div v-if="store.isTodos.length === 0">
            <h1>Empty Todo</h1>
        </div>
        <div v-for="todo in store.isTodos" :key="todo.id" class="todo-card">
            <div>
                <h4>{{ todo.title }}</h4>
                <p>{{ todo.description }}</p>
            </div>
            <div>
                <button>Edit</button>
                <button @click="store.deleteTodo(todo.id)" class="button-delete">Delete</button>
            </div>
        </div>

    </div>

</template>

<script setup>
import { useTodoStore } from '../store/useTodoStore';
import LoadingSpinner from '../../../components/LoadingSpinner.vue';
import { ref } from 'vue';


const title = ref('')
const description = ref('')

const store = useTodoStore()
store.getTodos();

const handleSubmit = async () => {
    await store.addTodos(title.value, description.value)
    title.value = ''
    description.value = ''
}

</script>

<style scoped>
#form {
    width: 80%;
    padding: 5px 5px;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
}

#form input {
    width: 100%;
    height: 30px;
    padding: 10px 0 10px 20px;
    margin: 8px 0;
    border: 0px;
    outline: none;
}

.todo-card {
    display: flex;
    width: 100%;
    box-shadow: 2px 6px 20px 6px rgba(0, 0, 0, 0.2);
    background-color: #ffff;
    border-radius: 12px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 2px 12px 2px 12px;
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

.button-delete {
    background-color: crimson;
}
</style>