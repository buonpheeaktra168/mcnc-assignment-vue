import { defineStore } from "pinia";

export const usePostStore = defineStore('post', {
    state: () => ({
        posts: null,
        loading: false,
        query: ''
    }),
    getters: {
        isPost: (state) => state.posts,
        isLoading: (state) => state.loading,
        isQuery: (state) => state.query
    },

    actions: {
        async fetchPosts() {
            try {
                this.loading = true
                await fetch("https://jsonplaceholder.typicode.com/posts?q=" + this.query)
                    .then(respone => respone.json())
                    .then(data => this.posts = data);
                this.loading = false
            } catch (error) {
                console.log(error);
            }
        }
    }
})