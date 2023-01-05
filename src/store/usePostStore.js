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
    },

    actions: {
        async fetchPosts() {
            try {
                this.loading = true
                await fetch("https://jsonplaceholder.typicode.com/posts")
                    .then(respone => respone.json())
                    .then(data => this.posts = data);

            } catch (error) {
                console.log(error);
            } finally {
                this.loading = false
            }
        },

        async fetchPostsQuery() {
            try {
                await fetch("https://jsonplaceholder.typicode.com/posts?q=" + this.query)
                    .then(respone => respone.json())
                    .then(data => this.posts = data);
            } catch (error) {
                console.log(error);
            }
        }
    }
})