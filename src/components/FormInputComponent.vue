<template>
    <div>
        <form>
            <label>{{props.title}}</label><br>
            <input >
        </form>
    </div>
</template>


<script setup lang="ts">
import { defineProps } from 'vue';

interface Props {
    title: string,
    palceholder: string
}

const props = defineProps<Props>()
</script>
