<template>
    <div>
        <button v-for="tab in tabs" :key="tab" @click="component = tab">
            {{ tab }}
        </button>
        <KeepAlive>
            <component :is="component" />
        </KeepAlive>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import TodoFirebase from '../views/TodoFirebase.vue';
import TodoListView from '../views/TodoListView.vue';
import TodoFirebasePinia from '../views/TodoFirebasePinia.vue';

export default defineComponent({
    components: { TodoFirebasePinia, TodoFirebase, TodoListView },
    data() {
        return {
            tabs: ["TodoFirebasePinia", "TodoFirebase", "TodoListView"],
            component: "TodoFirebasePinia"
        }
    }
})
</script>