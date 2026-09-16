import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";
import "./styles/experience.css";
try {
  const savedTheme = localStorage.getItem("theme");
  const useDark =
    savedTheme === "dark" ||
    (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList.toggle("dark", useDark);
} catch {
  /* The default editorial palette does not require persistent storage. */
}
createApp(App).use(router).mount("#app");
