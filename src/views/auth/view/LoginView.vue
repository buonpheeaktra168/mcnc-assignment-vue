<template>
    <div>
        <h1>Create Account</h1>
        <p><input type="text" placeholder="Email" v-model="email" /></p>
        <p><input type="text" placeholder="Password" v-model="password" /></p>
        <p v-if="errorMessage">{{ errorMessage }}</p>
        <p><button @click.prevent="login">submit</button></p>
        <p><button @click="route.push('/register')">Register</button></p>
        <p><button @click="signinWithGoogle">Signin with google</button></p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router';

const email = ref("");
const password = ref("");
const route = useRouter();
const auth = getAuth();
const errorMessage = ref();

const login = () => {
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((data) => {
            console.log("Registered successfully");
            route.push('/')
        })
        .catch((error) => {
            console.log(error.code);
            switch (error.code) {
                case "auth/invalid-email":
                    errorMessage.value = "Invalide email!";
                    break;
                case "auth/user-not-found":
                    errorMessage.value = "No account with that email."
                    break;
                case "auth/wrong-password":
                    errorMessage.value = "Incorrect password!";
                    break;
                default:
                    errorMessage.value = "Email and password was invalid";
                    break;
            }
        })
};
const signinWithGoogle = () => {
};
</script>