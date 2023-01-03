import { defineStore } from "pinia";
import { db } from "../../../../utils/firebase";
import { collection, doc, addDoc, getDocs, query, deleteDoc, getDoc, updateDoc } from "firebase/firestore";

export const useTodoStore = defineStore('todo', {
    state: () => ({
        todos: null,
        loading: false,
    }),

    getters: {
        isTodos: (state) => state.todos,
        isLoading: (state) => state.loading
    },

    actions: {
        async getTodos() {
            this.loading = true;
            this.todos = [];
            const q = query(
                collection(db, "todos"),
            );
            try {
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    console.log(doc.data().title)
                    this.todos.push({
                        id: doc.id,
                        ...doc.data(),
                    });
                });
            } catch (error) {
                console.log(error);
            } finally {
                this.loading = false;
            }
        },
        async addTodos(title, description) {
            this.loading = true;
            try {
                const docObj = {
                    title: title,
                    description: description,
                }
                const q = query(collection(db, 'todos'))
                const docRef = await addDoc(q, docObj);
                this.todos.push({ id: docRef.id, ...docObj });
            } catch (error) {
                console.log(error);
            } finally {
                this.loading = false;
            }
        },
        async deleteTodo(id) {
            try {
                await deleteDoc(doc(db, 'todos', id))
                location.reload()
            } catch (error) {
                console.log(error)
            }
        },
        async getTodoById(id) {
            this.loading = true
            try {
                const docRef = doc(db, "todos", id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    console.log("Document data:", docSnap.data());
                    return docSnap.data()
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            } catch (error) {
                console.log(error.message)
            } finally {
                this.loading = false
            }
        },

        async updateTodo(id, title, description) {
            this.loading = true
            try {
                const docRef = doc(db, 'todos', id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    console.log("Document data:", docSnap.data());
                    await updateDoc(docRef, {
                        title: title,
                        description: description
                    });
                    this.todos = this.todos.map((item) =>
                        item.id === id ? { ...item, title: title, description: description } : item
                    );
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                } throw new Error("Error")

            } catch (error) {
                console.log(error.message)
            } finally {
                this.loading = false
            }
        }
    }
})