<script setup>
import NavBar from "./components/NavBar.vue";
function focusMain() {
  const main = document.getElementById("main-content");
  main?.focus({ preventScroll: true });
  main?.scrollIntoView();
}
</script>
<template>
  <a href="#main-content" class="skip-link" @click.prevent="focusMain"
    >Aller au contenu</a
  ><NavBar /><router-view v-slot="{ Component, route }"
    ><component
      :is="Component"
      :key="route.name === 'projet' ? route.params.slug : route.name"
  /></router-view>
</template>
