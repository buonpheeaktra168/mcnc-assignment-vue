import { defineStore } from "pinia";
const baseUrl = "https://jsonplaceholder.typicode.com/todos";
const baseUrlSearch = "https://jsonplaceholder.typicode.com/todos?q="
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
                await fetch(baseUrl)
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
                await fetch(baseUrlSearch + this.query)
                    .then(respone => respone.json())
                    .then(data => this.posts = data);
            } catch (error) {
                console.log(error);
            }
        },

        async fetchPostsFliter() {
            try {
                await fetch(baseUrl)
                    .then(respone => respone.json())
                    .then(data => data.map((item) => {
                        if (item.completed === true) {
                            item.completed
                        }
                    }));
            } catch (error) {
                console.log(error);
            }
        },
    }
})