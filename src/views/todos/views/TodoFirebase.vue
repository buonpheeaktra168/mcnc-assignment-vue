<template>
    <div class="todo-container">
        <div>
            <form>
                <input type="text" placeholder="New todo" />
                <button @click="addNewTodo">Add</button>
            </form>
        </div>
        <div v-for="todo in todos" :key="todo.id" class="todo-card">
            <p>{{ todo.title }}</p>
            
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>

        <div v-for="todo in store.todos" :key="todo.id" class="todo-card">
            <p>{{ todo.title }}</p>
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>

    </div>

</template>

<script setup>
import { useTodoStore } from '../store/useTodoStore'
import { db } from '../../../../utils/firebase'
import { collection, doc, setDoc, getDocs } from "firebase/firestore";

// import { v4 as uuidv4 } from 'uuid'
import { ref, onMounted } from 'vue';

const store = useTodoStore()
store.fetchTodos();
console.log(store.todos)


const todos = ref([
    // {
    //     id: 001,
    //     title: 'Hello todo',
    // },
    // {
    //     id: 002,
    //     title: 'Hi todo'
    // }
])

const addNewTodo = () => {
    
}

onMounted(async () => {
    const queryTodo = await getDocs(collection(db, 'todos'))
    let listTodos = []
    queryTodo.forEach((doc) => {
        // console.log(doc.id, "=>", doc.data())
        const todo = {
            id: doc.id,
            title: doc.data().title,
        }
        console.log(todo)
        listTodos.push(todo)
    })
    todos.value = listTodos
})

</script>

<style scoped>
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
</style>