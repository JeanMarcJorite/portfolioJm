<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const scrolled = ref(false)
const mobileMenuOpen = ref(false)
const darkMode = ref(false)
const nav = ref(null)
const navReady = ref(false)

const links = [
  { num: '01', label: 'À propos', section: '#apropos' },
  { num: '02', label: 'Compétences', section: '#competences' },
  { num: '03', label: 'Projets', section: '#projets' },
  { num: '04', label: 'Centres d’intérêt', section: '#interets' },
  { num: '05', label: 'Alternance', section: '#alternance' },
  { num: '06', label: 'Contact', section: '#contact' },
]

function onScroll() {
  scrolled.value = window.scrollY > 20
}

function toggleDark() {
  darkMode.value = !darkMode.value
  document.documentElement.classList.toggle('dark', darkMode.value)
  localStorage.setItem('theme', darkMode.value ? 'dark' : 'light')
}

function closeMobile() {
  mobileMenuOpen.value = false
}

function goHome() {
  closeMobile()
  router.push({ name: 'accueil' })
}

function goToSection(section) {
  closeMobile()
  router.push({ name: 'accueil', hash: section })
}

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkMode.value = true
    document.documentElement.classList.add('dark')
  }
  window.addEventListener('scroll', onScroll)
  setTimeout(() => { navReady.value = true }, 50)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <nav
    ref="nav"
    :class="[
      scrolled ? 'py-3 border-b border-stone-200/60 dark:border-stone-800/60 bg-stone-50/90 dark:bg-[#0a0a0a]/90 backdrop-blur-lg' : 'py-5 bg-transparent',
      navReady ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
    ]"
    class="fixed w-full z-50 transition-all duration-500 ease-out"
  >
    <div class="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
      <!-- Logo: code-inspired -->
      <button @click="goHome" type="button" class="group flex items-center gap-1.5">
        <span class="text-lg font-mono font-bold tracking-tight text-stone-900 dark:text-white transition-colors">
          JMJ
        </span>
        <span class="w-2 h-2 rounded-full bg-amber-500 group-hover:scale-125 transition-transform"></span>
      </button>

      <!-- Desktop Links with numbers -->
      <div class="hidden md:flex items-center gap-8">
        <button
          v-for="link in links"
          :key="link.section"
          type="button"
          @click="goToSection(link.section)"
          class="group flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors"
        >
          <span class="font-mono text-[10px] text-amber-500 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200">{{ link.num }}</span>
          <span class="font-medium">{{ link.label }}</span>
        </button>
      </div>

      <div class="flex items-center gap-3">
        <!-- Theme Toggle — minimal square -->
        <button
          @click="toggleDark"
          class="relative w-9 h-9 flex items-center justify-center rounded-lg text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-800 transition-all"
          aria-label="Toggle Dark Mode"
        >
          <svg v-if="darkMode" class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <svg v-else class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>

        <!-- CTA desktop -->
        <button @click="goToSection('#contact')" type="button"
          class="hidden md:inline-flex items-center gap-2 px-5 py-2 bg-stone-900 dark:bg-white text-white dark:text-stone-900 text-sm font-medium rounded-lg hover:bg-stone-800 dark:hover:bg-stone-100 transition-all magnetic-btn">
          <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
          Contact
        </button>

        <!-- Mobile Menu Toggle -->
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden w-9 h-9 flex items-center justify-center text-stone-600 dark:text-stone-300">
          <svg v-if="!mobileMenuOpen" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-show="mobileMenuOpen"
        class="md:hidden bg-stone-50 dark:bg-[#0a0a0a] border-t border-stone-200 dark:border-stone-800 absolute w-full"
      >
        <div class="flex flex-col px-6 py-6 space-y-5">
          <button
            v-for="link in links"
            :key="link.section"
            type="button"
            @click="goToSection(link.section)"
            class="flex items-center gap-3 text-stone-600 dark:text-stone-300 font-medium hover:text-stone-900 dark:hover:text-white transition-colors"
          >
            <span class="font-mono text-xs text-amber-500">{{ link.num }}</span>
            {{ link.label }}
          </button>
        </div>
      </div>
    </Transition>
  </nav>
</template>
