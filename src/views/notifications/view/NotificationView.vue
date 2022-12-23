<template>
    <div>Notification</div>
    <ComponentA />
</template>

<script>
import ComponentA from '../components/ComponentA.vue';
import { computed } from 'vue'
export default {
    components: {
        ComponentA,
    },
    data() {
        return {
            listUsers: [],
            name: ['KaKa', 'KoKo', 'KiKi']
        }
    },
    methods: {
        async getData() {
            const res = await fetch("https://jsonplaceholder.typicode.com/users", { method: 'GET' });
            const data = await res.json();
            this.listUsers = data;
            console.log(this.listUsers)
        }
    },
    created() {
        this.getData()
    },
    provide() {
        return {
            listUsers: computed(() => this.listUsers),
        };
    },

}
</script>