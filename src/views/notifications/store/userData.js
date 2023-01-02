import { defineStore } from "pinia";

export const useFetchUserStore = defineStore('item', {
    state: () => ({
        items: null,
        loading: false,
    }),
    getters: {
        isItem: (state) => state.items,
        isLoading: (state) => state.loading,
    },
    actions: {
        async fetchItem() {
            try {
                this.loading = true;
                const res = await fetch("https://jsonplaceholder.typicode.com/users", { method: 'GET' })
                    .then(res => res.json())
                    .then(data => this.items = data);
                this.loading = false
            } catch (error) {
                console.log(error);
                return error;
            }
        },
    },
})