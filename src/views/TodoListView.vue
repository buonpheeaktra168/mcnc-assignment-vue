<template>
    <div class="todo-list-container">
        <h1>ToDo App</h1>
        <div>
            <label>New ToDo </label>
            <form @submit.prevent="addTodo()" class="input-todo">
                <input v-model="newTodo" name="newTodo" placeholder="Add new todo..." autocomplete="off"
                    class="todo-input">
                <button>{{ $t("button.add") }}</button>
            </form>
        </div>
        <h2>ToDo List</h2>
        <div>
            <div v-for="(todo, index) in todos" :key="index">
                <TodoCard :title="todo.content" remove="button.remove" @isRemoveTodo="removeTodo(index)" />
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
    max-height: 100vh;
    justify-content: center;
    flex-direction: column;
}

.form-todo {
    display: flex;
    flex-direction: row;
}

.input-todo {
    display: flex;
    max-width: 640px;
    width: 80%;
    box-shadow: 2px 6px 20px 6px rgba(0, 0, 0, 0.2);
    background-color: #ffff;
    border-radius: 12px;
    border: 0;
    font-size: 30px;
    justify-content: space-between;
    margin-top: 8px;
}

.todo-input {
    display: flex;
    max-width: 640px;
    width: 80%;
    box-shadow: 2px 6px 20px 6px rgba(0, 0, 0, 0.2);
    border: 0;
    font-size: 30px;
    border-radius: 12px 0 0 12px;
    padding-left: 20px;
    outline: none;
}

label {
    font-size: 20px;
    font-weight: bold;

}
</style>