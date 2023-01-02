<template>
    <div class="fetch-user-container">
        <div>Hello data</div>
        <h1 v-if="store.isLoading">
            <LoadingSpinner title="Loading..." />
        </h1>
        <div v-if="store.isItem" v-for="item in store.isItem" :key="item.id">
            <UserCard :name="item.name" :email="item.email" />
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { useFetchUserStore } from "../store/userData";
import UserCard from "../components/UserCard.vue";
import LoadingSpinner from "../../../components/LoadingSpinner.vue";
export default defineComponent({
    setup() {
        const store = useFetchUserStore();
        store.fetchItem();
        return { store };
    },
    components: { UserCard, LoadingSpinner }
});
</script>

<style>
.fetch-user-container {
    display: flex;
    width: 100vw;
    justify-content: center;
    flex-direction: column;
}
</style>