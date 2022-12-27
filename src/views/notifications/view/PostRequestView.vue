<template>
    <div>
        <h1>{{ msg.title1 }}</h1>
        <form @submit.prevent="postRequest">
            <div class="form-input">
                <label for="userId">UserId</label>
                <input type="text" id="userId" v-model="formData.userId">
            </div>
            <div class="form-input">
                <label for="title">title</label>
                <input type="text" id="title" v-model="formData.title">
            </div>
            <div class="form-input">
                <label for="body">body</label>
                <input type="text" id="body" v-model="formData.body">
            </div>
            <button>Post Data</button>
        </form>
        <h1>{{ msg.title2 }}</h1>
        <h1 v-if="store.isLoading">
            <LoadingSpinner title="Loading..." />
        </h1>
        <div v-for="data in store.isPost" :key="data.id">
            <UserCard :id="data.id" :title="data.title" :body="data.body" />
        </div>

    </div>
</template>

<script>
import axios from 'axios';
import { defineComponent } from 'vue';
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
    methods: {
        postRequest() {
            axios
                .post("https://jsonplaceholder.typicode.com/posts", this.formData)
                .then((respone) => console.log(respone))
                .catch((error) => console.log(error));
        },
    },
    setup() {
        const store = usePostStore();
        store.fetchPosts();
        console.log(store.fetchPosts);
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
</style>