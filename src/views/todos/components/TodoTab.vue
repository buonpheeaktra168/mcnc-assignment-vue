<template>
    <div class="container">
        <button v-for="tab in tabs" :key="tab" @click="component = tab" class="button">
            {{ tab }}
        </button>
    </div>
    <KeepAlive>
        <component :is="component" />
    </KeepAlive>
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

<style lang="scss" scoped>
.container {
    display: flex;
    flex: 1;
    justify-content: center;
}

@media (max-width: 376px) {
    .container {
        display: flex;
        flex: 1;
        justify-content: center;

        .button {

            padding: 8px;
        }
    }

}

@media (max-width: 281px) {
    .container {
        display: flex;
        flex: 1;
        justify-content: center;

        .button {
            padding: 2px;
        }
    }

}


@media (max-width: 391px) {
    .container {
        display: flex;
        position: absolute;
        flex: 1;
        justify-content: center;

        .button {
            padding: 0px;
        }
    }
}

@media (max-width: 415px) {
    .container {
        display: flex;
        position: absolute;
        flex: 1;
        justify-content: center;

        .button {
            padding: 16px;
        }
    }
}

@media (max-width: 361px) {
    .container {
        display: flex;
        position: absolute;
        flex: 1;
        justify-content: center;

        .button {
            padding: 10px;
        }
    }
}
</style>