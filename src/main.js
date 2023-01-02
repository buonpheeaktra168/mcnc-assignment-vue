import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import { initializeApp } from "firebase/app";

const app = createApp(App)
const pinia = createPinia()

const firebaseConfig = {
    apiKey: "AIzaSyA0tYdknfMCHdEDpyzk1SDI7rG4j0fEYV4",
    authDomain: "mcnc-assignment.firebaseapp.com",
    projectId: "mcnc-assignment",
    storageBucket: "mcnc-assignment.appspot.com",
    messagingSenderId: "196184977364",
    appId: "1:196184977364:web:40782cf674e26152feb041"
  };

app.use(router)
app.use(pinia)
app.use(i18n)
initializeApp(firebaseConfig);

app.mount('#app')
