<template>
  <header>
    <div class="wrapper">
      <nav>
        <div>
          <router-link to="/">{{ $t("navbar.home") }}</router-link>
          <router-link to="/account">{{ $t("navbar.account") }}</router-link>
          <router-link to="/about">{{ $t("navbar.about") }}</router-link>
          <router-link to="/todo">{{ $t("navbar.todo") }}</router-link>
          <router-link to="/login">{{ $t("navbar.login") }}</router-link>
        </div>
        <div class="nav-right">
          <select class="selection" v-model="lang" @change="handleChage($event)">
            <option value="km">{{ $t("button.khmer") }}</option>
            <option value="en">{{ $t("button.english") }}</option>
          </select>
          <button @click="handleSignOut" v-if="isLoggedIn">{{ $t("button.signOut") }}</button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth';
import { useRouter } from 'vue-router';

const lang = localStorage.getItem("lang") || "en";
const isLoggedIn = ref(false)
let auth;
const route = useRouter();

function handleChage(event) {
  localStorage.setItem("lang", event.target.value);
  window.location.reload();
};

onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  })
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    route.push('/login')
  })
}
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  display: flex;
  width: 100%;
  height: 5vh;
  margin: 0;
  padding: 0;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-bottom: 1px solid #0a0a0a;
}

nav a.router-link-exact-active {
  color: var(--color-text);
  color: rgb(0, 0, 0);
  font-size: 18px;
  border-bottom: 2px solid;
  border-bottom-color: blueviolet;
  color: blueviolet;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  text-decoration: none;
  color: rgb(0, 0, 0);
  font-size: 18px;
  margin-right: 5px;
}

nav a:hover {
  display: inline-block;
  padding: 0 1rem;
  text-decoration: none;
  font-size: 18px;
  margin-right: 5px;
  color: blueviolet;
}

nav a:first-of-type {
  border: 0;
}

.selection {
  width: 80px;
  height: 30px;
  border: 0px;
  margin-right: 12px;
  background-color: none;
  color: #ffffff;
  font-weight: bold;
  outline: none;
  background: #04AA6D;
}

button {
  display: flex;
  height: 30px;
  width: 120px;
  justify-content: center;
  align-items: center;
  margin: 0px;
}

.nav-right {
  display: flex;
  flex-direction: row;
}
</style>