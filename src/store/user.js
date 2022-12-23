import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useUserStore = defineStore("user", () => {
    const userAPI = ref([]);
    const user = ref({
        name: "Matt",
        email: "matt@gmail.com"
    });

    const website = computed(() => user.value.email.substring(user.value.email.lastIndexOf("@") + 1));
    const changeName = (newName) => {
        user.value.name = newName;
    };

    const getData = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users", { method: 'GET' });
        const data  = res.json();
        userAPI = data;
        console.log(userAPI)
    };

    return {
        user,
        website,
        changeName,
        getData,
        userAPI
    }
})