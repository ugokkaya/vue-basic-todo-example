import { createApp } from 'vue'
import { createPinia } from 'pinia'
import persistedstate from 'pinia-persistedstate'
import SecureLS from "secure-ls"
import App from './App.vue'
import router from './router'
import './index.css'

const pinia = createPinia();
var ls = new SecureLS({ isCompression: true });
pinia.use(
    persistedstate({
        key: 'client',
        storage: {
            getItem: (key) => ls.get(key),
            setItem: (key, value) => ls.set(key, value),
            removeItem: (key) => ls.remove(key)
        }
    })
)
const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount('#app'); 
