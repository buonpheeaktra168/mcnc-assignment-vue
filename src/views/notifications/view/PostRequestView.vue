<template>
    <div class="container">
        <input v-model="store.query" placeholder="search" />
        <button @click="handleFillter">Completd</button>

        <h1>{{ msg.title2 }}</h1>
        <div v-if="store.isLoading">
            <LoadingSpinner title="Loading..." />
        </div>
        <div v-else class="wrapper">
            <div v-for="data in store.isPost" :key="data.id">
                <UserCard :id="data.id" :title="data.title.toUpperCase()" :status="data.completed" />
            </div>
        </div>

    </div>
</template>

<script>
import { defineComponent, watchEffect, ref } from 'vue';
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import { usePostStore } from '@/store/usePostStore';
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
        const filter = store.isPost
        const filterCompleted = ref(true)
        store.fetchPosts();
        console.log(store.isPost)
        watchEffect(() => {
            store.fetchPostsQuery(store.query)

        })

        function handleFillter() {
            
        }

        return { store, handleFillter, filter, filterCompleted };
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

@media (min-width: 300px) {
    .wrapper {
        display: grid;
        margin-top: 80px;
        grid-template-columns: 350px;
    }
}

@media (min-width: 500px) {
    .wrapper {
        display: grid;
        margin-top: 80px;
        grid-template-columns: 260px 260px;
    }
}
</style>