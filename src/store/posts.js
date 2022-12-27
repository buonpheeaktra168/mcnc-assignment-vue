import { defineStore } from "pinia";

export const usePostStore = defineStore('post', {
    state: () => ({
        posts: null,
        loading: false,
    }),
    getters: {
        isPost: (state) => state.posts,
        isLoading: (state) => state.loading,
    },

    actions: {
        async fetchPosts() {
            try {
                this.loading = true
                const respone = await fetch("https://jsonplaceholder.typicode.com/posts", {method: 'GET'})
                    .then(respone => respone.json())
                    .then(data => this.posts = data);
                this.loading = false
            } catch (error) {
                console.log(error);
            }
        }
    }
})