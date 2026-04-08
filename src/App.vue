<script setup>
import NavBar from './components/NavBar.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const isHome = computed(() => route.name === 'accueil')
</script>

<template>
  <div class="bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-gray-100 font-sans antialiased transition-colors duration-300">
    <NavBar v-if="isHome" />
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
