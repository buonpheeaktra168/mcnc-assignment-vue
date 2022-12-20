<template>
    <transition name="modal-animation">
        <div class="modal">
            <transition name="modal-animation-inner">
                <div class="modal-inner">
                    <h1 v-if="props.title">{{ title }}</h1>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    title: String,
    icon: String,
})
</script>