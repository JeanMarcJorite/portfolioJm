import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

const savedTheme = localStorage.getItem('theme')
const useDark = savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
document.documentElement.classList.toggle('dark', useDark)

createApp(App).use(router).mount('#app')
