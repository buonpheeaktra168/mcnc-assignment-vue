<template>
    <div>Component B</div>
    <ComponentC />
</template>

<script>
import ComponentC from './ComponentC.vue';
export default {
    components: {
        ComponentC,
    }
}
</script>