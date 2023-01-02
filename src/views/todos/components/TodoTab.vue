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

export default defineComponent({
    components: { TodoListView, TodoFirebase },
    data() {
        return {
            tabs: ["TodoListView", "TodoFirebase"],
            component: "FirebaseTodo"
        }
    }
})
</script>