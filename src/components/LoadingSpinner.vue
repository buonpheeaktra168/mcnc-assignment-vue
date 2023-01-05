<template>
    <transition name="modal-animation">
        <div class="modal">
            <transition name="modal-animation-inner">
                <div class="modal-inner">
                    <img src="../assets/images/vueIcon.png" />
                    <h2 v-if="props.title">{{ title }}</h2>
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

<style>
.modal-animation-enter-active,
.modal-animation-leave-active {
    transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animation-enter-from,
.modal-animation-leave-to {
    opacity: 0;
}

.modal-animation-inner-enter-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-animation-inner-leave-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-animation-enter-from {
    opacity: o;
    transform: scale(0.002s);
}

.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position:absolute;
    top: 0;
    background-color: rgb(255, 255, 255, 0.7);
    left: 0;
    border-radius: 12px;
}

.modal-inner {
    display: flex;
    position: relative;
    max-width: 1080px;
    max-height: 1080px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    background-color: #ffff;
    padding: 64pxactive="show" spinner="bar-fade-scale" 16px;
    border-radius: 12px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

i {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 20px;
    cursor: pointer;
}

img {
    width: 120px;
    height: 120px;
    margin: 30px 50px 0 50px;
}

h2 {
    margin: 30px;
}
</style>