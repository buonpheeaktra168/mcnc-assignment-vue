<template>
  <h1>Ref</h1>
  <p ref="p">My name is {{ name }} and My age is {{ age }}</p>
  <input type="text" v-model="name">
  <button @click="handleClick">Click here</button>
  <h1>Reacttive</h1>
  <p>My name is {{ userOne.name }} and my age is {{ userOne.age }}</p>
  <input type="text" v-model="userOne.name">
  <button @click="updateUserOne">Update userOne</button>
  <a href="/notification"><button>Notification</button></a>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  data() {
    return {
    }
  },
  setup() {
    console.log('setup')
    let name = ref('Dara')
    let age = ref(19)

    const userOne = reactive({ name: 'Buon Pheaktra', age: 16 })

    const handleClick = () => {
      name.value = '',
        age.value = ''
    }

    function updateUserOne() {
      userOne.name = "Luka Ku"
      userOne.age = "30"
    }

    return {
      name: name, age: age, handleClick, userOne, updateUserOne
    }

  },

}
</script>
<style>

</style>