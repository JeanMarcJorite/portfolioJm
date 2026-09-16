<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from "vue";
import { useRoute } from "vue-router";
import { useModalDialog } from "../composables/useModalDialog";
import { shouldAnimateEntrance } from "../utils/motion";
const route = useRoute();
const scrolled = ref(false);
const activeSection = ref("");
const mobileMenuOpen = ref(false);
const darkMode = ref(false);
const menuToggle = ref(null);
const mobilePanel = ref(null);
const animateEntrance = shouldAnimateEntrance();
useModalDialog(mobilePanel, () => mobileMenuOpen.value);
const links = [
  { label: "À propos", section: "#apropos" },
  { label: "Compétences", section: "#competences" },
  { label: "Projets", section: "#projets" },
  { label: "Centres d’intérêt", section: "#interets" },
  { label: "Alternance", section: "#alternance" },
  { label: "Contact", section: "#contact" },
];
let frame = 0;
function updateScroll() {
  if (frame) return;
  frame = requestAnimationFrame(() => {
    scrolled.value = window.scrollY > 40;
    activeSection.value =
      links.findLast(
        (link) =>
          document.querySelector(link.section)?.getBoundingClientRect().top <=
          160,
      )?.section || "";
    frame = 0;
  });
}
function toggleDark() {
  darkMode.value = !darkMode.value;
  document.documentElement.classList.toggle("dark", darkMode.value);
  try {
    localStorage.setItem("theme", darkMode.value ? "dark" : "light");
  } catch {
    /* Theme still works when storage is unavailable. */
  }
}
function closeMenu() {
  mobileMenuOpen.value = false;
}
function onResize() {
  if (window.innerWidth >= 1100) closeMenu();
  updateScroll();
}
watch(() => route.fullPath, async () => {
  closeMenu();
  await nextTick();
  updateScroll();
});
onMounted(() => {
  darkMode.value = document.documentElement.classList.contains("dark");
  updateScroll();
  window.addEventListener("scroll", updateScroll, { passive: true });
  window.addEventListener("resize", onResize);
});
onUnmounted(() => {
  cancelAnimationFrame(frame);
  window.removeEventListener("scroll", updateScroll);
  window.removeEventListener("resize", onResize);
});
</script>
<template>
  <header
    class="site-header"
    :class="{
      'is-scrolled': scrolled || route.name !== 'accueil',
      'menu-open': mobileMenuOpen,
      'has-entrance': animateEntrance,
    }"
  >
    <div class="container nav-row">
      <router-link
        :to="{ name: 'accueil' }"
        class="monogram"
        aria-label="Jean-Marc Jorite — Accueil"
        @click="closeMenu"
        >JMJ<span>.</span></router-link
      >
      <nav aria-label="Navigation principale" class="desktop-nav">
        <router-link
          v-for="link in links"
          :key="link.section"
          :to="{ name: 'accueil', hash: link.section }"
          :aria-current="
            route.name === 'accueil' && activeSection === link.section
              ? 'location'
              : undefined
          "
          >{{ link.label }}</router-link
        >
      </nav>
      <div class="nav-actions">
        <button
          type="button"
          class="icon-button theme-toggle"
          @click="toggleDark"
          :aria-label="
            darkMode ? 'Activer le thème clair' : 'Activer le thème sombre'
          "
          :aria-pressed="darkMode"
        >
          <span aria-hidden="true">{{ darkMode ? "☀" : "◐" }}</span></button
        ><button
          ref="menuToggle"
          type="button"
          class="menu-toggle"
          :aria-expanded="mobileMenuOpen"
          aria-controls="mobile-navigation"
          aria-haspopup="dialog"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          {{ mobileMenuOpen ? "Fermer −" : "Menu +" }}
        </button>
      </div>
    </div>
  </header>
  <Teleport to="body">
    <dialog
      id="mobile-navigation"
      ref="mobilePanel"
      class="mobile-menu-dialog"
      aria-label="Navigation mobile"
      @cancel.prevent="closeMenu"
      @click="(event) => { if (event.target === mobilePanel) closeMenu(); }"
    >
      <div class="mobile-menu-panel">
        <div class="mobile-menu-top">
          <span class="monogram" aria-hidden="true">JMJ<span>.</span></span>
          <button type="button" class="menu-toggle" autofocus @click="closeMenu">Fermer −</button>
        </div>
        <nav class="mobile-nav" aria-label="Sections du portfolio">
      <router-link
        v-for="(link, i) in links"
        :key="link.section"
        :to="{ name: 'accueil', hash: link.section }"
        :aria-current="
          route.name === 'accueil' && activeSection === link.section
            ? 'location'
            : undefined
        "
        @click="closeMenu"
        ><span>0{{ i + 1 }}</span
        >{{ link.label }}</router-link
      >
        </nav>
      </div>
    </dialog>
  </Teleport>
</template>
