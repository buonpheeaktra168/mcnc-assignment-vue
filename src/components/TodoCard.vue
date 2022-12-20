<template>
    <div class="todo-card">
        <div class="todo-text">
            <label><input type="checkbox" class="radio-button"></label>
            <h2 v-if="props.numList">{{ props.numList }}</h2>
            <h2>{{ props.title }}</h2>
        </div>
        <button @click="removeTodoCard">{{ $t(props.remove) }}</button>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    numList: Number,
    title: String,
    remove: String,
})

const emits = defineEmits(["isRemoveTodo", "isCheck"])
function removeTodoCard() {
    emits("isRemoveTodo");
}

</script>

<style>
.todo-card {
    display: flex;
    max-width: 640px;
    width: 80%;
    box-shadow: 2px 6px 20px 6px rgba(0, 0, 0, 0.2);
    background-color: #ffff;
    border-radius: 12px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 2px 12px 2px 12px;
    margin-top: 12px;
}

.todo-text {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.radio-button {
    width: 25px;
    height: 25px;
    margin-right: 12px;
}
</style>