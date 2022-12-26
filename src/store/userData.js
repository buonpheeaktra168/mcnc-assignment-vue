import { defineStore } from "pinia";

export const useFetchUserStore = defineStore('user', {
    state: () => ({
        users: null,
        loading: false,
    }),
    getters: {
        getUser: (state) => state.users,
        isLoading: (state) => state.loading,
    },
    actions: {
        async fetchUser() {
            try {
                this.loading = true;
                const res = await fetch("https://jsonplaceholder.typicode.com/users", { method: 'GET' })
                    .then(res => res.json())
                    .then(data => this.users = data);
                this.loading = false
            } catch (error) {
                console.log(error);
                return error;
            }
        },
    },
})