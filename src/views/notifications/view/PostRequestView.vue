<template>
    <div>
        <input v-model="store.query" placeholder="search" />
        <h1>{{ msg.title2 }}</h1>
        <div v-if="store.isLoading">
            <LoadingSpinner title="Loading..." />
        </div>
        <div v-else class="wrapper">
            <div v-for="data in store.isPost" :key="data.id">
                <UserCard :id="data.id" :title="data.title" :body="data.body" />
            </div>
        </div>

    </div>
</template>

<script>
import { defineComponent, watchEffect } from 'vue';
import LoadingSpinner from '../../../components/LoadingSpinner.vue';
import { usePostStore } from '../../../store/posts';
import UserCard from '../components/UserCard.vue';
export default defineComponent({
    components: {
        UserCard,
        LoadingSpinner
    },
    data() {
        return {
            msg: {
                title1: "Post Request",
                title2: "Get Request",
            },
            formData: {
                userId: "",
                title: "",
                body: "",
            },
            listData: []
        };
    },
    setup() {
        const store = usePostStore();
        store.fetchPosts();
        console.log(store.fetchPosts);
        watchEffect(() => {
            store.fetchPosts(store.query)

        })

        return { store };
    },



})

</script>

<style>
input {
    max-width: 800px;
    height: 30px;
    margin-top: 5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    padding-left: 20px;
    font-size: 20px;
    font-weight: 400;
}

label {
    font-size: 28px;
}

.form-input {
    display: flex;
    flex-direction: column;
}

.wrapper {
    display: grid;
    margin-top: 80px;
    grid-template-columns: 350px 350px 300px;
}
</style>