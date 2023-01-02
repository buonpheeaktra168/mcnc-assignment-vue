<template>
    <div class="todo-list-container">
        <div>
            <form @submit.prevent="addTodo()">
                <input v-model="newTodo" name="newTodo" placeholder="Add new todo..." autocomplete="off" class="input">
                <button>{{ $t("button.add") }}</button>
            </form>
        </div>
        <h2>ToDo List</h2>
        <div>
            <div v-for="(todo, index) in todos" :key="index">
                <TodoCard :title="todo.content" remove="button.remove" @isRemoveTodo="removeTodo(index)" edit="button.edit"/>
            </div>
        </div>
        <h4 v-if="todos.length === 0">Empty list.</h4>
    </div>

</template>

<script setup>
import { ref } from 'vue';
import TodoCard from '../components/TodoCard.vue';


const newTodo = ref('')
const defaultData = [{
    done: false,
    content: "Your Todo"
}]
const todosData = JSON.parse(localStorage.getItem('todos')) || defaultData;
const todos = ref(todosData)
const addTodo = () => {
    if (newTodo.value) {
        todos.value.push({
            done: false,
            content: newTodo.value
        })
        newTodo.value = '';
    }
    saveData();
}

function removeTodo(index) {
    todos.value.splice(index, 1);
    saveData();
}

function saveData() {
    const storageData = JSON.stringify(todos.value);
    localStorage.setItem('todos', storageData);
}


</script>

<style>
.todo-list-container {
    display: flex;
    align-items: center;
    flex-direction: column;
}

form {
    display: flex;
    flex-direction: row;
    outline: none;
    height: 50px;
    justify-content: center;
    justify-content: center;
}

.input {
    height: 40px;
    outline: none;
    border: 0;
}

.todo-input {
    display: flex;
}

label {
    font-size: 20px;
    font-weight: bold;

}
</style>