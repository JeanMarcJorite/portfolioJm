<script setup>
import NavBar from './components/NavBar.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const isHome = computed(() => route.name === 'accueil')
const viewKey = computed(() =>
  route.name === 'projet' ? route.fullPath : String(route.name || route.path)
)
</script>

<template>
  <div class="min-h-screen overflow-x-hidden bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-gray-100 font-sans antialiased transition-colors duration-300">
    <NavBar v-if="isHome" />
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" :key="viewKey" />
      </transition>
    </router-view>
  </div>
</template>
