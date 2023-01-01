<template>
    <div>
        <h1>Create Account</h1>
        <p><input type="text" placeholder="Email" v-model="email" /></p>
        <p><input type="text" placeholder="Password" v-model="password" /></p>
        <p><button @click.prevent="register">submit</button></p>
        <p><button @click="signinWithGoogle">Signin with google</button></p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useRouter } from 'vue-router';

const email = ref("");
const password = ref("");
const route = useRouter();
const auth = getAuth();

const register = () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((data) => {
            console.log("Registered successfully");
            route.push('/')
        })
        .catch((error) => {
            console.log(error.code);
            alert(error.message)
        })
};
const signinWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
        console.log(result.user);
        route.push("/")
    })
    .catch((error) => {
        console.log(error)
    })
};
</script>