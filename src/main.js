import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router/router'
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDN19Wq0B3BkU5SOkNeDUbB5sEeyzkjdMw",
    authDomain: "project-a5c42.firebaseapp.com",
    projectId: "project-a5c42",
    storageBucket: "project-a5c42.appspot.com",
    messagingSenderId: "586592476670",
    appId: "1:586592476670:web:901038281161de966974af",
    measurementId: "G-L364C8BDLV"
};


const fireapp = initializeApp(firebaseConfig);
const app = createApp(App)

const storage = getStorage(fireapp);
const db = getFirestore(fireapp);

app.use(store).use(router).mount('#app')

export {storage, db}