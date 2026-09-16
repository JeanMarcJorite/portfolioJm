<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const scrolled = ref(false);
const activeSection = ref("");
const mobileMenuOpen = ref(false);
const darkMode = ref(false);
const menuToggle = ref(null);
const mobilePanel = ref(null);
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
function onKey(event) {
  if (!mobileMenuOpen.value) return;
  if (event.key === "Escape") {
    closeMenu();
    menuToggle.value?.focus();
  }
  if (event.key === "Tab") {
    const items = [
      menuToggle.value,
      ...mobilePanel.value.querySelectorAll("a"),
    ];
    const current = items.indexOf(document.activeElement);
    if (event.shiftKey && current <= 0) {
      event.preventDefault();
      items.at(-1).focus();
    } else if (!event.shiftKey && current === items.length - 1) {
      event.preventDefault();
      items[0].focus();
    }
  }
}
function onResize() {
  if (window.innerWidth >= 1100) closeMenu();
}
watch(() => route.fullPath, closeMenu);
watch(mobileMenuOpen, async (open) => {
  await nextTick();
  if (open) mobilePanel.value?.querySelector("a")?.focus();
});
onMounted(() => {
  darkMode.value = document.documentElement.classList.contains("dark");
  updateScroll();
  window.addEventListener("scroll", updateScroll, { passive: true });
  window.addEventListener("keydown", onKey);
  window.addEventListener("resize", onResize);
});
onUnmounted(() => {
  cancelAnimationFrame(frame);
  window.removeEventListener("scroll", updateScroll);
  window.removeEventListener("keydown", onKey);
  window.removeEventListener("resize", onResize);
});
</script>
<template>
  <header
    class="site-header"
    :class="{
      'is-scrolled': scrolled || route.name !== 'accueil',
      'menu-open': mobileMenuOpen,
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
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          {{ mobileMenuOpen ? "Fermer −" : "Menu +" }}
        </button>
      </div>
    </div>
    <nav
      v-if="mobileMenuOpen"
      id="mobile-navigation"
      ref="mobilePanel"
      class="mobile-nav container"
      aria-label="Navigation mobile"
    >
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
        >{{ link.label }}<span aria-hidden="true">↗</span></router-link
      >
    </nav>
  </header>
</template>
