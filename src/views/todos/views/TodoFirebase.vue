<template>
    <div class="todo-container">
        <div>
            <form @submit.prevent="addTodo()">
                <input v-model="newTodoTitle" type="text" placeholder="New todo" name="newTodo" />
                <button @click="addTodo">Add</button>
            </form>
        </div>
        <div v-for="todo in todos" :key="todo.id" class="todo-card">
            <p>{{ todo.title }}</p>

            <div>
                <!-- <button>Edit</button> -->
                <button @click="deleteTodo(todo.id)">Delete</button>
            </div>
        </div>
    </div>

</template>

<script setup>
import { db } from '../../../../utils/firebase'
import { collection, addDoc, getDocs, deleteDoc, doc, onSnapshot, } from "firebase/firestore";
import { ref, onMounted } from 'vue';
const dbConllectionRef = (collection(db, 'todo2'))
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



// get todo
onMounted(async () => {
    // const queryTodo = await getDocs(collection(db, 'todos'))
    // let listTodos = []
    // queryTodo.forEach((doc) => {
    //     // console.log(doc.id, "=>", doc.data())
    //     const todo = {
    //         id: doc.id,
    //         title: doc.data().title,
    //     }
    //     console.log(todo)
    //     listTodos.push(todo)
    // })
    // todos.value = listTodos


    onSnapshot(dbConllectionRef, (querySnapshot) => {
        const listTodos = []
        querySnapshot.forEach((doc) => {
            const todo = {
                id: doc.id,
                title: doc.data().title,
                done: doc.data().done,
            }
            console.log(todo)
            listTodos.push(todo)
        })
        todos.value = listTodos
    })
})


// addd todo
const newTodoTitle = ref('')
const addTodo = async () => {
    const todoRef = await addDoc(dbConllectionRef, {
        title: newTodoTitle.value,
    });
    newTodoTitle.value = '',
        console.log("New Titile ID: ", todoRef.id);
}

// delete todos

const deleteTodo = id => {
    deleteDoc(doc(db, "todo2", id));
}

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