import { defineStore } from "pinia";
import { db } from "../../../../utils/firebase";
import { collection, doc, setDoc, getDocs, query } from "firebase/firestore";

export const useTodoStore = defineStore('todo', {
    state: () => ({
        todos: null,
        loading: false
    }),

    getters: {
        isTodos: (state) => state.todos,
        isLoading: (state) => state.loading
    },

    actions: {
        async fetchTodos() {
            this.loading = true
            this.todos = []
            const q = getDocs(
                collection(db, 'todos'),
            );
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                console.log('ID', doc.id, "=>", 'Data', doc.data())
                this.todos.push({
                    id: doc.id,
                    ...doc.data(),
                });
            });
            this.loading = false

        }
    }
})