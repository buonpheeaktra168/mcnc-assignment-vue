<template>
    <div>Component B</div>
    <div>{{ store.userAPI }}</div>
    <ComponentC />
</template>

<script>
import ComponentC from './ComponentC.vue';
import { useUserStore } from '../../../store/user';
export default {
    components: {
        ComponentC,
    },
    setup() {
        const store = useUserStore()

        return {
            store,
        }
    }
}
</script>