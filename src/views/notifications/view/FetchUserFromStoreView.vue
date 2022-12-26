<template>
    <div class="fetch-user-container">
        <div>Hello data</div>
        <div v-if="store.isLoading">Loading...</div>
        <div v-if="store.users" v-for="user in store.users" :key="user.id">
            <UserCard :name="user.name" :email="user.email" />
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { useFetchUserStore } from "../../../store/userData";
import UserCard from "../components/UserCard.vue";
export default defineComponent({
    setup() {
        const store = useFetchUserStore();
        store.fetchUser();
        console.log(store.fetchUser);
        return { store };
    },
    components: { UserCard }
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